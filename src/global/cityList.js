var nameMap = {
	'商': '商丘市',
	'伊克昭盟': '鄂尔多斯市',
};

function jsLeft(sl, leftn) {
	return sl.substring(0, leftn);
}

function jsRight(sr, rightn) {
	return sr.substring(sr.length - rightn, sr.length);
}

function convertProvinceName2API(name) {
	var provList = {
		"贵州": "贵州省",
		"山西": "山西省",
		"福建": "福建省",
		"黑龙江": "黑龙江省",
		"湖北": "湖北省",
		"青海": "青海省",
		"西藏": "西藏自治区",
		"山东": "山东省",
		"海南": "海南省",
		"天津": "天津市",
		"宁夏": "宁夏回族自治区",
		"辽宁": "辽宁省",
		"广东": "广东省",
		"重庆": "重庆市",
		"深圳": "深圳市",
		"江西": "江西省",
		"陕西": "陕西省",
		"内蒙古": "内蒙古自治区",
		"四川": "四川省",
		"河南": "河南省",
		"上海": "上海市",
		"云南": "云南省",
		"湖南": "湖南省",
		"安徽": "安徽省",
		"河北": "河北省",
		"江苏": "江苏省",
		"吉林": "吉林省",
		"北京": "北京市",
		"新疆": "新疆维吾尔自治区",
		"浙江": "浙江省",
		"甘肃": "甘肃省",
		"广西": "广西壮族自治区",
		"台湾": "台湾省",
		"香港": "香港特别行政区",
		"澳门": "澳门特别行政区"
	};
	return provList[name];
}
var provinceList = {
	"上海": "shanghai",
	"河北": "hebei",
	"山西": "shanxi",
	"内蒙古": "neimenggu",
	"辽宁": "liaoning",
	"吉林": "jilin",
	"黑龙江": "heilongjiang",
	"江苏": "jiangsu",
	"浙江": "zhejiang",
	"安徽": "anhui",
	"福建": "fujian",
	"江西": "jiangxi",
	"山东": "shandong",
	"河南": "henan",
	"湖北": "hubei",
	"湖南": "hunan",
	"广东": "guangdong",
	"广西": "guangxi",
	"海南": "hainan",
	"四川": "sichuan",
	"贵州": "guizhou",
	"云南": "yunnan",
	"西藏": "xizang",
	"陕西": "shanxi1",
	"甘肃": "gansu",
	"青海": "qinghai",
	"宁夏": "ningxia",
	"新疆": "xinjiang",
	"北京": "beijing",
	"天津": "tianjin",
	"重庆": "chongqing",
	"香港": "xianggang",
	"澳门": "aomen"
};

function cityNameConvert(city, mode) {
	var cityList = {
		"和田市": "和田地区",
		"喀什市": "喀什地区",
		"阿克苏市": "阿克苏地区",
		"吐鲁番市": "吐鲁番地区",
		"哈密市": "哈密地区",
		"塔城市": "塔城地区",
		"阿里市": "阿里地区",
		"那曲市": "那曲地区",
		"山南市": "山南地区",
		"大理市": "大理白族自治州",
		"红河州": "红河哈尼族彝族自治州",
		"呼伦贝尔盟": "呼伦贝尔市",
		"乌兰查布市": "乌兰查布盟",
		"巴彦淖尔盟": "巴彦淖尔市",
		"大兴安岭市": "大兴安岭地区",
		"达川市": "达州市"
	};
	var cityList2 = {
		"和田地区": "和田市",
		"喀什地区": "喀什市",
		"阿克苏地区": "阿克苏市",
		"吐鲁番地区": "吐鲁番市",
		"哈密地区": "哈密市",
		"塔城地区": "塔城市",
		"阿里地区": "阿里市",
		"那曲地区": "那曲市",
		"山南地区": "山南市",
		"大理白族自治州": "大理市",
		"红河哈尼族彝族自治州": "红河州",
		"呼伦贝尔市": "呼伦贝尔盟",
		"乌兰查布盟": "乌兰查布市",
		"巴彦淖尔市": "巴彦淖尔盟",
		"大兴安岭地区": "大兴安岭市",
		"达州市": "达川市"
	};
	//转换
	if (mode) {
		return (typeof cityList[city] == 'undefined') ? city : cityList[city];
	} else { //提示信息回转
		return (typeof cityList2[city] == 'undefined') ? city : cityList2[city];
	}
}

function convertAPI2ProvinceName(name) {
	var convName = jsLeft(name, 2);
	if (convName == '内蒙') {
		convName = '内蒙古';
	} else if (convName == '黑龙') {
		convName = '黑龙江';
	}
	return convName;
}

function getProvinceName(city) {
	var isFined = false;
	var strProv;
	var province = require('./provinces.js');
	for (var key in province) {
		var cityList = province[key];
		for (var i = 0; i < cityList.length && !isFined; i++) {
			if (cityList[i] == city) {
				isFined = false;
				strProv = key;
				break;
			}
		}
		if (isFined) {
			break;
		}
	}
	return strProv;
}

function getPassedDateName(days) {
	var curDate = new Date();
	var date = new Date(curDate.getTime() - days * 24 * 60 * 60 * 1000);
	var a = date.getFullYear();
	var b = jsRight(('0' + (date.getMonth() + 1)), 2);
	var c = jsRight(('0' + date.getDate()), 2);
	var output = a + '-' + b + '-' + c;
	return output;
}

function now() {
	var date = new Date();
	var a = date.getFullYear();
	var b = jsRight(('0' + (date.getMonth() + 1)), 2);
	var c = jsRight(('0' + date.getDate()), 2);
	var d = jsRight('0' + date.getHours(), 2);
	var e = jsRight('0' + date.getMinutes(), 2);
	var f = jsRight('0' + date.getSeconds(), 2);
	var output = a + '-' + b + '-' + c + ' ' + d + ':' + e + ':' + f;
	return output;
}

function dateDiff(end, start) {
	var a = new Date(end);
	var b = new Date(start);
	return parseInt(((a - b) / 24 / 60 / 60 / 1000).toFixed(0));
}

function getPassedDateList(days) {
	var data = [];
	for (var i = days - 1; i >= -1; i--) {
		data.push(getPassedDateName(i));
	}
	return data;
}

var color = ['#2988b8', '#6a71ba', "#4E7CCC", "#36B3C3", "#4ECDA5", "#94E08A", "#E2F194", "#EDCC72", "#F8AB60", "#F9815C", "#EB4456", "#C82B3D"];

var isChartInited = false;

function asyncAjax(strUrl) {
	var Data = {};
	var $ = require('../vendors/jquery.min.js');
	$.ajax({
		async: false, //同步
		dataType: "jsonp",
		callback: "Jsonpcallback",
		url: strUrl,
		success: function(data, status) {
			Data = data;
		},
		error: function(e) {
			console.log("read data error:<br>");
			console.log(e.responseText);
		}
	});
	return Data;
}

module.exports = {
	isChartInited: isChartInited,
	color: color,
	getPassedDateList: getPassedDateList,
	dateDiff: dateDiff,
	now: now,
	getPassedDateName: getPassedDateName,
	getProvinceName: getProvinceName,
	convertAPI2ProvinceName: convertAPI2ProvinceName,
	cityNameConvert: cityNameConvert,
	provinceList: provinceList,
	convertProvinceName2API: convertProvinceName2API,
	jsLeft: jsLeft,
	jsRight: jsRight,
	asyncAjax: asyncAjax,
	nameMap: nameMap
};