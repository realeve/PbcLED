var SRC = './vendors/';
var $ = require(SRC + 'jquery.min.js');
var _ = require(SRC + 'lodash.min.js');
var echarts = require(SRC + 'echarts.min.js');

var chinaJson = require(SRC + 'china.json');
echarts.registerMap('china', chinaJson);

var gb = require('./global/cityList.js');
var json = require('./global/chinaCity.js');

var app = (function() {
	var dom = document.getElementById("container");
	var myChart = echarts.init(dom);
	var option = null;
	var iTop = 40;

	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = encodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
		if (r !== null) return decodeURI(r[2]);
		return null; //返回参数值
	}
	var answerNum = {};

	var convertData = function(obj) {
		var data = [];
		answerNum = {
			num: 0,
			pass_num: 0
		};
		for (var key in obj) {
			var newKey;
			if (key.indexOf('市') == -1) {
				newKey = gb.jsLeft(key, 2);
			} else {
				newKey = key.replace('市', '');
			}
			data.push([newKey, obj[key].num]);
			answerNum.num += obj[key].num;
			answerNum.pass_num += obj[key].pass_num;
		}
		return data;
	};

	function getPoints(data) {

		var min = Infinity;
		var max = -Infinity;
		data.forEach(function(item) {
			// item[1] = Math.sqrt(item[1]);
			max = Math.max(item[1], max);
			min = Math.min(item[1], min);
		});

		var geo = myChart.getModel().getComponent('geo').coordinateSystem;

		var points = [];

		var dotNums = getUrlParam('num');
		if (dotNums == null) {
			dotNums = 1000;
		}

		data.forEach(function(item) {
			var randomCount = Math.max(Math.round(item[1] / max * dotNums), 5);
			var name = item[0].trim();
			if (name == '阿勒') {
				name = '阿勒泰'
			} else if (name == '大兴') {
				name = '大兴安岭'
			} else if (name == '博尔') {
				name = '博尔塔拉';
			}
			var region = geo.getRegion(name);

			if (!region) {
				console.log(name + ' 地理数据未获取')
				return;
			}
			var rect = region.getBoundingRect();
			var cp = region.center;
			var r = Math.max(
				rect.y + rect.height - cp[1],
				rect.x + rect.width - cp[0],
				cp[0] - rect.x,
				cp[1] - rect.y
			);


			for (var i = 0; i < randomCount; i++) {
				var coord = [Infinity, Infinity];
				var count = 0;
				while (!region.contain(coord)) {
					var randomAngle = Math.random() * Math.PI * 2;
					var randomR = Math.random() * r;
					coord[0] = cp[0] + Math.cos(randomAngle) * randomR;
					coord[1] = cp[1] + Math.sin(randomAngle) * randomR;

					count++;
					if (count > 100) {
						break;
					}
				}
				points.push(coord);
			}
		});
		return points;
	}

	echarts.registerMap('china-cities', json);

	myChart.setOption({
		backgroundColor: '#404a59',
		geo: {
			map: 'china-cities',
			silent: true,
			roam: true,
			itemStyle: {
				normal: {
					areaColor: '#323c48',
					borderColor: '#111',
					borderWidth: 0
				},
				emphasis: {
					areaColor: '#2a333d'
				}
			}
		},
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
			right: '5%',
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
		series: [{
			type: 'scatter',
			coordinateSystem: 'geo',
			data: []
		}]
	});
	var startDate = '2016-09-01'; //gb.getPassedDateName(7);

	setInterval(function() {
		getDataList();
		console.log('数据已更新');
	}, 54 * 1000);

	var getDataList = function() {

		var apiUrl = 'https://pro.wenjuan.com/report/s8/5795736d585729fdc48ff59d/page2/?start_time=' + startDate + '&end_time=' + gb.getPassedDateName(-1);

		$.ajax({
			url: apiUrl,
			async: false, //异步
			dataType: "jsonp",
			callback: "Jsonpcallback"
		}).done(function(obj) {
			var data = convertData(obj);

			var points = getPoints(data);

			//console.log(points);
			myChart.setOption({
				series: [{
					//large: true,
					data: points,
					symbolSize: 2,
					blendMode: 'lighter',
					silent: true,
					itemStyle: {
						normal: {
							shadowBlur: 10,
							shadowColor: 'rgba(37, 140, 249, 0.5)',
							color: 'rgba(37, 140, 249, 0.6)'
						}
					},
				}],
				title: [{
					id: 'curNum',
					'text': "活动参与数 : " + (answerNum.num).toLocaleString()
				}, {
					id: 'passedNum',
					'text': "通过人数 : " + (answerNum.pass_num).toLocaleString()
				}]
			});
			$('[name="refreshTime"]').text('最近更新 ' + gb.now());
			//console.log(JSON.stringify(option));
			//console.log(JSON.stringify(myChart.getOption()));
		});
	};
	return {
		init: getDataList,
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