var geoCoordMap = {
	"安庆市": [117.063755, 30.543494],
	"亳州市": [115.778676, 33.844582],
	"蚌埠市": [117.389719, 32.916287],
	"合肥市": [117.227239, 31.820587],
	"滁州市": [118.317107, 32.301556],
	"巢湖市": [117.861800, 31.598628],
	"阜阳市": [115.814205, 32.890124],
	"贵池区": [117.567379, 30.687181],
	"淮北市": [116.798265, 33.955845],
	"黄山市": [118.337482, 29.714656],
	"界首市": [115.374564, 33.257013],
	"淮南市": [116.999932, 32.625478],
	"六安市": [116.521855, 31.733700],
	"马鞍山市": [118.506760, 31.670452],
	"明光市": [118.018276, 32.781995],
	"宿州市": [116.964356, 33.646373],
	"天长市": [119.004817, 32.667571],
	"铜陵市": [117.812079, 30.945430],
	"芜湖市": [118.432941, 31.352859],
	"宣州区": [118.756328, 30.946319],
	"北京市": [116.407526, 39.904030],
	"澳门特别行政区": [113.549088, 22.198950],
	"澳门": [113.549088, 22.198950],
	"福州市": [119.296494, 26.074508],
	"长乐市": [119.523266, 25.962888],
	"福安市": [119.647770, 27.088049],
	"福清市": [119.384334, 25.721143],
	"建瓯市": [118.304988, 27.022727],
	"龙海市": [117.818197, 24.446706],
	"建阳区": [118.120464, 27.331876],
	"晋江市": [118.552365, 24.781681],
	"龙岩市": [117.017537, 25.075123],
	"南安市": [118.386279, 24.960385],
	"南平市": [118.177708, 26.641769],
	"宁德市": [119.547933, 26.665617],
	"泉州市": [118.675676, 24.874132],
	"三明市": [117.638678, 26.263407],
	"邵武市": [117.492534, 27.340327],
	"石狮市": [118.648018, 24.732094],
	"莆田市": [119.007777, 25.454085],
	"武夷山市": [118.035310, 27.756648],
	"厦门市": [118.089425, 24.479834],
	"永安市": [117.365053, 25.941937],
	"漳平市": [117.419998, 25.290185],
	"漳州市": [117.647481, 24.512949],
	"兰州市": [103.834304, 36.061089],
	"陇南市": [104.921841, 33.400685],
	"白银市": [104.138560, 36.544756],
	"敦煌市": [94.661967, 40.142128],
	"嘉峪关市": [98.289152, 39.773130],
	"金昌市": [102.188043, 38.520089],
	"酒泉市": [98.494483, 39.732411],
	"临夏回族自治州": [103.210539, 35.601182],
	"天水市": [105.724947, 34.580864],
	"武威市": [102.638011, 37.928265],
	"平凉市": [106.665240, 35.543051],
	"玉门市": [97.045679, 40.291843],
	"西峰区": [107.651077, 35.730652],
	"张掖市": [100.449818, 38.925875],
	"广州市": [113.264435, 23.129163],
	"潮阳区": [116.601515, 23.264936],
	"潮州市": [116.622604, 23.656950],
	"澄海区": [116.756092, 23.465960],
	"从化区": [113.586605, 23.548852],
	"东莞市": [113.751765, 23.020536],
	"恩平市": [112.305145, 22.183206],
	"佛山市": [113.121416, 23.021548],
	"高明区": [112.892578, 22.900182],
	"高要区": [112.457771, 23.025668],
	"高州市": [110.853302, 21.917982],
	"鹤山市": [112.964446, 22.765392],
	"花都区": [113.220218, 23.404165],
	"化州市": [110.639569, 21.664044],
	"惠阳区": [114.456696, 22.788734],
	"惠州市": [114.416196, 23.111847],
	"江门市": [113.081901, 22.578738],
	"河源市": [114.700447, 23.743538],
	"揭阳市": [116.372831, 23.549993],
	"乐昌市": [113.347519, 25.130136],
	"雷州市": [110.096749, 20.914278],
	"廉江市": [110.286152, 21.609673],
	"连州市": [112.377361, 24.780966],
	"开平市": [112.698545, 22.376395],
	"罗定市": [111.570010, 22.768595],
	"茂名市": [110.925456, 21.662999],
	"梅州市": [116.122239, 24.288615],
	"南海区": [113.143441, 23.028956],
	"普宁市": [116.166004, 23.297642],
	"清远市": [113.056031, 23.681764],
	"番禺区": [113.384129, 22.937244],
	"三水区": [112.896607, 23.156046],
	"汕头市": [116.681972, 23.354091],
	"汕尾市": [115.375279, 22.786211],
	"韶关市": [113.597522, 24.810403],
	"深圳市": [114.057868, 22.543099],
	"顺德区": [113.293359, 22.805240],
	"四会市": [112.733773, 23.326504],
	"台山市": [112.794065, 22.251924],
	"吴川市": [110.778411, 21.441808],
	"新会区": [113.034187, 22.458300],
	"兴宁市": [115.731110, 24.136630],
	"阳春市": [111.791539, 22.170438],
	"阳江市": [111.982232, 21.857958],
	"英德市": [113.402376, 24.205024],
	"云浮市": [112.044491, 22.915094],
	"增城区": [113.810860, 23.261141],
	"湛江市": [110.359377, 21.270708],
	"中山市": [113.392782, 22.517646],
	"珠海市": [113.576726, 22.270715],
	"南宁市": [108.366543, 22.817002],
	"肇庆市": [112.465091, 23.047192],
	"北海市": [109.119927, 21.481254],
	"北流市": [110.354215, 22.708311],
	"防城港市": [108.353847, 21.686860],
	"百色市": [106.618201, 23.902333],
	"贵港市": [109.598927, 23.111531],
	"桂林市": [110.290195, 25.273566],
	"来宾市": [109.221466, 23.750306],
	"贺州市": [111.566694, 24.403582],
	"崇左市": [107.364711, 22.376533],
	"桂平市": [110.079379, 23.394326],
	"河池市": [108.085261, 24.692931],
	"合山市": [108.886082, 23.806536],
	"柳州市": [109.415953, 24.325502],
	"钦州市": [108.654147, 21.979934],
	"梧州市": [111.279115, 23.476963],
	"玉林市": [110.164756, 22.636379],
	"宜州市": [108.636415, 24.485214],
	"贵阳市": [106.630154, 26.647661],
	"安顺市": [105.947594, 26.253072],
	"赤水市": [105.697472, 28.590337],
	"毕节市": [105.283992, 27.302589],
	"都匀市": [107.518847, 26.259427],
	"凯里市": [107.981212, 26.566867],
	"六盘水市": [104.830359, 26.592666],
	"清镇市": [106.470715, 26.556079],
	"铜仁市": [109.189598, 27.731515],
	"兴义市": [104.895467, 25.092040],
	"遵义市": [106.927389, 27.725654],
	"海口市": [110.198293, 20.044002],
	"三沙市": [112.348816, 16.831039],
	"琼海市": [110.466785, 19.246011],
	"三亚市": [109.511909, 18.252847],
	"儋州市": [110.349229, 20.017378],
	"琼山区": [110.353972, 20.003170],
	"石家庄市": [114.514860, 38.042307],
	"廊坊市": [116.683752, 39.538047],
	"安国市": [115.326647, 38.418440],
	"保定市": [115.464806, 38.873891],
	"霸州市": [116.391386, 39.125898],
	"泊头市": [116.578368, 38.083437],
	"沧州市": [116.838835, 38.304477],
	"承德市": [117.962411, 40.954071],
	"定州市": [114.990159, 38.516174],
	"丰南区": [118.085169, 39.576031],
	"高碑店市": [115.873758, 39.326521],
	"邯郸市": [114.538962, 36.625657],
	"河间市": [116.099518, 38.446624],
	"衡水市": [115.670177, 37.738920],
	"黄骅市": [117.330048, 38.371383],
	"晋州市": [115.044185, 38.033629],
	"冀州市": [115.579334, 37.550821],
	"鹿泉区": [114.313724, 38.085958],
	"南宫市": [115.408748, 37.359264],
	"秦皇岛市": [119.600493, 39.935385],
	"任丘市": [116.082918, 38.683592],
	"三河市": [117.078295, 39.982718],
	"沙河市": [114.503335, 36.854922],
	"深州市": [115.559574, 38.001536],
	"唐山市": [118.180194, 39.630867],
	"武安市": [114.203697, 36.696506],
	"邢台市": [114.504844, 37.070589],
	"新乐市": [114.684014, 38.343296],
	"张家口市": [114.887543, 40.824418],
	"辛集市": [115.218057, 37.943315],
	"涿州市": [115.974422, 39.485283],
	"遵化市": [117.965892, 40.189202],
	"郑州市": [113.625368, 34.746600],
	"安阳市": [114.392393, 36.097577],
	"长葛市": [113.819888, 34.194136],
	"邓州市": [112.087278, 32.687938],
	"巩义市": [113.022497, 34.747834],
	"登封市": [113.050492, 34.453667],
	"鹤壁市": [114.297273, 35.747225],
	"辉县市": [113.805468, 35.462313],
	"焦作市": [113.241823, 35.215893],
	"开封市": [114.307582, 34.797239],
	"河南省": [112.601919, 35.067243],
	"灵宝市": [110.894220, 34.516828],
	"林州市": [113.820130, 36.083047],
	"漯河市": [114.016539, 33.581413],
	"洛阳市": [112.454040, 34.619683],
	"平顶山市": [113.192661, 33.766170],
	"濮阳市": [115.029216, 35.761829],
	"沁阳市": [112.950716, 35.087539],
	"南阳市": [112.528322, 32.990833],
	"汝州市": [112.844517, 34.167030],
	"三门峡市": [111.200135, 34.772494],
	"商丘市": [115.656370, 34.414172],
	"卫辉市": [114.064907, 35.398494],
	"舞钢市": [113.524794, 33.307776],
	"项城市": [114.875333, 33.465838],
	"荥阳市": [113.383221, 34.787375],
	"新密市": [113.390891, 34.539443],
	"新乡市": [113.926800, 35.303004],
	"信阳市": [114.091023, 32.146984],
	"新郑市": [113.740529, 34.395562],
	"偃师市": [112.789535, 34.727220],
	"义马市": [111.874393, 34.747129],
	"许昌市": [113.852640, 34.035506],
	"禹州市": [113.488478, 34.140701],
	"周口市": [114.696951, 33.626149],
	"驻马店市": [114.022298, 33.011529],
	"哈尔滨市": [126.534967, 45.803775],
	"阿城区": [126.958098, 45.548670],
	"安达市": [125.352188, 46.423508],
	"北安市": [126.491199, 48.241374],
	"富锦市": [132.037686, 47.250108],
	"大庆市": [125.103784, 46.589310],
	"海林市": [129.380482, 44.594213],
	"海伦市": [126.973143, 47.461971],
	"鹤岗市": [130.297964, 47.349916],
	"黑河市": [127.528560, 50.245329],
	"佳木斯市": [130.318917, 46.799923],
	"鸡西市": [130.969333, 45.295075],
	"牡丹江市": [129.633169, 44.551653],
	"讷河市": [124.884244, 48.484099],
	"密山市": [131.846636, 45.529775],
	"宁安市": [129.482851, 44.340720],
	"七台河市": [131.003138, 45.771727],
	"齐齐哈尔市": [123.918186, 47.354348],
	"双城区": [126.312745, 45.383263],
	"双鸭山市": [131.159133, 46.646509],
	"尚志市": [128.009895, 45.209586],
	"绥芬河市": [131.152546, 44.412309],
	"绥化市": [126.968887, 46.653845],
	"铁力市": [128.032422, 46.986640],
	"同江市": [132.510919, 47.642707],
	"五常市": [127.167619, 44.931992],
	"五大连池市": [126.205516, 48.517257],
	"伊春市": [128.841148, 47.727536],
	"肇东市": [125.961814, 46.051126],
	"武汉市": [114.305393, 30.593099],
	"荆州市": [112.239741, 30.33516],
	"安陆市": [113.688941, 31.255610],
	"丹江口市": [111.513127, 32.540157],
	"大冶市": [114.979875, 30.095643],
	"恩施土家族苗族自治州": [109.488172, 30.272156],
	"鄂州市": [114.894843, 30.391940],
	"当阳市": [111.788312, 30.821266],
	"广水市": [113.825890, 31.616854],
	"黄石市": [115.038520, 30.199652],
	"黄州区": [114.879398, 30.434050],
	"洪湖市": [113.475980, 29.825458],
	"荆门市": [112.199265, 31.035423],
	"老河口市": [111.683861, 32.359068],
	"利川市": [108.936376, 30.290996],
	"麻城市": [115.008163, 31.172740],
	"潜江市": [112.896866, 30.421215],
	"十堰市": [110.797991, 32.629397],
	"石首市": [112.425454, 29.720938],
	"随州市": [113.382458, 31.690216],
	"武穴市": [115.561217, 29.844107],
	"湖北省": [113.166530, 30.663372],
	"襄阳市": [112.122415, 32.008986],
	"咸宁市": [114.322492, 29.841443],
	"孝感市": [113.916903, 30.924568],
	"宜城市": [112.257788, 31.719806],
	"宜昌市": [111.286471, 30.691967],
	"应城市": [113.572707, 30.928370],
	"枣阳市": [112.771959, 32.128818],
	"钟祥市": [112.588121, 31.167820],
	"常德市": [111.698497, 29.031673],
	"郴州市": [113.014718, 25.770510],
	"长沙市": [112.938814, 28.228209],
	"衡阳市": [112.571997, 26.893231],
	"洪江市": [109.836669, 27.208609],
	"怀化市": [109.998488, 27.554978],
	"津市市": [111.877499, 29.605480],
	"吉首市": [109.698055, 28.262507],
	"耒阳市": [112.859795, 26.422275],
	"冷水江市": [111.435623, 27.685850],
	"冷水滩区": [111.592143, 26.461077],
	"涟源市": [111.664316, 27.692542],
	"醴陵市": [113.496894, 27.646130],
	"浏阳市": [113.643076, 28.162833],
	"娄底市": [111.993497, 27.700063],
	"临湘市": [113.450423, 29.476849],
	"汨罗市": [113.067259, 28.806890],
	"邵阳市": [111.467791, 27.238893],
	"武冈市": [110.631884, 26.726599],
	"韶山市": [112.526671, 27.915009],
	"湘潭市": [112.944049, 27.829738],
	"益阳市": [112.355180, 28.553860],
	"湘乡市": [112.535028, 27.734120],
	"沅江市": [112.355954, 28.847045],
	"岳阳市": [113.128958, 29.357104],
	"张家界市": [110.479191, 29.117096],
	"株洲市": [113.134003, 27.827550],
	"资兴市": [113.236146, 25.976243],
	"永州市": [111.613445, 26.420394],
	"长春市": [125.323544, 43.817072],
	"吉林市": [126.553017, 43.843578],
	"白城市": [122.839024, 45.619641],
	"白山市": [126.423587, 41.939994],
	"德惠市": [125.728620, 44.521785],
	"大安市": [124.292626, 45.506996],
	"敦化市": [128.232013, 43.372413],
	"和龙市": [129.010106, 42.546675],
	"公主岭市": [124.822830, 43.504687],
	"桦甸市": [126.746310, 42.972097],
	"集安市": [126.194031, 41.125307],
	"珲春市": [130.366036, 42.862821],
	"蛟河市": [127.344501, 43.723713],
	"九台区": [125.839574, 44.151742],
	"辽源市": [125.143532, 42.887918],
	"临江市": [126.918087, 41.811979],
	"梅河口市": [125.683832, 42.530341],
	"龙井市": [129.427066, 42.766311],
	"舒兰市": [126.965607, 44.406106],
	"四平市": [124.350398, 43.166420],
	"松原市": [124.825118, 45.141789],
	"洮南市": [122.783779, 45.339113],
	"通化市": [125.939697, 41.728401],
	"图们市": [129.843710, 42.968044],
	"延吉市": [129.508946, 42.891255],
	"南京市": [118.796877, 32.060255],
	"连云港": [119.221611, 34.596653],
	"盐城市": [120.163562, 33.347383],
	"常熟市": [120.752481, 31.654376],
	"丹阳市": [119.606536, 32.010117],
	"常州市": [119.973987, 31.810689],
	"高邮市": [119.459161, 32.781659],
	"东台市": [120.320331, 32.868440],
	"海门市": [121.181615, 31.871173],
	"淮安市": [119.015286, 33.610354],
	"淮阴区": [119.034725, 33.631893],
	"江都区": [119.569989, 32.434672],
	"姜堰区": [120.127934, 32.509155],
	"江阴市": [120.284939, 31.920658],
	"靖江市": [120.277138, 31.982751],
	"金坛区": [119.597897, 31.723247],
	"昆山市": [120.980737, 31.385598],
	"南通市": [120.894291, 31.980172],
	"溧阳市": [119.484211, 31.416911],
	"如皋市": [120.574946, 32.370557],
	"邳州市": [118.012531, 34.338888],
	"宿迁市": [118.275198, 33.963232],
	"苏州市": [120.585316, 31.298886],
	"太仓市": [121.130550, 31.457735],
	"泰兴市": [120.051744, 32.171854],
	"泰州市": [119.923116, 32.455778],
	"通州区": [121.075046, 32.064170],
	"吴江区": [120.645158, 31.138677],
	"无锡市": [120.311910, 31.491170],
	"兴化市": [119.852541, 32.910459],
	"新沂市": [118.354537, 34.369580],
	"徐州市": [117.284124, 34.205768],
	"扬中市": [119.797635, 32.234831],
	"扬州市": [119.412966, 32.394210],
	"宜兴市": [119.823308, 31.340637],
	"仪征市": [119.184766, 32.272258],
	"张家港市": [120.553284, 31.870367],
	"镇江市": [119.425836, 32.187849],
	"南昌市": [115.858198, 28.682892],
	"德兴市": [117.578713, 28.946464],
	"丰城市": [115.771094, 28.159142],
	"赣州市": [114.935030, 25.831829],
	"高安市": [115.375616, 28.417255],
	"吉安市": [114.992509, 27.113443],
	"景德镇市": [117.178420, 29.268836],
	"井冈山市": [114.289228, 26.748081],
	"九江市": [116.001930, 29.705078],
	"乐平市": [117.151796, 28.978440],
	"临川区": [116.312167, 27.934573],
	"萍乡市": [113.854556, 27.622768],
	"瑞昌市": [115.681337, 29.675874],
	"瑞金市": [116.027135, 25.885555],
	"上饶市": [117.943433, 28.454863],
	"新余市": [114.917347, 27.817809],
	"宜春市": [114.416778, 27.815619],
	"鹰潭市": [117.069202, 28.260189],
	"樟树市": [115.546152, 28.055853],
	"沈阳市": [123.431475, 41.805698],
	"鞍山市": [122.994329, 41.108647],
	"北票市": [120.770730, 41.800684],
	"本溪市": [123.766485, 41.294176],
	"朝阳市": [120.389862, 41.497767],
	"大连市": [121.614682, 38.914003],
	"丹东市": [124.354707, 40.000500],
	"大石桥市": [122.509131, 40.644622],
	"东港市": [124.152705, 39.863008],
	"凤城市": [124.066919, 40.452298],
	"盖州市": [122.348936, 40.400611],
	"海城市": [122.685217, 40.882377],
	"抚顺市": [123.957208, 41.880872],
	"阜新市": [121.670324, 42.021619],
	"锦州市": [121.127004, 41.095120],
	"葫芦岛市": [120.836932, 40.711052],
	"开原市": [124.038268, 42.546307],
	"凌源市": [119.401574, 41.245445],
	"凌海市": [121.357730, 41.173400],
	"辽阳市": [123.236944, 41.267244],
	"盘锦市": [122.070714, 41.119997],
	"瓦房店市": [121.855874, 39.404604],
	"铁岭市": [123.726166, 42.223769],
	"兴城市": [120.728310, 40.614762],
	"新民市": [122.836726, 41.985193],
	"营口市": [122.235418, 40.667012],
	"庄河市": [122.967328, 39.680811],
	"呼和浩特市": [111.749181, 40.842585],
	"鄂尔多斯市": [109.781327, 39.608266],
	"鄂尔多斯": [109.781327, 39.608266],
	"赤峰市": [118.886856, 42.257817],
	"包头市": [109.840347, 40.657449],
	"东胜区": [109.963339, 39.822507],
	"二连浩特市": [111.977943, 43.653170],
	"根河市": [121.520388, 50.780345],
	"丰镇市": [113.109892, 40.436983],
	"海拉尔区": [119.736279, 49.212189],
	"额尔古纳市": [120.180506, 50.243102],
	"霍林郭勒市": [119.663534, 45.531726],
	"集宁区": [113.123779, 40.990689],
	"满洲里市": [117.378530, 49.597841],
	"通辽市": [122.243444, 43.652890],
	"临河区": [107.363919, 40.751187],
	"乌兰浩特市": [122.093123, 46.072732],
	"乌海市": [106.794249, 39.655389],
	"锡林浩特市": [116.086032, 43.933411],
	"牙克石市": [120.711770, 49.285568],
	"银川市": [106.230909, 38.487194],
	"固原市": [106.242610, 36.015855],
	"中卫市": [105.196902, 37.499973],
	"扎兰屯市": [122.737467, 48.013733],
	"青铜峡市": [106.078818, 38.021302],
	"石嘴山市": [106.383304, 38.983236],
	"吴忠市": [106.198394, 37.997461],
	"西宁市": [101.778228, 36.617144],
	"玉树藏族自治州": [97.091934, 33.011674],
	"定西市": [104.626282, 35.580663],
	"海东市": [102.104287, 36.502040],
	"德令哈市": [97.360985, 37.369436],
	"格尔木市": [94.928484, 36.406404],
	"济南市": [117.120000, 36.651216],
	"安丘市": [119.218978, 36.478494],
	"滨州市": [117.970703, 37.381990],
	"昌邑市": [119.398525, 36.858820],
	"德州市": [116.357465, 37.434093],
	"东营市": [118.674767, 37.434751],
	"肥城市": [116.768358, 36.182572],
	"高密市": [119.755597, 36.382595],
	"菏泽市": [115.480656, 35.233750],
	"胶州市": [120.033382, 36.264680],
	"即墨市": [120.447128, 36.389639],
	"济宁市": [116.587099, 35.414921],
	"莱芜市": [117.676724, 36.213814],
	"莱西市": [120.517690, 36.889084],
	"莱阳市": [120.711673, 36.978941],
	"乐陵市": [117.231935, 37.729907],
	"莱州市": [119.942327, 37.177017],
	"聊城市": [115.985371, 36.456704],
	"临清市": [115.704881, 36.838277],
	"临沂市": [118.356448, 35.104672],
	"龙口市": [120.477813, 37.646108],
	"平度市": [119.988420, 36.776358],
	"青岛市": [120.382640, 36.067082],
	"蓬莱市": [120.758848, 37.810661],
	"青州市": [118.479622, 36.684528],
	"曲阜市": [116.986503, 35.580996],
	"日照市": [119.526888, 35.416377],
	"荣成市": [122.486658, 37.165160],
	"乳山市": [121.539765, 36.919816],
	"寿光市": [118.790652, 36.855480],
	"滕州市": [117.165824, 35.114156],
	"潍坊市": [119.161756, 36.706774],
	"威海市": [122.120420, 37.513068],
	"泰安市": [117.087614, 36.200252],
	"文登区": [122.057941, 37.193886],
	"新泰市": [117.767953, 35.909032],
	"烟台市": [121.447935, 37.463822],
	"兖州区": [116.783834, 35.553144],
	"禹城市": [116.638327, 36.933812],
	"枣庄市": [117.323725, 34.810488],
	"章丘市": [117.526228, 36.681259],
	"招远市": [120.434072, 37.355469],
	"诸城市": [119.410103, 35.995654],
	"淄博市": [118.054927, 36.813487],
	"邹城市": [117.003743, 35.405185],
	"太原市": [112.548879, 37.870590],
	"吕梁市": [111.144319, 37.518314],
	"长治市": [113.116255, 36.195386],
	"大同市": [113.300129, 40.076763],
	"高平市": [112.923920, 35.797997],
	"古交市": [112.175875, 37.907109],
	"河津市": [110.712063, 35.596383],
	"侯马市": [111.372002, 35.619105],
	"霍州市": [111.755398, 36.568931],
	"介休市": [111.916712, 37.026945],
	"临汾市": [111.518976, 36.088005],
	"潞城市": [113.228852, 36.334104],
	"朔州市": [112.432825, 39.331595],
	"晋城市": [112.851831, 35.490702],
	"孝义市": [111.778818, 37.146294],
	"忻州市": [112.734174, 38.416663],
	"阳泉市": [113.580519, 37.856972],
	"永济市": [110.447549, 34.867050],
	"原平市": [112.711059, 38.731402],
	"榆次区": [112.708241, 37.697792],
	"运城市": [111.007529, 35.026412],
	"西安市": [108.940175, 34.341568],
	"安康市": [109.029022, 32.684715],
	"宝鸡市": [107.237974, 34.361980],
	"韩城市": [110.442847, 35.476788],
	"华阴市": [110.092301, 34.566096],
	"商州区": [109.941241, 33.862703],
	"汉中市": [107.023323, 33.067480],
	"铜川市": [108.945233, 34.896756],
	"渭南市": [109.509786, 34.499995],
	"咸阳市": [108.708991, 34.329605],
	"兴平市": [108.490475, 34.299221],
	"延安市": [109.489727, 36.585455],
	"榆林市": [109.734589, 38.285390],
	"上海市": [121.473701, 31.230416],
	"成都市": [104.066541, 30.572269],
	"康定市": [101.957146, 29.998436],
	"马尔康市": [102.218444, 31.902189],
	"广安市": [106.633212, 30.455962],
	"巴中市": [106.747478, 31.867903],
	"崇州市": [103.673001, 30.630122],
	"达川区": [107.511845, 31.196118],
	"都江堰市": [103.646912, 30.988435],
	"德阳市": [104.397894, 31.126856],
	"广汉市": [104.282331, 30.976165],
	"广元市": [105.843357, 32.435435],
	"峨眉山市": [103.484504, 29.601199],
	"眉山市": [103.848538, 30.075440],
	"华蓥市": [106.783088, 30.390435],
	"简阳市": [104.546774, 30.410755],
	"江油市": [104.745823, 31.778022],
	"阆中市": [106.005047, 31.558357],
	"泸州市": [105.442258, 28.871811],
	"乐山市": [103.765568, 29.552106],
	"绵阳市": [104.679114, 31.467450],
	"南充市": [106.110698, 30.837793],
	"内江市": [105.058433, 29.580229],
	"攀枝花市": [101.718637, 26.582347],
	"彭州市": [103.958014, 30.990108],
	"邛崃市": [103.464156, 30.410275],
	"遂宁市": [105.592898, 30.532847],
	"万源市": [108.034657, 32.081631],
	"西昌市": [102.264449, 27.894504],
	"雅安市": [103.013261, 29.980537],
	"宜宾市": [104.643215, 28.751769],
	"自贡市": [104.778442, 29.339030],
	"资阳市": [104.627636, 30.128901],
	"台湾省": [121.509064, 25.044333],
	"天津市": [117.200983, 39.084158],
	"拉萨市": [91.140856, 29.645554],
	"昌都市": [97.172020, 31.140969],
	"丁青": [97.172020, 31.140969],
	"香港特别行政区": [114.173355, 22.320047],
	"香港": [114.173355, 22.320047],
	"日喀则市": [88.880583, 29.266870],
	"乌鲁木齐市": [87.616848, 43.825592],
	"阿勒泰地区": [88.141253, 47.844924],
	"阿图什市": [76.168400, 39.716160],
	"阿克苏地区": [80.260605, 41.168779],
	"博乐市": [82.051005, 44.853870],
	"昌吉回族自治州": [87.308225, 44.011183],
	"阜康市": [87.987291, 44.157025],
	"哈密地区": [93.514917, 42.818501],
	"和田地区": [79.922211, 37.114157],
	"克拉玛依市": [84.889207, 45.579889],
	"喀什地区": [75.989755, 39.470400],
	"库尔勒市": [86.174633, 41.725892],
	"奎屯市": [84.903267, 44.426529],
	"新疆维吾尔自治区": [86.080602, 44.306097],
	"塔城地区": [82.980317, 46.745364],
	"吐鲁番市": [87.627704, 43.793026],
	"吐鲁番地区": [89.184074, 42.947613],
	"伊宁市": [81.324136, 43.916823],
	"昆明市": [102.832892, 24.880095],
	"临沧市": [100.079583, 23.877573],
	"香格里拉市": [99.700836, 27.829743],
	"文山壮族苗族自治州": [104.216248, 23.400734],
	"丽江市": [100.227751, 26.855047],
	"保山市": [99.161761, 25.112046],
	"楚雄彝族自治州": [101.528069, 25.045532],
	"大理白族自治州": [100.267639, 25.606485],
	"东川区": [103.187825, 26.082873],
	"景洪市": [100.771679, 22.000143],
	"个旧市": [103.160034, 23.359121],
	"开远市": [103.267143, 23.714316],
	"曲靖市": [103.796167, 25.490000],
	"瑞丽市": [97.855477, 24.017836],
	"宣威市": [104.104475, 26.219767],
	"玉溪市": [102.546543, 24.352036],
	"昭通市": [103.717465, 27.338257],
	"思茅区": [100.977165, 22.786910],
	"杭州市": [120.155070, 30.274085],
	"慈溪市": [121.266579, 30.169665],
	"东阳市": [120.241566, 29.289648],
	"奉化市": [121.406995, 29.655143],
	"富阳区": [119.960076, 30.048692],
	"海宁市": [120.680757, 30.510659],
	"湖州市": [120.086823, 30.894348],
	"江山市": [118.626974, 28.737223],
	"建德市": [119.281164, 29.474871],
	"嘉兴市": [120.755486, 30.746129],
	"金华市": [119.647445, 29.079059],
	"兰溪市": [119.460526, 29.208919],
	"临海市": [121.145047, 28.858457],
	"丽水市": [119.922796, 28.467630],
	"龙泉市": [119.141461, 28.074623],
	"宁波市": [121.550357, 29.874557],
	"平湖市": [121.015142, 30.677233],
	"衢州市": [118.859457, 28.970080],
	"瑞安市": [120.655148, 27.778657],
	"上虞区": [120.868122, 30.033121],
	"绍兴市": [120.580232, 30.029753],
	"台州市": [121.420757, 28.656386],
	"桐乡市": [120.565099, 30.630173],
	"温岭市": [121.385604, 28.372506],
	"温州市": [120.699367, 27.994267],
	"萧山区": [120.264253, 30.183806],
	"义乌市": [120.075058, 29.306841],
	"乐清市": [120.967147, 28.116083],
	"永康市": [120.047651, 28.888555],
	"余杭区": [120.299402, 30.419045],
	"余姚市": [121.154634, 30.037192],
	"舟山市": [122.207216, 29.985295],
	"诸暨市": [120.246863, 29.708692],
	"重庆市": [106.551557, 29.563010],
	"合川区": [106.276130, 29.972084],
	"南川区": [107.099266, 29.157891],
	"江津区": [106.259281, 29.290069],
	"永川区": [105.927376, 29.356117],
	"延边朝鲜族自治州": [129.508946, 42.891254],
	"山南地区": [91.773134, 29.237137],
	"海西蒙古族藏族自治州": [97.369752, 37.377139],
	"林芝市": [94.361557, 29.648943],
	"博尔塔拉蒙古自治州": [82.066159, 44.905588],
	"湘西土家族苗族自治州": [109.739172, 28.311948],
	"北京": [116.407526, 39.904030],
	"海南藏族自治州": [100.620373, 36.286438],
	"阿坝藏族羌族自治州": [102.224653, 31.899413],
	"济源市": [112.601919, 35.067243],
	"宣城市": [118.758816, 30.940718],
	"果洛藏族自治州": [100.244809, 34.471431],
	"上海": [121.473701, 31.230416],
	"甘孜藏族自治州": [101.962311, 30.049520],
	"凉山彝族自治州": [102.267335, 27.881611],
	"银南市": [106.258754, 38.471318],
	"东方市": [108.651815, 19.095351],
	"大兴安岭地区": [124.711081, 52.335206],
	"顺德市": [113.249816, 22.843632],
	"连云港市": [119.221611, 34.596653],
	"呼伦贝尔市": [119.765745, 49.211575],
	"池州市": [117.491568, 30.664800],
	"孟州市": [112.789612, 34.907970],
	"哲里木盟": [111.685158, 40.823708],
	"呼伦贝尔盟": [119.765745, 49.211575],
	"锦西市": [123.429440, 41.835441],
	"伊犁哈萨克自治州": [81.324136, 43.916823],
	"克孜勒苏柯尔克孜自治州": [76.167819, 39.714526],
	"大兴安岭市": [124.711081, 52.335206],
	"红河州": [103.374799, 23.363130],
	"红河哈尼族彝族自治州": [103.374799, 23.363130],
	"海北藏族自治州": [100.900998, 36.954413],
	"抚州市": [116.358182, 27.949217],
	"和田市": [79.913534, 37.112149],
	"迪庆藏族自治州": [99.702234, 27.818882],
	"晋中市": [112.752695, 37.687024],
	"重庆": [106.551557, 29.563010],
	"德宏傣族景颇族自治州": [98.584895, 24.433353],
	"南海市": [113.143441, 23.028956],
	"松花江市": [127.501625, 50.252308],
	"庐山市": [115.989197, 29.671694],
	"思茅市": [99.583235, 22.325014],
	"普洱市": [100.966512, 22.825066],
	"商洛市": [109.940477, 33.870422],
	"伊犁市": [81.324136, 43.916823],
	"黄南藏族自治州": [102.015248, 35.519549],
	"哈密市": [93.514917, 42.818501],
	"阿勒泰市": [88.131842, 47.827309],
	"山南市": [91.773134, 29.237137],
	"怒江傈僳族自治州": [98.853097, 25.852548],
	"大理市": [100.267638, 25.606486],
	"潮阳市": [116.600808, 23.265065],
	"黔西南布依族苗族自治州": [104.906397, 25.087825],
	"襄樊市": [112.144150, 32.042427],
	"黔东南苗族侗族自治州": [107.982859, 26.583442],
	"石河子市": [86.080602, 44.306097],
	"建阳市": [119.776466, 25.517168],
	"仙桃市": [113.454593, 30.362641],
	"庆阳市": [107.643631, 35.709077],
	"甘南藏族自治州": [102.911027, 34.983386],
	"文昌市": [110.797698, 19.543322],
	"西双版纳傣族自治州": [100.797777, 22.007351],
	"天津": [117.200983, 39.084158],
	"黔南布依族苗族自治州": [107.522098, 26.254092],
	"黄冈市": [114.872316, 30.453906],
	"巴青": [92.059605, 31.476288],
	"锡林郭勒盟": [116.048222, 43.933454],
	"巴音郭楞蒙古自治州": [86.145298, 41.764115],
	"东川市": [103.181256, 26.076755],
	"海外": [104.012093, 26.804430],
	"阿克苏市": [80.263387, 41.167548],
	"大连": [121.614682, 38.914003],
	"喀什市": [75.993790, 39.467686],
	"铁北路": [113.054962, 33.851707],
	"零陵市": [111.631109, 26.221936],
	"兴安盟": [122.067042, 46.077561],
	"尼木": [90.164524, 29.431832],
	"塔城市": [82.978928, 46.748523],
	"阿拉善盟": [105.728969, 38.851892],
	"贡嘎": [101.957146, 29.998436],
	"堆龙德庆": [91.003340, 29.646064],
	"乌兰察布盟": [113.132585, 40.994786],
	"达州市": [107.511845, 31.196118],
	"伊克昭盟": [109.781327, 39.608266],
	"巴彦淖尔盟": [107.387657, 40.743213],
	"建三江市": [132.644416, 47.261016],
	"尼玛": [87.236772, 31.784701],
	"商": [115.656370, 34.414172],
	"台湾": [121.509064, 25.044333],
	"扎囊": [91.337250, 29.245114],
	"万宁市": [110.391073, 18.795143],
	"陵水黎族自治县": [110.037504, 18.506048],
	"琼中黎族苗族自治县": [109.838389, 19.033369],
	"北屯市": [87.806743, 47.361308],
	"巴彦淖尔市": [107.387657, 40.743213],
	"澄迈县": [110.006755, 19.738521],
	"屯昌县": [110.103415, 19.351766],
	"阿里地区": [80.105804, 32.501111],
	"定安县": [110.349229, 20.017378],
	"保亭黎族苗族自治县": [109.702590, 18.639130],
	"五指山市": [109.516925, 18.775147],
	"天门市": [113.166530, 30.663372],
	"那曲地区": [92.051239, 31.476202],
	"临高县": [109.690508, 19.912026],
	"乐东黎族自治县": [109.173055, 18.750260],
	"白沙黎族自治县": [109.451484, 19.224823],
	"阿拉尔市": [81.285884, 40.541914],
	"曲水": [90.747068, 29.353073],
	"昌江黎族自治县": [109.055719, 19.298045],
	"阿勒地区": [87.627704, 43.793026],
	"乌兰察布市": [113.132585, 40.994786],
	"五家渠市": [87.522878, 44.166693],
	"神农架林区": [110.680448, 31.743483],
	"江达": [98.220296, 31.502021],
	"图木舒克": [79.069332, 39.864867],
	"洛隆": [95.824601, 30.741523],
	"临河市": [107.419868, 40.756088],
	"仁布": [89.841984, 29.230933],
	"班戈": [90.009957, 31.392411],
	"索县": [93.785631, 31.886918]
};
module.exports = geoCoordMap;