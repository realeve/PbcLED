var province = {
	"安徽": ["安庆市", "亳州市", "蚌埠市", "合肥市", "滁州市", "巢湖市", "阜阳市", "贵池区", "淮北市", "黄山市", "界首市", "淮南市", "六安市", "马鞍山市", "明光市", "宿州市", "天长市", "铜陵市", "芜湖市", "宣州区"],
	"北京": ["北京市"],
	"澳门": ["澳门特别行政区"],
	"福建": ["福州市", "长乐市", "福安市", "福清市", "建瓯市", "龙海市", "建阳区", "晋江市", "龙岩市", "南安市", "南平市", "宁德市", "泉州市", "三明市", "邵武市", "石狮市", "莆田市", "武夷山市", "厦门市", "永安市", "漳平市", "漳州市"],
	"甘肃": ["兰州市", "白银市", "敦煌市", "陇南市", "嘉峪关市", "金昌市", "酒泉市", "临夏回族自治州", "天水市", "武威市", "平凉市", "玉门市", "西峰区", "张掖市"],
	"广东": ["广州市", "潮阳区", "潮州市", "澄海区", "从化区", "东莞市", "恩平市", "佛山市", "高明区", "高要区", "高州市", "鹤山市", "花都区", "化州市", "惠阳区", "惠州市", "江门市", "河源市", "揭阳市", "乐昌市", "雷州市", "廉江市", "连州市", "开平市", "罗定市", "茂名市", "梅州市", "南海区", "普宁市", "清远市", "番禺区", "三水区", "汕头市", "汕尾市", "韶关市", "深圳市", "顺德区", "四会市", "台山市", "吴川市", "新会区", "兴宁市", "阳春市", "阳江市", "英德市", "云浮市", "增城区", "湛江市", "中山市", "珠海市", "肇庆市"],
	"广西": ["南宁市", "来宾市", "北海市", "北流市", "防城港市", "百色市", "贵港市", "桂林市", "贺州市", "崇左市", "桂平市", "河池市", "合山市", "柳州市", "钦州市", "梧州市", "南宁市", "玉林市", "宜州市"],
	"贵州": ["贵阳市", "安顺市", "赤水市", "毕节市", "都匀市", "凯里市", "六盘水市", "清镇市", "铜仁市", "兴义市", "遵义市"],
	"海南": ["海口市", "琼海市", "三亚市", "儋州市", "琼山区", "海口市", "三沙市"],
	"河北": ["石家庄市", "廊坊市", "安国市", "保定市", "霸州市", "泊头市", "沧州市", "承德市", "定州市", "丰南区", "高碑店市", "邯郸市", "河间市", "衡水市", "黄骅市", "晋州市", "冀州市", "鹿泉区", "南宫市", "秦皇岛市", "任丘市", "三河市", "沙河市", "深州市", "唐山市", "武安市", "邢台市", "新乐市", "张家口市", "辛集市", "涿州市", "遵化市"],
	"河南": ["郑州市", "安阳市", "长葛市", "邓州市", "巩义市", "登封市", "鹤壁市", "辉县市", "焦作市", "开封市", "河南省", "灵宝市", "林州市", "漯河市", "洛阳市", "平顶山市", "濮阳市", "沁阳市", "南阳市", "汝州市", "三门峡市", "商丘市", "卫辉市", "舞钢市", "项城市", "荥阳市", "新密市", "新乡市", "信阳市", "新郑市", "偃师市", "义马市", "许昌市", "禹州市", "周口市", "驻马店市"],
	"黑龙江": ["哈尔滨市", "阿城区", "安达市", "北安市", "富锦市", "大庆市", "海林市", "海伦市", "鹤岗市", "黑河市", "佳木斯市", "鸡西市", "牡丹江市", "讷河市", "密山市", "宁安市", "七台河市", "齐齐哈尔市", "双城区", "双鸭山市", "尚志市", "绥芬河市", "绥化市", "铁力市", "同江市", "五常市", "五大连池市", "伊春市", "肇东市"],
	"湖北": ["武汉市", "荆州市", "安陆市", "丹江口市", "大冶市", "恩施土家族苗族自治州", "鄂州市", "当阳市", "广水市", "黄石市", "黄州区", "洪湖市", "荆门市", "老河口市", "利川市", "麻城市", "潜江市", "十堰市", "石首市", "随州市", "武穴市", "湖北省", "襄阳市", "咸宁市", "湖北省", "孝感市", "宜城市", "宜昌市", "应城市", "枣阳市", "钟祥市"],
	"湖南": ["常德市", "郴州市", "长沙市", "衡阳市", "洪江市", "怀化市", "津市市", "吉首市", "耒阳市", "冷水江市", "冷水滩区", "涟源市", "醴陵市", "浏阳市", "娄底市", "临湘市", "汨罗市", "邵阳市", "武冈市", "韶山市", "湘潭市", "益阳市", "湘乡市", "沅江市", "岳阳市", "张家界市", "株洲市", "资兴市", "永州市"],
	"吉林": ["长春市", "吉林市", "白城市", "白山市", "德惠市", "大安市", "敦化市", "和龙市", "公主岭市", "桦甸市", "集安市", "珲春市", "蛟河市", "九台区", "辽源市", "临江市", "梅河口市", "龙井市", "舒兰市", "四平市", "松原市", "洮南市", "通化市", "图们市", "延吉市", "长春市"],
	"江苏": ["南京市", "连云港市", "盐城市", "常熟市", "丹阳市", "常州市", "高邮市", "东台市", "海门市", "淮安市", "淮阴区", "江都区", "姜堰区", "江阴市", "靖江市", "金坛区", "昆山市", "南京市", "南通市", "溧阳市", "如皋市", "邳州市", "宿迁市", "南京市", "苏州市", "太仓市", "泰兴市", "泰州市", "通州区", "吴江区", "无锡市", "兴化市", "新沂市", "徐州市", "南京市", "扬中市", "扬州市", "宜兴市", "仪征市", "张家港市", "镇江市"],
	"江西": ["南昌市", "德兴市", "丰城市", "赣州市", "高安市", "吉安市", "景德镇市", "井冈山市", "九江市", "乐平市", "临川区", "萍乡市", "瑞昌市", "瑞金市", "上饶市", "新余市", "宜春市", "鹰潭市", "樟树市"],
	"辽宁": ["沈阳市", "鞍山市", "北票市", "本溪市", "朝阳市", "大连市", "丹东市", "大石桥市", "东港市", "凤城市", "盖州市", "海城市", "抚顺市", "阜新市", "锦州市", "葫芦岛市", "开原市", "凌源市", "凌海市", "辽阳市", "盘锦市", "瓦房店市", "沈阳市", "铁岭市", "瓦房店市", "兴城市", "新民市", "营口市", "庄河市"],
	"内蒙古": ["呼和浩特市", "鄂尔多斯市", "赤峰市", "包头市", "东胜区", "二连浩特市", "根河市", "丰镇市", "海拉尔区", "额尔古纳市", "霍林郭勒市", "集宁区", "满洲里市", "通辽市", "临河区", "乌兰浩特市", "乌海市", "锡林浩特市", "牙克石市", "扎兰屯市"],
	"宁夏": ["银川市", "青铜峡市", "石嘴山市", "吴忠市", "固原市", "中卫市"],
	"青海": ["西宁市", "海东市", "德令哈市", "格尔木市", "定西市", "玉树藏族自治州"],
	"山东": ["济南市", "安丘市", "滨州市", "昌邑市", "德州市", "东营市", "肥城市", "高密市", "菏泽市", "胶州市", "即墨市", "济宁市", "莱芜市", "莱西市", "莱阳市", "乐陵市", "莱州市", "聊城市", "临清市", "临沂市", "龙口市", "平度市", "青岛市", "蓬莱市", "青州市", "曲阜市", "日照市", "荣成市", "乳山市", "寿光市", "滕州市", "潍坊市", "威海市", "泰安市", "文登区", "新泰市", "烟台市", "兖州区", "禹城市", "枣庄市", "章丘市", "招远市", "诸城市", "淄博市", "邹城市"],
	"山西": ["太原市", "吕梁市", "长治市", "大同市", "高平市", "古交市", "河津市", "侯马市", "霍州市", "介休市", "临汾市", "潞城市", "朔州市", "晋城市", "孝义市", "忻州市", "阳泉市", "永济市", "原平市", "榆次区", "运城市"],
	"陕西": ["西安市", "安康市", "宝鸡市", "韩城市", "华阴市", "商州区", "汉中市", "铜川市", "渭南市", "咸阳市", "兴平市", "延安市", "榆林市"],
	"上海": ["上海市"],
	"四川": ["成都市", "康定市", "马尔康市", "广安市", "巴中市", "崇州市", "达川区", "都江堰市", "德阳市", "广汉市", "广元市", "眉山市", "峨眉山市", "华蓥市", "简阳市", "江油市", "阆中市", "泸州市", "乐山市", "绵阳市", "南充市", "内江市", "攀枝花市", "彭州市", "邛崃市", "遂宁市", "万源市", "西昌市", "雅安市", "宜宾市", "自贡市", "资阳市"],
	"台湾": ["台湾省"],
	"天津": ["天津市"],
	"西藏": ["拉萨市", "日喀则市", "昌都市"],
	"香港": ["香港特别行政区"],
	"新疆": ["乌鲁木齐市", "阿勒泰地区", "阿图什市", "阿克苏地区", "博乐市", "昌吉回族自治州", "阜康市", "哈密地区", "和田地区", "克拉玛依市", "喀什地区", "库尔勒市", "奎屯市", "新疆维吾尔自治区", "塔城地区", "吐鲁番市", "伊宁市"],
	"云南": ["昆明市", "香格里拉市", "文山壮族苗族自治州", "临沧市", "丽江市", "保山市", "楚雄彝族自治州", "大理白族自治州", "东川区", "景洪市", "个旧市", "开远市", "曲靖市", "瑞丽市", "昆明市", "宣威市", "玉溪市", "昭通市", "思茅区"],
	"浙江": ["杭州市", "慈溪市", "东阳市", "奉化市", "富阳区", "海宁市", "湖州市", "江山市", "建德市", "嘉兴市", "金华市", "兰溪市", "临海市", "丽水市", "龙泉市", "宁波市", "平湖市", "衢州市", "瑞安市", "上虞区", "绍兴市", "台州市", "桐乡市", "温岭市", "温州市", "萧山区", "义乌市", "乐清市", "永康市", "余杭区", "余姚市", "舟山市", "诸暨市"],
	"重庆": ["重庆市", "合川区", "南川区", "江津区", "永川区"]
};
module.exports= province;