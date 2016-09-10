var SRC = './vendors/';
var $ = require(SRC + 'jquery.min.js');
var _ = require(SRC + 'lodash.min.js');
var echarts = require(SRC + 'echarts.min.js');

var chinaJson = require(SRC + 'china.json');
echarts.registerMap('china', chinaJson);

var gb = require('./global/cityList.js');
var json = require('./global/chinaCity.js');
var geo = require('./global/geo.js');
var geoCoordMap = require('./global/geoCoordMap.js');

var app = (function() {
	var dom = document.getElementById("container");
	var myChart = echarts.init(dom);
	var option = null;
	var max = {
		num: 0,
		pass_num: 0,
		average: 0
	};
	//各市历史数据，各省历史数据
	var hisData = [],
		provHisData = [];
	var answerNum;
	var iTop = 40;


	var startDate = '2016-09-01'; //gb.getPassedDateName(7);
	function getDateNum() {
		var strToday = gb.getPassedDateName(0);
		var dateInterval = gb.dateDiff(strToday, startDate) + 1;
		return Math.min(dateInterval, 7);
	}
	var dateNum = getDateNum();

	var currentIndex = dateNum - 1;
	//过去7天日期
	var dateList = gb.getPassedDateList(dateNum);
	//console.log(dateList);
	var timeLineData = [];
	timeLineData = dateList.map(function(elem, i) {
		return {
			value: gb.jsRight(elem, 5),
			tooltip: {
				formatter: (i === 0) ? '一周前' : '{b}'
			},
		};
	});
	timeLineData = timeLineData.slice(0, timeLineData.length - 1);

	function getSymbolSize(val) {
		return Math.min(Math.max(val[2] / 10, 10), 40);
	}

	function getOption(options, max) {

		return {
			baseOption: {
				backgroundColor: '#3c4656',
				color: gb.color,
				animation: true,
				animationDuration: 1000,
				animationEasing: 'cubicInOut',
				animationDurationUpdate: 1000,
				animationEasingUpdate: 'cubicInOut',
				title: [{
					text: '中国人民银行反假币宣传活动各地区参与情况',
					subtext: '技术支持：中国印钞造币总公司',
					sublink: 'http://mp.weixin.qq.com/mp/getmasssendmsg?__biz=MzA5MDYwNzA2NQ==#wechat_webview_type=1&wechat_redirect',
					left: 'center',
					top: iTop,
					textStyle: {
						color: '#fdfdfd',
						fontSize: 30
					},
					subtextStyle: {
						color: '#fdfdfd',
						fontSize: 16
					}
				}, {
					text: '数据来源：2016年反假币宣传调查',
					x2: '10',
					y2: '15',
					textStyle: {
						color: '#bbb',
						fontSize: 14
					}
				}, {
					id: 'statistic',
					right: '10',
					top: '10',
					//width: 100,
					textStyle: {
						color: '#fff',
						fontSize: 16
					}
				}, {
					id: 'curNum',
					textAlign: 'left',
					left: '20',
					y2: '80',
					textStyle: {
						fontSize: 30,
						color: 'rgba(255, 255, 255, 0.9)'
					}
				}, {
					id: 'passedNum',
					textAlign: 'left',
					left: '20',
					y2: '30',
					textStyle: {
						fontSize: 30,
						color: 'rgba(255, 255, 255, 0.9)'
					}
				}],
				tooltip: {
					trigger: 'item',
					formatter: function(params) {
						var obj;
						if (params.seriesType == 'map') {
							if (params.seriesIndex == 2) {
								if (typeof provHisData[currentIndex][curProvinceName] != 'undefined') {
									obj = provHisData[currentIndex][curProvinceName];
								}
								if (typeof obj[params.name] != 'undefined') {
									obj = obj[params.name];
								}
							} else {
								obj = hisData[currentIndex][params.name]; //[gb.convertProvinceName2API(params.name)];
							}
						} else if (params.seriesType == 'bar') {
							if (typeof provHisData[currentIndex][curProvinceName] != 'undefined') {
								obj = provHisData[currentIndex][curProvinceName];
							}
							if (typeof obj[params.name] != 'undefined') {
								obj = obj[params.name];
							}
						} else if (params.seriesType == 'line') {
							return curLineName + ' ' + params.name + '<br>参与人数:' + params.value;
						}
						//console.log(obj);
						if (typeof obj == 'undefined' || typeof obj.num == 'undefined') {
							return params.name + ' <br>   参与人数：0<br>   通过人数：0<br>   平均得分：无';
						} else {
							return params.name + ' <br>   参与人数：' + (obj.num).toLocaleString() + '<br>   通过人数：' + (obj.pass_num).toLocaleString() + '<br>   平均得分：' + obj.average;
						}
					}
				},
				grid: [{
					right: 20,
					top: '45%',
					bottom: 40,
					width: '14%'
				}, {
					"x": 'center',
					"top": "70%",
					"bottom": "5%",
					"width": "60%",
				}],
				xAxis: [{
					id: "bar",
					type: 'value',
					scale: true,
					position: 'top',
					boundaryGap: false,
					splitLine: {
						show: false
					},
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: false,
						margin: 2,
						textStyle: {
							color: '#aaa'
						}
					},
					gridIndex: 0
				}, {
					id: 'line',
					boundaryGap: false,
					show: false,
					type: 'category',
					gridIndex: 1
				}],
				yAxis: [{
					id: "bar",
					type: 'category',
					//name: 'TOP 20',
					nameGap: 16,
					axisLine: {
						show: false,
						lineStyle: {
							color: '#ddd'
						}
					},
					axisTick: {
						show: false,
						lineStyle: {
							color: '#ddd'
						}
					},
					axisLabel: {
						interval: 0,
						textStyle: {
							color: '#ddd'
						}
					},
					data: [],
					gridIndex: 0
				}, {
					id: 'line',
					type: 'value',
					position: 'left',
					boundaryGap: false,
					show: false,
					gridIndex: 1
				}],
				visualMap: [{
					min: 0,
					max: Math.ceil(max / 1000) * 1000,
					calculable: true,
					inRange: {
						color: ['#2988b8', '#6a71ba', "#AE7CCC", '#d94e5d']
					},
					textStyle: {
						color: '#fff'
					},
					left: 'right',
					bottom: '5%',
					itemHeight: 180,
					text: ['参与人数 ( 人)'],
					textGap: 30,
					seriesIndex: 0,
					id: 'china'
				}, {
					min: 0,
					max: Math.ceil(max / 100) * 10,
					calculable: true,
					inRange: {
						color: ['#2988b8', '#6a71ba', "#AE7CCC", '#d94e5d']
					},
					textStyle: {
						color: '#fff'
					},
					//show: false,
					left: 'right',
					bottom: '55%',
					itemHeight: 120,
					text: ['参与人数 ( 人)'],
					textGap: 30,
					seriesIndex: 2,
					id: 'province'
				}],
				series: [{
					name: '所有城市',
					// type: 'scatter',
					// coordinateSystem: 'geo',
					// symbolSize: function(val) {
					// 	return getSymbolSize(val);
					// },
					type: 'map',
					mapType: 'china',
					roam: true,
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: true,
							textStyle: {
								color: '#fafafa'
							}
						},
						emphasis: {
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: '#ddb926'
						}
					},
					left: '1%',
					right: '25%'
				}, {
					id: 'bar1',
					name: '各地区详情',
					//stack: '参与人数',
					zlevel: 2,
					type: 'bar',
					symbol: 'none',
					label: {
						normal: {
							formatter: '{c}',
							position: 'insideRight',
							show: false,
							textStyle: {
								color: '#fff'
							}
						}
					},
					data: [],
					barMaxWidth: 40
				}, {
					type: 'map',
					id: 'detail',
					roam: true,
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: true,
							textStyle: {
								color: '#fafafa'
							}
						},
						emphasis: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						}
					},
					itemStyle: {
						normal: {
							borderColor: '#389BB7',
							areaColor: '#fff',
						},
						emphasis: {
							areaColor: '#389BB7',
							borderWidth: 0
						}
					},
					animation: false,
					left: '75%',
					right: 'auto',
					top: '10',
					bottom: '58%'
				}, {
					id: 'line',
					xAxisIndex: 1,
					yAxisIndex: 1,
					z: 10,
					min: 0,
					type: 'line',
					legendHoverLink: true,
					itemStyle: {
						emphasis: {
							opacity: 1,
							borderColor: 'rgba(255,255,255,0.8)',
							borderWidth: '8'
						},
						normal: {
							borderColor: '#ffe',
							borderWidth: '4'
						}
					},
					lineStyle: {
						normal: {
							color: '#df0040',
							width: '2'
						}
					},
					symbol: 'circle',
					symbolSize: 15,
					smooth: true,
					markPoint: {
						label: {
							normal: {
								formatter: function(param) {
									var x = param.data.coord[0];
									return curLineName + ':\n' + param.value + ' 人(' + xData[x] + ')';
								}
							}
						},
						data: [{
							type: 'max',
							name: '最大值'
						}],
						symbol: 'circle',
						symbolOffset: [0, -30],
						itemStyle: {
							normal: {
								color: 'rgba(0,0,0,0)'
							}
						}
					}
				}]
			},
			timeline: {
				axisType: 'category',
				playInterval: 4000,
				data: timeLineData,
				currentIndex: currentIndex,
				label: {
					normal: {
						textStyle: {
							color: '#a6a9ad'
						}
					},
					emphasis: {
						textStyle: {
							color: '#fff'
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#a6a9ad',
						borderColor: '#a6a9ad'
					}
				},
				checkpointStyle: {
					color: '#4e7ccc',
					borderColor: '#bbb',
					borderWidth: 2
				},
				controlStyle: {
					show: false
				},
				lineStyle: {
					color: '#a6a9ad',
					//type:'dotted',
					width: 1
				}
			},
			options: options
		};
	}
	var readData = function(obj) {
		var average = [],
			num = [],
			pass_num = [];
		answerNum = {
			num: 0,
			pass_num: 0
		};
		var sum = 0;
		for (var key in obj) {
			average.push({
				name: key,
				value: obj[key].average
			});
			num.push({
				name: key,
				value: obj[key].num
			});
			pass_num.push({
				name: key,
				value: obj[key].pass_num
			});
			sum += obj[key].num;
			max.num = Math.max(max.num, obj[key].num);
			max.pass_num = Math.max(max.pass_num, obj[key].pass_num);
			max.average = Math.max(max.average, obj[key].average);
			answerNum.num += obj[key].num;
			answerNum.pass_num += obj[key].pass_num;
		}
		obj.sum = sum;
		return {
			average: average,
			num: num,
			pass_num: pass_num,
			hisData: obj
		};
	};

	var convertData = function(apiData) {
		var res = [];
		var convData = [];
		var data = [];
		data = apiData.map(function(item) {
			var newKey = gb.convertAPI2ProvinceName(item.name.trim());
			return {
				name: newKey,
				value: item.value
			};
		});
		return data;
	};

	function getTop10(data, num) {
		var res = (data.sort(function(a, b) {
			return b.value[2] - a.value[2];
		}).slice(0, num));
		return res;
	}

	var options = [];

	function renderBarData(obj, city) {

		var barData = [],
			barData2 = [],
			provData = [],
			categoryData = [];
		var sum = 0,
			count = 0,
			passSum = 0;

		for (var key in obj) {
			var val = obj[key].num;
			provData.push({
				name: key,
				value: val
			});
			sum += val;
			passSum += obj[key].pass_num;
			count++;
		}

		if (count) {
			provData = _.sortBy(provData, 'value');
			provData.map(function(data) {
				categoryData.push(data.name.trim());
				barData.push(data.value);
			});
		}

		myChart.setOption({
			yAxis: [{
				id: 'bar',
				data: categoryData
			}],
			xAxis: [{
				id: 'bar',
				axisLabel: {
					show: false //!!count
				},
				min: 0
			}],
			title: {
				id: 'statistic',
				text: count ? gb.convertProvinceName2API(city) + ' \n\n' + (passSum).toLocaleString() + '/' + (sum).toLocaleString() : '' //' 截止至' + dateList[currentIndex] +
			},
			visualMap: [{
				max: Math.ceil(barData[barData.length - 1] / 100) * 100,
				seriesIndex: 2,
				id: 'province'
			}],
			series: [{
				id: 'bar1',
				data: barData
			}, {
				id: 'detail',
				data: provData
			}]
		});
	}

	function getDataByProvince(city, real) {
		var pName = city;

		var apiUrl = 'https://pro.wenjuan.com/report/s8/5795736d585729fdc48ff59d/page3/?start_time=' + startDate + '&end_time=';

		if (!real && typeof provHisData[currentIndex] != 'undefined' &&
			typeof provHisData[currentIndex][pName] != 'undefined') {
			//缓存历史数据
			renderBarData(provHisData[currentIndex][pName], pName);
		} else { //载入数据

			//渲染二级地图
			var provinceName = gb.provinceList[city];
			$.get('./json/province/' + provinceName + '.json', function(geoJson) {
				echarts.registerMap(provinceName, geoJson);
				myChart.setOption(option = {
					series: [{
						type: 'map',
						id: 'detail',
						name: provinceName,
						mapType: provinceName
					}]
				});
			});

			$.ajax({
				url: apiUrl + dateList[currentIndex + 1] + '&province=' + pName,
				async: false, //异步
				dataType: "jsonp",
				callback: "Jsonpcallback"
			}).done(function(obj) {
				provHisData[currentIndex] = {};
				provHisData[currentIndex][pName] = obj;

				renderBarData(obj, pName);
			});
		}

	}

	var curProvinceName;
	var curLineName;
	var xData = [];
	var curType = 0;

	function refreshBarData(real) {
		if (typeof curProvinceName != 'undefined') {
			getDataByProvince(curProvinceName, real);
		}
	}
	myChart.on('click', function(params) {
		//console.log(params);
		if (params.componentType == 'series' && params.componentSubType == 'map') { //省级

			curType = 0;
			curLineName = params.name;
			if (typeof gb.provinceList[params.name] != 'undefined') {
				getHisDataByCity(curLineName);
				getDataByProvince(params.name, false);
				curProvinceName = params.name;
			} else {

				curType = 1;
				getHisDataByCity(curLineName);
			}

		} else if (params.componentType == 'series' && params.componentSubType == 'bar') {
			curType = 1;
			curLineName = params.name;
			getHisDataByCity(curLineName);
		} else if (params.componentType == 'timeline') { //点击timeline
			refreshBarData(false);
		}
	});

	myChart.on('timelinechanged', function(params) {
		currentIndex = params.currentIndex;
		refreshBarData(false);
	});

	function getHisDataByCity(city) {

		var apiUrl = 'https://pro.wenjuan.com/report/s8/5795736d585729fdc48ff59d/page4/?type=' + curType + '&name=' + city;


		$.ajax({
			url: apiUrl,
			async: false, //异步
			dataType: "jsonp",
			callback: "Jsonpcallback"
		}).done(function(obj) {
			var data = obj.data;
			xData = [];
			var lineData = [];
			data.map(function(item) {
				xData.push(item[0]);
				lineData.push(item[1]);
			});
			var tLen = timeLineData.length;
			var days = lineData.length;
			if (days > tLen) {
				xData = xData.slice(days - tLen);
				lineData = lineData.slice(days - tLen);
			}
			var option = {
				xAxis: [{
					id: 'line',
					data: xData
				}],
				series: [{
					id: 'line',
					name: curLineName,
					data: lineData
				}]
			};
			myChart.setOption(option);
		});
	}

	var renderDataByID = function(apiUrl, i) {
		$.ajax({
			url: apiUrl + dateList[i],
			async: false, //异步
			dataType: "jsonp",
			callback: "Jsonpcallback"
		}).done(function(obj) {

			var data = readData(obj);

			hisData.push(data.hisData);
			//hisData[currentIndex] = data.hisData;
			var item = {
				series: [{
					data: convertData(data.num)
				}],
				title: [{
					id: 'curNum',
					'text': "活动参与数 : " + (answerNum.num).toLocaleString(),
					value: answerNum.num
				}, {
					id: 'passedNum',
					'text': "通过人数 : " + (answerNum.pass_num).toLocaleString()
				}]
			};

			options.push(item);

			renderDataByOptions(true);
		});
	};

	var renderDataByOptions = function(saveItem) {

		hisData = _.sortBy(hisData, 'sum');

		options = _.sortBy(options, function(item) {
			var val = _.sortBy(item.series[0].data, 'value');
			var len = val.length;
			if (max.num < val[len - 1].value) {
				max.num = val[len - 1].value;
			}
			return item.title[0].value;
		});
		option = getOption(options, max.num);

		if (option && typeof option === "object") {
			myChart.setOption(option, true);
			gb.isChartInited = true;
			$('[name="refreshTime"]').text('最近更新 ' + gb.now());
		}

		//数据全部读取完毕，开始缓存
		if (options.length == currentIndex + 1) {
			for (var i = 0; i < currentIndex; i++) {
				if (saveItem) {
					localStorage.setItem('hisData_province_' + dateList[i], JSON.stringify(options[i]));
					localStorage.setItem('hisData_province_tips' + dateList[i], JSON.stringify(hisData[i]));
				}
			}
		}
	};


	var getDataList2 = function() {

		var apiUrl = 'https://pro.wenjuan.com/report/s8/5795736d585729fdc48ff59d/page/?start_time=' + startDate + '&end_time=';

		//最新信息不缓存
		//renderDataByID(apiUrl, currentIndex);

		for (var i = currentIndex + 1; i > 0; i--) {

			var hisItem = localStorage['hisData_province_' + dateList[i - 1]];
			var hisItemTips = localStorage['hisData_province_tips' + dateList[i - 1]];
			if (typeof hisItem == 'undefined' || i == currentIndex + 1) {
				renderDataByID(apiUrl, i);
			} else {
				//从本地缓存取值
				hisItem = JSON.parse(hisItem);
				options.push(hisItem);
				hisData.push(JSON.parse(hisItemTips));
				renderDataByOptions(false);
			}
		}
	};

	var getDataList = function() {

		var apiUrl = 'https://pro.wenjuan.com/report/s8/5795736d585729fdc48ff59d/page/?start_time=' + startDate + '&end_time=';

		for (var i = currentIndex; i >= 0; i--) {
			$.get({
				url: apiUrl + dateList[i + 1],
				async: false, //异步
				dataType: "jsonp",
				callback: "Jsonpcallback",
				success: function(obj) {
					var data = readData(obj);
					hisData.push(data.hisData);
					hisData = _.sortBy(hisData, 'sum');

					options.push({
						series: [{
							data: convertData(data.num)
						}],
						title: [{
							id: 'curNum',
							'text': "活动参与数 : " + (answerNum.num).toLocaleString(),
							value: answerNum.num
						}, {
							id: 'passedNum',
							'text': "通过人数 : " + (answerNum.pass_num).toLocaleString()
						}]
					});
					//因为异步原因，需要对数据做排序处理
					options = _.sortBy(options, function(item) {
						return item.title[0].value;
					});
					option = getOption(options, max.num);
					if (option && typeof option === "object") {
						myChart.setOption(option, true);
						isChartInited = true;
						$('[name="refreshTime"]').text('最近更新 ' + gb.now());
					}
				}
			});
		}
	};

	setInterval(function() {
		if (gb.isChartInited) {
			refreshData();
			$('[name="refreshTime"]').text('最近更新 ' + gb.now());
			console.log('数据已更新');
		}
	}, 54 * 1000);

	function refreshData() {
		var apiUrl = 'https://pro.wenjuan.com/report/s8/5795736d585729fdc48ff59d/page/?start_time=' + startDate + '&end_time=';

		$.ajax({
			url: apiUrl + gb.getPassedDateName(-1),
			//async: false, //异步
			dataType: "jsonp",
			callback: "Jsonpcallback"
		}).done(function(obj) {
			var data = readData(obj);
			hisData[dateNum - 1] = data.hisData;
			options[dateNum - 1] = {
				series: [{
					data: convertData(data.num)
				}],
				title: [{
					id: 'curNum',
					'text': "活动参与数 : " + (answerNum.num).toLocaleString()
				}, {
					id: 'passedNum',
					'text': "通过人数 : " + (answerNum.pass_num).toLocaleString()
				}]
			};
			option = {
				visualMap: [{
					max: Math.ceil(max.num / 1000) * 1000,
					seriesIndex: 0,
					id: 'china'
				}],
				options: options
			};
			myChart.setOption(option);

		});

		refreshBarData(true);
	}

	return {
		init: getDataList2,
		resize: function() {
			myChart.resize();
		}
	};
})();

$(document).ready(function() {
	$('.anchorBL img').attr('src', './img/logo.png');
	app.init();
});
$(window).resize(function() {
	app.resize();
});