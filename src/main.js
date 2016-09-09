var SRC = './vendors/';
var $ = require(SRC + 'jquery.min.js');
var _ = require(SRC + 'lodash.min.js');

require(SRC + 'bmap.min.js');

var bmap = require('./global/bmap.js');
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

	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = encodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
		if (r !== null) return decodeURI(r[2]);
		return null; //返回参数值
	}
	var chartType = getUrlParam('type');
	if (chartType == null) {
		chartType = 'scatter';
	}

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
		return Math.min(Math.max(val[2] / 10, 10), 30);
	}

	function getOption(options, max) {

		return {
			baseOption: {
				nameMap: gb.nameMap,
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
					right: '8%',
					top: '35%',
					width: 100,
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
						var obj = hisData[currentIndex][params.name];
						return params.name + ' <br>   参与人数：' + (obj.num).toLocaleString() + '<br>   通过人数：' + (obj.pass_num).toLocaleString() + '<br>   平均得分：' + obj.average;
					}
				},
				legend: {
					//orient: 'vertical',
					//y: 'top',
					top: iTop + 100,
					x: 'center',
					data: ['所有城市', 'Top 20'],
					textStyle: {
						color: '#fff'
					},
					selected: {
						'Top 20': chartType == 'scatter'
					}
				},
				//geo: geo,
				bmap: bmap,
				grid: {
					right: 20,
					top: '40%',
					bottom: 40,
					width: '14%'
				},
				xAxis: {
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
				},
				yAxis: {
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
					data: []
				},
				visualMap: {
					min: 0,
					max: Math.ceil(max / 1000) * 1000,
					calculable: true,
					inRange: {
						color: ['#2988b8', '#6a71ba', "#AE7CCC", '#f94e5d']
					},
					textStyle: {
						color: '#fff'
					},
					left: 'right',
					bottom: '5%',
					itemHeight: 180,
					text: ['参与人数 ( 人)'],
					textGap: 30
				},
				series: [{
					name: '所有城市',
					type: chartType,
					coordinateSystem: 'bmap',
					symbolSize: function(val) {
						return getSymbolSize(val);
					},
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: false
						},
						emphasis: {
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: '#ddb926'
						}
					}
				}, {
					name: 'Top 20',
					type: 'effectScatter',
					coordinateSystem: 'bmap',
					symbol: 'pin',
					symbolSize: function(val) {
						return 1.5 * getSymbolSize(val);
					},
					showEffectOn: 'render',
					rippleEffect: {
						brushType: 'stroke'
					},
					hoverAnimation: true,
					label: {
						normal: {
							formatter: function(param) {
								return ('No.' + (1 + param.dataIndex) + '\n ' + param.name);
							},
							position: 'inside',
							show: true,
							textStyle: {
								color: '#fff',
								fontSize: 14
							}
						}
					},
					itemStyle: {
						normal: {
							color: '#f4e925',
							shadowBlur: 10,
							shadowColor: '#333'
						}
					},
					zlevel: 1
				}, {
					id: 'bar1',
					name: '通过',
					stack: '参与人数',
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
					id: 'bar2',
					name: '未通过',
					stack: '参与人数',
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

	var convertData = function(data) {
		var res = [];
		console.log(' ----------  ');
		for (var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name.trim()];
			if (geoCoord) {
				res.push({
					name: data[i].name.trim(),
					value: geoCoord.concat(data[i].value)
				});
			} else {
				console.log(data[i].name.trim() + ' 地理数据未获取');
			}
		}
		return res;
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
			var val = obj[key].num; //originData[currentIndex][key];
			provData.push({
				name: key,
				noPass_num: val - obj[key].pass_num,
				pass_num: obj[key].pass_num,
				all: val
			});
			sum += val;
			passSum += obj[key].pass_num;
			count++;
		}

		if (count) {
			provData = _.sortBy(provData, 'all');
			provData.map(function(data) {
				categoryData.push(data.name.trim());
				barData.push(data.pass_num);
				barData2.push(data.noPass_num);
			});
		}

		myChart.setOption({
			yAxis: {
				data: categoryData
			},
			xAxis: {
				axisLabel: {
					show: false //!!count
				},
				min: 0
			},
			title: {
				id: 'statistic',
				text: count ? city + '  ( ' + (passSum).toLocaleString() + '/' + (sum).toLocaleString() + ' ) 人通过' : '' //' 截止至' + dateList[currentIndex] +
			},
			series: [{
				id: 'bar1',
				data: barData
			}, {
				id: 'bar2',
				data: barData2
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

	var curProvnceName;

	function refreshBarData(real) {
		if (typeof curProvnceName != 'undefined') {
			getDataByProvince(curProvnceName, real);
		}
	}
	myChart.on('click', function(params) {
		//console.log(params);
		if (params.componentType == 'series') { //市级
			//window.open('http://map.baidu.com/?newmap=1&s=con%26wd%3D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%93%B6%E8%A1%8C+' + encodeURIComponent(params.name + '分行') + '%26c%3D75&from=alamap&tpl=mapdots');
			provnceName = gb.getProvinceName(params.name);
			getDataByProvince(provnceName, false);
			curProvnceName = provnceName;
		} else if (params.componentType == 'geo') { //省级
			getDataByProvince(params.name, false);
			curProvnceName = params.name;
		} else if (params.componentType == 'timeline') { //点击timeline
			refreshBarData(false);
		}
	});

	myChart.on('timelinechanged', function(params) {
		currentIndex = params.currentIndex;
		refreshBarData(false);
	});

	function handleBaiduMap() {
		// 获取百度地图实例，使用百度地图自带的控件
		var bmap = myChart.getModel().getComponent('bmap').getBMap();
		bmap.addControl(new BMap.MapTypeControl({
			mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP]
		}));

		setTimeout(function() {
			$('.BMap_cpyCtrl').remove();
			$('.anchorBL img').attr('src', './img/logo.png').height('32.5px').width('180px');
			$('.anchorBL a').attr({
				"href": "http://www.pbc.gov.cn/",
				"title": "中国人民银行"
			})
			$('.anchorBL').css({
				"top": 20,
				"left": 20
			}).height('32.5px;');
		}, 300);

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
			var numData = convertData(data.num);
			options.push({
				series: [{
					data: numData
				}, {
					data: getTop10(numData, 20)
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
			handleBaiduMap();
			$('[name="refreshTime"]').text('最近更新 ' + gb.now());
		}

		//数据全部读取完毕，开始缓存
		if (options.length == currentIndex + 1) {
			for (var i = 0; i < currentIndex; i++) {
				if (saveItem) {
					localStorage.setItem('hisData_city_' + dateList[i], JSON.stringify(options[i]));
					localStorage.setItem('hisData_city_tips' + dateList[i], JSON.stringify(hisData[i]));
				}
			}
		}
	};


	var getDataList2 = function() {

		var apiUrl = 'https://pro.wenjuan.com/report/s8/5795736d585729fdc48ff59d/page2/?start_time=' + startDate + '&end_time=';

		//最新信息不缓存
		//renderDataByID(apiUrl, currentIndex);

		for (var i = currentIndex + 1; i > 0; i--) {

			var hisItem = localStorage['hisData_city_' + dateList[i - 1]];
			var hisItemTips = localStorage['hisData_city_tips' + dateList[i - 1]];
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

		var apiUrl = 'https://pro.wenjuan.com/report/s8/5795736d585729fdc48ff59d/page2/?start_time=' + startDate + '&end_time=';

		for (var i = currentIndex; i >= 0; i--) {
			//console.log(dateList[i+1]);
			$.ajax({
				url: apiUrl + dateList[i + 1],
				async: false, //异步
				dataType: "jsonp",
				callback: "Jsonpcallback"
			}).done(function(obj) {
				var data = readData(obj);
				hisData.push(data.hisData);

				var numData = convertData(data.num);
				options.push({
					series: [{
						data: numData
					}, {
						data: getTop10(numData, 20)
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
					gb.isChartInited = true;
					handleBaiduMap();
					$('[name="refreshTime"]').text('最近更新 ' + gb.now());
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
		var apiUrl = 'https://pro.wenjuan.com/report/s8/5795736d585729fdc48ff59d/page2/?start_time=' + startDate + '&end_time=';

		$.ajax({
			url: apiUrl + gb.getPassedDateName(-1),
			//async: false, //异步
			dataType: "jsonp",
			callback: "Jsonpcallback"
		}).done(function(obj) {

			var data = readData(obj);
			hisData[dateNum - 1] = data.hisData;

			var numData = convertData(data.num);
			options[dateNum - 1] = {
				series: [{
					data: numData
				}, {
					data: getTop10(numData, 20)
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
				visualMap: {
					max: Math.ceil(max.num / 1000) * 1000
				},
				options: options
			};

			myChart.setOption(option);
			handleBaiduMap();

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