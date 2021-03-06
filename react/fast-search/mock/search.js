/*
* @Author: cncc
* @Date:   2016-04-22 13:34:31
* @Last Modified by:   cncc
* @Last Modified time: 2016-04-22 13:46:50
*/

'use strict';

var imgArr = [
  {
    src: 'http://esf.js.soufunimg.com/esf/zu/img/banner1.jpg',
    url: 'https://www.baidu.com/'
  },
  {
    src: 'http://esf.js.soufunimg.com/esf/zu/img/banner2.jpg',
    url: 'http://www.sina.com.cn/'
  }
];

var areas = {
  message: null,
  District: [
    { url: 'http://zu.fang.com/house-a01/', id: '1', name: '朝阳' },
    { url: 'http://zu.fang.com/house-a00/', id: '0', name: '海淀' },
    { url: 'http://zu.fang.com/house-a06/', id: '6', name: '丰台' },
    { url: 'http://zu.fang.com/house-a012/', id: '12', name: '昌平' },
    { url: 'http://zu.fang.com/house-a0585/', id: '585', name: '大兴' },
    { url: 'http://zu.fang.com/house-a010/', id: '10', name: '通州' },
    { url: 'http://zu.fang.com/house-a03/', id: '3', name: '西城' },
    { url: 'http://zu.fang.com/house-a02/', id: '2', name: '东城' },
    { url: 'http://zu.fang.com/house-a0987/', id: '987', name: '燕郊' },
    { url: 'http://zu.fang.com/house-a07/', id: '7', name: '石景山' },
    { url: 'http://zu.fang.com/house-a011/', id: '11', name: '顺义' },
    { url: 'http://zu.fang.com/house-a08/', id: '8', name: '房山' },
    { url: 'http://zu.fang.com/house-a013/', id: '13', name: '密云' },
    { url: 'http://zu.fang.com/house-a09/', id: '9', name: '门头沟' },
    { url: 'http://zu.fang.com/house-a014/', id: '14', name: '怀柔' },
    { url: 'http://zu.fang.com/house-a011817/', id: '11817', name: '北京周边' },
    { url: 'http://zu.fang.com/house-a016/', id: '16', name: '平谷' },
    { url: 'http://zu.fang.com/house-a015/', id: '15', name: '延庆' }
  ],
  CList: [
    {
      url: 'http://zu.fang.com/house-a01-b01121/',
      did: '1',
      id: '1121',
      name: '安贞',
      Area_pinyin: 'a'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02652/',
      did: '1',
      id: '2652',
      name: '奥林匹克公园',
      Area_pinyin: 'a'
    },
    {
      url: 'http://zu.fang.com/house-a00-b013175/',
      did: '0',
      id: '13175',
      name: '安宁庄',
      Area_pinyin: 'a'
    },
    {
      url: 'http://zu.fang.com/house-a02-b065/',
      did: '2',
      id: '65',
      name: '安定门',
      Area_pinyin: 'a'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02669/',
      did: '0',
      id: '2669',
      name: '八里庄',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02/',
      did: '0',
      id: '2',
      name: '北京大学',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a00-b05/',
      did: '0',
      id: '5',
      name: '北太平庄',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a01-b04512/',
      did: '1',
      id: '4512',
      name: '百子湾',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02324/',
      did: '1',
      id: '2324',
      name: '北工大',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a01-b0369/',
      did: '1',
      id: '369',
      name: '北沙滩',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a01-b03114/',
      did: '1',
      id: '3114',
      name: '北苑',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a02-b02722/',
      did: '2',
      id: '2722',
      name: '北新桥',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a06-b01237/',
      did: '6',
      id: '1237',
      name: '北大地',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a03-b012384/',
      did: '3',
      id: '12384',
      name: '白云路',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a03-b081/',
      did: '3',
      id: '81',
      name: '白纸坊',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a07-b02703/',
      did: '7',
      id: '2703',
      name: '八宝山',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a07-b02705/',
      did: '7',
      id: '2705',
      name: '八大处',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a07-b097/',
      did: '7',
      id: '97',
      name: '八角',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a012-b02700/',
      did: '12',
      id: '2700',
      name: '百善镇',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a012-b02321/',
      did: '12',
      id: '2321',
      name: '北七家',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a010-b02712/',
      did: '10',
      id: '2712',
      name: '北关',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a013-b07303/',
      did: '13',
      id: '7303',
      name: '宾阳',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a015-b01184/',
      did: '15',
      id: '1184',
      name: '八达岭',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a010-b012385/',
      did: '10',
      id: '12385',
      name: '八里桥市场',
      Area_pinyin: 'b'
    },
    {
      url: 'http://zu.fang.com/house-a00-b021/',
      did: '0',
      id: '21',
      name: '车道沟',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a01-b05510/',
      did: '1',
      id: '5510',
      name: 'CBD',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02651/',
      did: '1',
      id: '2651',
      name: '常营',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a01-b05755/',
      did: '1',
      id: '5755',
      name: '朝青',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a01-b053/',
      did: '1',
      id: '53',
      name: '朝阳公园',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02650/',
      did: '1',
      id: '2650',
      name: '朝阳门',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a00-b012383/',
      did: '0',
      id: '12383',
      name: '厂洼',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02690/',
      did: '3',
      id: '2690',
      name: '车公庄',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a02-b012016/',
      did: '2',
      id: '12016',
      name: '朝阳门内',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a02-b0377/',
      did: '2',
      id: '377',
      name: '崇文门',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a02-b02632/',
      did: '2',
      id: '2632',
      name: '磁器口',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a06-b01153/',
      did: '6',
      id: '1153',
      name: '菜户营',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02547/',
      did: '6',
      id: '2547',
      name: '草桥',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02677/',
      did: '6',
      id: '2677',
      name: '长辛店',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a06-b01157/',
      did: '6',
      id: '1157',
      name: '成寿寺',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a03-b076/',
      did: '3',
      id: '76',
      name: '长椿街',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a012-b02701/',
      did: '12',
      id: '2701',
      name: '昌平县城',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a08-b02739/',
      did: '8',
      id: '2739',
      name: '长阳',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a09-b05506/',
      did: '9',
      id: '5506',
      name: '城子',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a010-b012903/',
      did: '10',
      id: '12903',
      name: '次渠',
      Area_pinyin: 'c'
    },
    {
      url: 'http://zu.fang.com/house-a00-b09/',
      did: '0',
      id: '9',
      name: '大钟寺',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a00-b01114/',
      did: '0',
      id: '1114',
      name: '定慧寺',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02318/',
      did: '1',
      id: '2318',
      name: '大山子',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02649/',
      did: '1',
      id: '2649',
      name: '大望路',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a01-b0371/',
      did: '1',
      id: '371',
      name: '定福庄',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a01-b046/',
      did: '1',
      id: '46',
      name: '东八里庄',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02648/',
      did: '1',
      id: '2648',
      name: '东坝',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a01-b0617/',
      did: '1',
      id: '617',
      name: '东大桥',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02647/',
      did: '1',
      id: '2647',
      name: '豆各庄',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a02-b059/',
      did: '2',
      id: '59',
      name: '灯市口',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a02-b02725/',
      did: '2',
      id: '2725',
      name: '东单',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a02-b02723/',
      did: '2',
      id: '2723',
      name: '东四',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a02-b060/',
      did: '2',
      id: '60',
      name: '东四十条',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a02-b061/',
      did: '2',
      id: '61',
      name: '东直门',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a03-b01132/',
      did: '3',
      id: '1132',
      name: '德胜门',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02692/',
      did: '3',
      id: '2692',
      name: '地安门',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a02-b075/',
      did: '2',
      id: '75',
      name: '东花市',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a06-b01158/',
      did: '6',
      id: '1158',
      name: '大红门',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02683/',
      did: '6',
      id: '2683',
      name: '东高地',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02627/',
      did: '3',
      id: '2627',
      name: '大观园',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02625/',
      did: '3',
      id: '2625',
      name: '大栅栏',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a08-b01166/',
      did: '8',
      id: '1166',
      name: '窦店',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a09-b01170/',
      did: '9',
      id: '1170',
      name: '大峪',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a09-b05507/',
      did: '9',
      id: '5507',
      name: '东辛房',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a010-b02715/',
      did: '10',
      id: '2715',
      name: '东关',
      Area_pinyin: 'd'
    },
    {
      url: 'http://zu.fang.com/house-a00-b017/',
      did: '0',
      id: '17',
      name: '二里庄',
      Area_pinyin: 'e'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02120/',
      did: '1',
      id: '2120',
      name: '垡头',
      Area_pinyin: 'f'
    },
    {
      url: 'http://zu.fang.com/house-a03-b067/',
      did: '3',
      id: '67',
      name: '阜成门',
      Area_pinyin: 'f'
    },
    {
      url: 'http://zu.fang.com/house-a03-b05096/',
      did: '3',
      id: '5096',
      name: '复兴门',
      Area_pinyin: 'f'
    },
    {
      url: 'http://zu.fang.com/house-a06-b082/',
      did: '6',
      id: '82',
      name: '方庄',
      Area_pinyin: 'f'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02682/',
      did: '6',
      id: '2682',
      name: '丰台体育馆',
      Area_pinyin: 'f'
    },
    {
      url: 'http://zu.fang.com/house-a08-b02733/',
      did: '8',
      id: '2733',
      name: '房山城关',
      Area_pinyin: 'f'
    },
    {
      url: 'http://zu.fang.com/house-a011817-b011804/',
      did: '11817',
      id: '11804',
      name: '固安',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a00-b03/',
      did: '0',
      id: '3',
      name: '公主坟',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02689/',
      did: '0',
      id: '2689',
      name: '甘家口',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a01-b05497/',
      did: '1',
      id: '5497',
      name: '甘露园',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02646/',
      did: '1',
      id: '2646',
      name: '高碑店',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02645/',
      did: '1',
      id: '2645',
      name: '工体',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a01-b0372/',
      did: '1',
      id: '372',
      name: '管庄',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02644/',
      did: '1',
      id: '2644',
      name: '广渠门',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a01-b040/',
      did: '1',
      id: '40',
      name: '国贸',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a01-b035/',
      did: '1',
      id: '35',
      name: '国展',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02691/',
      did: '3',
      id: '2691',
      name: '鼓楼大街',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02688/',
      did: '3',
      id: '2688',
      name: '官园',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a02-b01141/',
      did: '2',
      id: '1141',
      name: '光明楼',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a02-b01144/',
      did: '2',
      id: '1144',
      name: '广渠门内',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a03-b078/',
      did: '3',
      id: '78',
      name: '广安门',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a07-b02709/',
      did: '7',
      id: '2709',
      name: '高井',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a07-b02704/',
      did: '7',
      id: '2704',
      name: '古城',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a010-b01302/',
      did: '10',
      id: '1302',
      name: '果园',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a013-b07304/',
      did: '13',
      id: '7304',
      name: '鼓楼',
      Area_pinyin: 'g'
    },
    {
      url: 'http://zu.fang.com/house-a00-b015/',
      did: '0',
      id: '15',
      name: '航天桥',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a00-b04212/',
      did: '0',
      id: '4212',
      name: '花园桥',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a01-b044/',
      did: '1',
      id: '44',
      name: '红庙',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a01-b03928/',
      did: '1',
      id: '3928',
      name: '华威',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a01-b05756/',
      did: '1',
      id: '5756',
      name: '欢乐谷',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a01-b011651/',
      did: '1',
      id: '11651',
      name: '惠新西街',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a02-b062/',
      did: '2',
      id: '62',
      name: '和平里',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02681/',
      did: '6',
      id: '2681',
      name: '和义',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02680/',
      did: '6',
      id: '2680',
      name: '花乡',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a03-b05043/',
      did: '3',
      id: '5043',
      name: '和平门',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a03-b01152/',
      did: '3',
      id: '1152',
      name: '虎坊桥',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a012-b01182/',
      did: '12',
      id: '1182',
      name: '回龙观',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a012-b02697/',
      did: '12',
      id: '2697',
      name: '霍营',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a08-b02738/',
      did: '8',
      id: '2738',
      name: '韩村河',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a09-b05505/',
      did: '9',
      id: '5505',
      name: '河滩',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a0585-b07447/',
      did: '585',
      id: '7447',
      name: '黄村北',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a0585-b07448/',
      did: '585',
      id: '7448',
      name: '黄村东',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a0585-b07449/',
      did: '585',
      id: '7449',
      name: '黄村南',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a014-b02235/',
      did: '14',
      id: '2235',
      name: '怀柔',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a011-b03986/',
      did: '11',
      id: '3986',
      name: '后沙峪',
      Area_pinyin: 'h'
    },
    {
      url: 'http://zu.fang.com/house-a00-b013/',
      did: '0',
      id: '13',
      name: '蓟门桥',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02665/',
      did: '0',
      id: '2665',
      name: '军博',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02642/',
      did: '1',
      id: '2642',
      name: '建国门',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a01-b047/',
      did: '1',
      id: '47',
      name: '劲松',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a01-b054/',
      did: '1',
      id: '54',
      name: '酒仙桥',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a02-b02724/',
      did: '2',
      id: '2724',
      name: '交道口',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a02-b05045/',
      did: '2',
      id: '5045',
      name: '金宝街',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a03-b01138/',
      did: '3',
      id: '1138',
      name: '积水潭',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a03-b01135/',
      did: '3',
      id: '1135',
      name: '金融街',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a01-b012308/',
      did: '1',
      id: '12308',
      name: '健翔桥',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a06-b087/',
      did: '6',
      id: '87',
      name: '角门',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a06-b03987/',
      did: '6',
      id: '3987',
      name: '京石高速',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a07-b02710/',
      did: '7',
      id: '2710',
      name: '金顶街',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a010-b02719/',
      did: '10',
      id: '2719',
      name: '九棵树',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a0585-b011593/',
      did: '585',
      id: '11593',
      name: '旧宫',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a010-b012015/',
      did: '10',
      id: '12015',
      name: '焦王庄',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a011-b011650/',
      did: '11',
      id: '11650',
      name: '机场南楼',
      Area_pinyin: 'j'
    },
    {
      url: 'http://zu.fang.com/house-a06-b011652/',
      did: '6',
      id: '11652',
      name: '看丹桥',
      Area_pinyin: 'k'
    },
    {
      url: 'http://zu.fang.com/house-a06-b03926/',
      did: '6',
      id: '3926',
      name: '科丰桥',
      Area_pinyin: 'k'
    },
    {
      url: 'http://zu.fang.com/house-a06-b01240/',
      did: '6',
      id: '1240',
      name: '科技园区',
      Area_pinyin: 'k'
    },
    {
      url: 'http://zu.fang.com/house-a011817-b011923/',
      did: '11817',
      id: '11923',
      name: '廊坊',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02641/',
      did: '1',
      id: '2641',
      name: '来广营',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02640/',
      did: '1',
      id: '2640',
      name: '柳芳',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a02-b02629/',
      did: '2',
      id: '2629',
      name: '龙潭湖',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02693/',
      did: '3',
      id: '2693',
      name: '礼士路',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a03-b01136/',
      did: '3',
      id: '1136',
      name: '六铺炕',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02676/',
      did: '6',
      id: '2676',
      name: '丽泽桥',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a06-b091/',
      did: '6',
      id: '91',
      name: '刘家窑',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a06-b084/',
      did: '6',
      id: '84',
      name: '六里桥',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a07-b094/',
      did: '7',
      id: '94',
      name: '老古城',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a07-b02708/',
      did: '7',
      id: '2708',
      name: '老山',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a06-b01241/',
      did: '6',
      id: '1241',
      name: '卢沟桥',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a07-b01161/',
      did: '7',
      id: '1161',
      name: '鲁谷',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a012-b011725/',
      did: '12',
      id: '11725',
      name: '龙泽',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a012-b098/',
      did: '12',
      id: '98',
      name: '立水桥',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a08-b01169/',
      did: '8',
      id: '1169',
      name: '良乡',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a08-b01167/',
      did: '8',
      id: '1167',
      name: '琉璃河',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a010-b01174/',
      did: '10',
      id: '1174',
      name: '梨园',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a010-b07197/',
      did: '10',
      id: '7197',
      name: '潞苑南大街',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a011-b04210/',
      did: '11',
      id: '4210',
      name: '李桥',
      Area_pinyin: 'l'
    },
    {
      url: 'http://zu.fang.com/house-a00-b05498/',
      did: '0',
      id: '5498',
      name: '马甸',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02656/',
      did: '0',
      id: '2656',
      name: '马连洼',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a00-b0366/',
      did: '0',
      id: '366',
      name: '牡丹园',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a03-b073/',
      did: '3',
      id: '73',
      name: '木樨地',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a03-b01150/',
      did: '3',
      id: '1150',
      name: '马连道',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a06-b090/',
      did: '6',
      id: '90',
      name: '马家堡',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a07-b01165/',
      did: '7',
      id: '1165',
      name: '模式口',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a06-b088/',
      did: '6',
      id: '88',
      name: '木樨园',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a010-b05048/',
      did: '10',
      id: '5048',
      name: '马驹桥',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a013-b02236/',
      did: '13',
      id: '2236',
      name: '密云',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a013-b012081/',
      did: '13',
      id: '12081',
      name: '密云果园',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a011-b02729/',
      did: '11',
      id: '2729',
      name: '马坡',
      Area_pinyin: 'm'
    },
    {
      url: 'http://zu.fang.com/house-a00-b0365/',
      did: '0',
      id: '365',
      name: '农大',
      Area_pinyin: 'n'
    },
    {
      url: 'http://zu.fang.com/house-a03-b01151/',
      did: '3',
      id: '1151',
      name: '牛街',
      Area_pinyin: 'n'
    },
    {
      url: 'http://zu.fang.com/house-a012-b02699/',
      did: '12',
      id: '2699',
      name: '南口',
      Area_pinyin: 'n'
    },
    {
      url: 'http://zu.fang.com/house-a01-b0375/',
      did: '1',
      id: '375',
      name: '潘家园',
      Area_pinyin: 'p'
    },
    {
      url: 'http://zu.fang.com/house-a07-b096/',
      did: '7',
      id: '96',
      name: '苹果园',
      Area_pinyin: 'p'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02675/',
      did: '6',
      id: '2675',
      name: '蒲黄榆',
      Area_pinyin: 'p'
    },
    {
      url: 'http://zu.fang.com/house-a016-b02234/',
      did: '16',
      id: '2234',
      name: '平谷',
      Area_pinyin: 'p'
    },
    {
      url: 'http://zu.fang.com/house-a011817-b011724/',
      did: '11817',
      id: '11724',
      name: '其他',
      Area_pinyin: 'q'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02315/',
      did: '0',
      id: '2315',
      name: '清河',
      Area_pinyin: 'q'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02666/',
      did: '0',
      id: '2666',
      name: '清华园',
      Area_pinyin: 'q'
    },
    {
      url: 'http://zu.fang.com/house-a02-b02630/',
      did: '2',
      id: '2630',
      name: '前门',
      Area_pinyin: 'q'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02674/',
      did: '6',
      id: '2674',
      name: '青塔',
      Area_pinyin: 'q'
    },
    {
      url: 'http://zu.fang.com/house-a06-b013282/',
      did: '6',
      id: '13282',
      name: '七里庄',
      Area_pinyin: 'q'
    },
    {
      url: 'http://zu.fang.com/house-a010-b02718/',
      did: '10',
      id: '2718',
      name: '乔庄',
      Area_pinyin: 'q'
    },
    {
      url: 'http://zu.fang.com/house-a011817-b012904/',
      did: '11817',
      id: '12904',
      name: '三河',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a00-b022/',
      did: '0',
      id: '22',
      name: '上地',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a00-b03115/',
      did: '0',
      id: '3115',
      name: '世纪城',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a00-b04/',
      did: '0',
      id: '4',
      name: '双榆树',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02661/',
      did: '0',
      id: '2661',
      name: '四季青',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02655/',
      did: '0',
      id: '2655',
      name: '苏州桥',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a00-b013174/',
      did: '0',
      id: '13174',
      name: '曙光',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a01-b05046/',
      did: '1',
      id: '5046',
      name: '三里屯',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a01-b042/',
      did: '1',
      id: '42',
      name: '三元桥',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a01-b01125/',
      did: '1',
      id: '1125',
      name: '芍药居',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02121/',
      did: '1',
      id: '2121',
      name: '十八里店',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02637/',
      did: '1',
      id: '2637',
      name: '石佛营',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a01-b045/',
      did: '1',
      id: '45',
      name: '十里堡',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a01-b0374/',
      did: '1',
      id: '374',
      name: '双井',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a01-b07196/',
      did: '1',
      id: '7196',
      name: '双桥',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02635/',
      did: '1',
      id: '2635',
      name: '四惠',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a03-b01133/',
      did: '3',
      id: '1133',
      name: '三里河',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02686/',
      did: '3',
      id: '2686',
      name: '什刹海',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a07-b02706/',
      did: '7',
      id: '2706',
      name: '石景山',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a012-b02698/',
      did: '12',
      id: '2698',
      name: '沙河',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a06-b012017/',
      did: '6',
      id: '12017',
      name: '宋家庄',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a09-b01171/',
      did: '9',
      id: '1171',
      name: '双峪',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a0585-b013618/',
      did: '585',
      id: '13618',
      name: '生物医药基地',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a013-b07306/',
      did: '13',
      id: '7306',
      name: '沙河水库',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a013-b07305/',
      did: '13',
      id: '7305',
      name: '少年宫',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a011-b02727/',
      did: '11',
      id: '2727',
      name: '顺义城',
      Area_pinyin: 's'
    },
    {
      url: 'http://zu.fang.com/house-a00-b011653/',
      did: '0',
      id: '11653',
      name: '田村',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a02-b01142/',
      did: '2',
      id: '1142',
      name: '天坛',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a01-b03113/',
      did: '1',
      id: '3113',
      name: '太阳宫',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a01-b030/',
      did: '1',
      id: '30',
      name: '团结湖',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a03-b079/',
      did: '3',
      id: '79',
      name: '陶然亭',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a03-b080/',
      did: '3',
      id: '80',
      name: '天宁寺',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a03-b04649/',
      did: '3',
      id: '4649',
      name: '天桥',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a012-b01183/',
      did: '12',
      id: '1183',
      name: '天通苑',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a010-b01175/',
      did: '10',
      id: '1175',
      name: '通州北苑',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a010-b01176/',
      did: '10',
      id: '1176',
      name: '土桥',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a011-b02728/',
      did: '11',
      id: '2728',
      name: '天竺',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a08-b02734/',
      did: '8',
      id: '2734',
      name: '太平庄',
      Area_pinyin: 't'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02313/',
      did: '0',
      id: '2313',
      name: '万柳',
      Area_pinyin: 'w'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02667/',
      did: '0',
      id: '2667',
      name: '万泉河',
      Area_pinyin: 'w'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02668/',
      did: '0',
      id: '2668',
      name: '万寿寺',
      Area_pinyin: 'w'
    },
    {
      url: 'http://zu.fang.com/house-a00-b06/',
      did: '0',
      id: '6',
      name: '魏公村',
      Area_pinyin: 'w'
    },
    {
      url: 'http://zu.fang.com/house-a00-b010/',
      did: '0',
      id: '10',
      name: '五道口',
      Area_pinyin: 'w'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02663/',
      did: '0',
      id: '2663',
      name: '五棵松',
      Area_pinyin: 'w'
    },
    {
      url: 'http://zu.fang.com/house-a02-b058/',
      did: '2',
      id: '58',
      name: '王府井',
      Area_pinyin: 'w'
    },
    {
      url: 'http://zu.fang.com/house-a01-b010019/',
      did: '1',
      id: '10019',
      name: '望京',
      Area_pinyin: 'w'
    },
    {
      url: 'http://zu.fang.com/house-a010-b02721/',
      did: '10',
      id: '2721',
      name: '武夷花园',
      Area_pinyin: 'w'
    },
    {
      url: 'http://zu.fang.com/house-a011817-b011805/',
      did: '11817',
      id: '11805',
      name: '香河',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a00-b07195/',
      did: '0',
      id: '7195',
      name: '西二旗',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02314/',
      did: '0',
      id: '2314',
      name: '西三旗',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a00-b07194/',
      did: '0',
      id: '7194',
      name: '西山',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a00-b05758/',
      did: '0',
      id: '5758',
      name: '西直门外',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02654/',
      did: '0',
      id: '2654',
      name: '香山',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02624/',
      did: '0',
      id: '2624',
      name: '小西天',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a00-b012/',
      did: '0',
      id: '12',
      name: '学院路',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a00-b012122/',
      did: '0',
      id: '12122',
      name: '西北旺',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a02-b02631/',
      did: '2',
      id: '2631',
      name: '新世界',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02685/',
      did: '3',
      id: '2685',
      name: '西便门',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a03-b068/',
      did: '3',
      id: '68',
      name: '西单',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a03-b05042/',
      did: '3',
      id: '5042',
      name: '西四',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02776/',
      did: '3',
      id: '2776',
      name: '西直门',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02695/',
      did: '3',
      id: '2695',
      name: '小马厂',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02775/',
      did: '3',
      id: '2775',
      name: '新街口',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a01-b01122/',
      did: '1',
      id: '1122',
      name: '西坝河',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02628/',
      did: '3',
      id: '2628',
      name: '先农坛',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02626/',
      did: '3',
      id: '2626',
      name: '宣武门',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a06-b086/',
      did: '6',
      id: '86',
      name: '西客站',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a06-b083/',
      did: '6',
      id: '83',
      name: '西罗园',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a012-b01181/',
      did: '12',
      id: '1181',
      name: '小汤山',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a06-b012536/',
      did: '6',
      id: '12536',
      name: '新发地',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a010-b02711/',
      did: '10',
      id: '2711',
      name: '西马庄',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a010-b01172/',
      did: '10',
      id: '1172',
      name: '西上园',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a010-b01177/',
      did: '10',
      id: '1177',
      name: '新华大街',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a0585-b01186/',
      did: '585',
      id: '1186',
      name: '西红门',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a08-b02731/',
      did: '8',
      id: '2731',
      name: '行宫',
      Area_pinyin: 'x'
    },
    {
      url: 'http://zu.fang.com/house-a0987-b05499/',
      did: '987',
      id: '5499',
      name: '燕郊',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02659/',
      did: '0',
      id: '2659',
      name: '颐和园',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a00-b04211/',
      did: '0',
      id: '4211',
      name: '永定路',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02662/',
      did: '0',
      id: '2662',
      name: '玉泉路',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a00-b026/',
      did: '0',
      id: '26',
      name: '圆明园',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a02-b01127/',
      did: '2',
      id: '1127',
      name: '雍和宫',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a02-b02325/',
      did: '2',
      id: '2325',
      name: '永定门',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a03-b01134/',
      did: '3',
      id: '1134',
      name: '月坛',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a01-b02633/',
      did: '1',
      id: '2633',
      name: '亚运村小营',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a01-b051/',
      did: '1',
      id: '51',
      name: '亚运村',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a01-b034/',
      did: '1',
      id: '34',
      name: '燕莎',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a03-b05757/',
      did: '3',
      id: '5757',
      name: '右安门内',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a07-b01162/',
      did: '7',
      id: '1162',
      name: '杨庄',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a07-b02707/',
      did: '7',
      id: '2707',
      name: '永乐',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a012-b02702/',
      did: '12',
      id: '2702',
      name: '阳坊',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02673/',
      did: '6',
      id: '2673',
      name: '右安门',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a06-b085/',
      did: '6',
      id: '85',
      name: '洋桥',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02672/',
      did: '6',
      id: '2672',
      name: '玉泉营',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02671/',
      did: '6',
      id: '2671',
      name: '岳各庄',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02679/',
      did: '6',
      id: '2679',
      name: '云岗',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a010-b02716/',
      did: '10',
      id: '2716',
      name: '永顺',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a010-b02714/',
      did: '10',
      id: '2714',
      name: '玉桥',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a010-b02720/',
      did: '10',
      id: '2720',
      name: '运河大街',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a0585-b01515/',
      did: '585',
      id: '1515',
      name: '亦庄',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a011-b012141/',
      did: '11',
      id: '12141',
      name: '杨镇',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a08-b02736/',
      did: '8',
      id: '2736',
      name: '闫村',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a08-b02735/',
      did: '8',
      id: '2735',
      name: '燕山',
      Area_pinyin: 'y'
    },
    {
      url: 'http://zu.fang.com/house-a011817-b011723/',
      did: '11817',
      id: '11723',
      name: '涿州',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a00-b02311/',
      did: '0',
      id: '2311',
      name: '皂君庙',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a00-b04513/',
      did: '0',
      id: '4513',
      name: '增光路',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a00-b019/',
      did: '0',
      id: '19',
      name: '知春路',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a00-b00/',
      did: '0',
      id: '0',
      name: '中关村',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a00-b01117/',
      did: '0',
      id: '1117',
      name: '紫竹桥',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a03-b02684/',
      did: '3',
      id: '2684',
      name: '展览路',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a01-b04213/',
      did: '1',
      id: '4213',
      name: '左家庄',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a06-b089/',
      did: '6',
      id: '89',
      name: '赵公口',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a06-b02670/',
      did: '6',
      id: '2670',
      name: '左安门',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a015-b01185/',
      did: '15',
      id: '1185',
      name: '张山营',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a010-b02713/',
      did: '10',
      id: '2713',
      name: '中仓',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a011-b02726/',
      did: '11',
      id: '2726',
      name: '中央别墅区',
      Area_pinyin: 'z'
    },
    {
      url: 'http://zu.fang.com/house-a08-b02732/',
      did: '8',
      id: '2732',
      name: '周口店',
      Area_pinyin: 'z'
    }
  ],
  Price: [
    {
      url: 'http://zu.fang.com/house/c20-d2500/',
      text: '500元以下',
      Min: '',
      Max: '500'
    },
    {
      url: 'http://zu.fang.com/house/c2500-d21000/',
      text: '500-1000元',
      Min: '500',
      Max: '1000'
    },
    {
      url: 'http://zu.fang.com/house/c21000-d22000/',
      text: '1000-2000元',
      Min: '1000',
      Max: '2000'
    },
    {
      url: 'http://zu.fang.com/house/c22000-d23000/',
      text: '2000-3000元',
      Min: '2000',
      Max: '3000'
    },
    {
      url: 'http://zu.fang.com/house/c23000-d25000/',
      text: '3000-5000元',
      Min: '3000',
      Max: '5000'
    },
    {
      url: 'http://zu.fang.com/house/c25000-d28000/',
      text: '5000-8000元',
      Min: '5000',
      Max: '8000'
    },
    {
      url: 'http://zu.fang.com/house/c28000-d210000/',
      text: '8000-10000元',
      Min: '8000',
      Max: '10000'
    },
    {
      url: 'http://zu.fang.com/house/c210000-d20/',
      text: '10000元以上',
      Min: '10000',
      Max: ''
    }
  ]
};

var stations = {
  code: 100,
  message: '',
  entitylist: [
    {
      Stations: [
        {
          Id: 114,
          Esf_id: 238,
          Realid: 114,
          Name: '巴沟站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.30050659179688000000',
          Baidu_coord_y: '39.98038864135742000000',
          Coord_x: '116.29408264160156000000',
          Coord_y: '39.97412490844726600000'
        },
        {
          Id: 113,
          Esf_id: 239,
          Realid: 113,
          Name: '苏州街站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.31249237060547000000',
          Baidu_coord_y: '39.98167800903320000000',
          Coord_x: '116.30599975585938000000',
          Coord_y: '39.97560119628906000000'
        },
        {
          Id: 112,
          Esf_id: 240,
          Realid: 59,
          Name: '海淀黄庄站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.32413482666016000000',
          Baidu_coord_y: '39.98194503784180000000',
          Coord_x: '116.31757354736328000000',
          Coord_y: '39.97607421875000000000'
        },
        {
          Id: 111,
          Esf_id: 241,
          Realid: 111,
          Name: '知春里站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.33609008789062000000',
          Baidu_coord_y: '39.98205947875976600000',
          Coord_x: '116.32947540283203000000',
          Coord_y: '39.97635269165039000000'
        },
        {
          Id: 110,
          Esf_id: 242,
          Realid: 110,
          Name: '知春路站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.34761810302734000000',
          Baidu_coord_y: '39.98206329345703000000',
          Coord_x: '116.34098815917969000000',
          Coord_y: '39.97640991210937500000'
        },
        {
          Id: 109,
          Esf_id: 243,
          Realid: 109,
          Name: '西土城站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.36060333251953000000',
          Baidu_coord_y: '39.98234558105469000000',
          Coord_x: '116.35399627685547000000',
          Coord_y: '39.97660064697265600000'
        },
        {
          Id: 108,
          Esf_id: 244,
          Realid: 108,
          Name: '牡丹园站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.37651824951172000000',
          Baidu_coord_y: '39.98270416259765600000',
          Coord_x: '116.37000274658203000000',
          Coord_y: '39.97669982910156000000'
        },
        {
          Id: 107,
          Esf_id: 245,
          Realid: 107,
          Name: '健德门站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.38780212402344000000',
          Baidu_coord_y: '39.98292160034180000000',
          Coord_x: '116.38135528564453000000',
          Coord_y: '39.97672271728515600000'
        },
        {
          Id: 106,
          Esf_id: 246,
          Realid: 89,
          Name: '北土城站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.40070343017578000000',
          Baidu_coord_y: '39.98332214355469000000',
          Coord_x: '116.39430236816406000000',
          Coord_y: '39.97698211669922000000'
        },
        {
          Id: 105,
          Esf_id: 247,
          Realid: 105,
          Name: '安贞门站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.41239929199219000000',
          Baidu_coord_y: '39.98333740234375000000',
          Coord_x: '116.40599822998047000000',
          Coord_y: '39.97700119018555000000'
        },
        {
          Id: 104,
          Esf_id: 248,
          Realid: 80,
          Name: '惠新西街南口站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.42403411865234000000',
          Baidu_coord_y: '39.98342514038086000000',
          Coord_x: '116.41759490966797000000',
          Coord_y: '39.97720718383789000000'
        },
        {
          Id: 103,
          Esf_id: 249,
          Realid: 103,
          Name: '芍药居站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.44357299804688000000',
          Baidu_coord_y: '39.98354721069336000000',
          Coord_x: '116.43701171875000000000',
          Coord_y: '39.97766876220703000000'
        },
        {
          Id: 102,
          Esf_id: 250,
          Realid: 102,
          Name: '太阳宫站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.45405578613281000000',
          Baidu_coord_y: '39.97836685180664000000',
          Coord_x: '116.44744873046875000000',
          Coord_y: '39.97264099121094000000'
        },
        {
          Id: 101,
          Esf_id: 251,
          Realid: 101,
          Name: '三元桥站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46362304687500000000',
          Baidu_coord_y: '39.96625518798828000000',
          Coord_x: '116.45700073242188000000',
          Coord_y: '39.96060180664062500000'
        },
        {
          Id: 100,
          Esf_id: 252,
          Realid: 100,
          Name: '亮马桥站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46860504150390000000',
          Baidu_coord_y: '39.95505142211914000000',
          Coord_x: '116.46199798583984000000',
          Coord_y: '39.94940185546875000000'
        },
        {
          Id: 99,
          Esf_id: 253,
          Realid: 99,
          Name: '农业展览馆站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46860504150390000000',
          Baidu_coord_y: '39.94734573364258000000',
          Coord_x: '116.46199798583984000000',
          Coord_y: '39.94169998168945000000'
        },
        {
          Id: 98,
          Esf_id: 254,
          Realid: 98,
          Name: '团结湖站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46833801269531000000',
          Baidu_coord_y: '39.93938064575195000000',
          Coord_x: '116.46173858642578000000',
          Coord_y: '39.93373489379883000000'
        },
        {
          Id: 97,
          Esf_id: 255,
          Realid: 97,
          Name: '呼家楼站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46823883056640000000',
          Baidu_coord_y: '39.92898178100586000000',
          Coord_x: '116.46163177490234000000',
          Coord_y: '39.92333602905273400000'
        },
        {
          Id: 96,
          Esf_id: 256,
          Realid: 96,
          Name: '金台夕照站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46828460693360000000',
          Baidu_coord_y: '39.92296218872070000000',
          Coord_x: '116.46167755126953000000',
          Coord_y: '39.91731262207031000000'
        },
        {
          Id: 95,
          Esf_id: 257,
          Realid: 20,
          Name: '国贸站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46752166748047000000',
          Baidu_coord_y: '39.91431808471680000000',
          Coord_x: '116.46091461181640000000',
          Coord_y: '39.90867233276367000000'
        },
        {
          Id: 94,
          Esf_id: 258,
          Realid: 94,
          Name: '双井站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46845245361328000000',
          Baidu_coord_y: '39.89918518066406000000',
          Coord_x: '116.46183013916016000000',
          Coord_y: '39.89353179931640600000'
        },
        {
          Id: 93,
          Esf_id: 259,
          Realid: 93,
          Name: '劲松站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46762847900390000000',
          Baidu_coord_y: '39.89025878906250000000',
          Coord_x: '116.46099853515625000000',
          Coord_y: '39.88460159301758000000'
        },
        {
          Id: 442,
          Esf_id: 810,
          Realid: 442,
          Name: '潘家园站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46755218505860000000',
          Baidu_coord_y: '39.88183975219726600000',
          Coord_x: '116.46091461181640000000',
          Coord_y: '39.87618255615234400000'
        },
        {
          Id: 443,
          Esf_id: 811,
          Realid: 443,
          Name: '十里河站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46575164794922000000',
          Baidu_coord_y: '39.87157440185547000000',
          Coord_x: '116.45911407470703000000',
          Coord_y: '39.86591720581055000000'
        },
        {
          Id: 445,
          Esf_id: 812,
          Realid: 445,
          Name: '分钟寺站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.46035003662110000000',
          Baidu_coord_y: '39.85788726806640600000',
          Coord_x: '116.45372009277344000000',
          Coord_y: '39.85221481323242000000'
        },
        {
          Id: 446,
          Esf_id: 813,
          Realid: 446,
          Name: '成寿寺站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.45326232910156000000',
          Baidu_coord_y: '39.85171127319336000000',
          Coord_x: '116.44666290283203000000',
          Coord_y: '39.84597778320312500000'
        },
        {
          Id: 500,
          Esf_id: 814,
          Realid: 66,
          Name: '宋家庄站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.43487548828125000000',
          Baidu_coord_y: '39.85187530517578000000',
          Coord_x: '116.42838287353516000000',
          Coord_y: '39.84584426879883000000'
        },
        {
          Id: 448,
          Esf_id: 815,
          Realid: 448,
          Name: '石榴庄站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.42056274414062000000',
          Baidu_coord_y: '39.85210800170898400000',
          Coord_x: '116.41414642333984000000',
          Coord_y: '39.84584808349609400000'
        },
        {
          Id: 449,
          Esf_id: 816,
          Realid: 449,
          Name: '大红门站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.40485382080078000000',
          Baidu_coord_y: '39.85193252563476600000',
          Coord_x: '116.39846801757812000000',
          Coord_y: '39.84558105468750000000'
        },
        {
          Id: 450,
          Esf_id: 817,
          Realid: 450,
          Name: '角门东站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.39275360107422000000',
          Baidu_coord_y: '39.85148620605469000000',
          Coord_x: '116.38633728027344000000',
          Coord_y: '39.84522247314453000000'
        },
        {
          Id: 347,
          Esf_id: 818,
          Realid: 43,
          Name: '角门西站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.37764739990234000000',
          Baidu_coord_y: '39.85192871093750000000',
          Coord_x: '116.37114715576172000000',
          Coord_y: '39.84590530395508000000'
        },
        {
          Id: 451,
          Esf_id: 819,
          Realid: 451,
          Name: '草桥站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.35923767089844000000',
          Baidu_coord_y: '39.85159683227539000000',
          Coord_x: '116.35263824462890000000',
          Coord_y: '39.84587097167969000000'
        },
        {
          Id: 458,
          Esf_id: 825,
          Realid: 458,
          Name: '纪家庙站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.33956146240234000000',
          Baidu_coord_y: '39.85005569458008000000',
          Coord_x: '116.33294677734375000000',
          Coord_y: '39.84437942504883000000'
        },
        {
          Id: 452,
          Esf_id: 820,
          Realid: 452,
          Name: '首经贸站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.32615661621094000000',
          Baidu_coord_y: '39.85031127929687500000',
          Coord_x: '116.31959533691406000000',
          Coord_y: '39.84447860717773400000'
        },
        {
          Id: 453,
          Esf_id: 821,
          Realid: 453,
          Name: '丰台站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.31143188476562000000',
          Baidu_coord_y: '39.85618972778320000000',
          Coord_x: '116.30495452880860000000',
          Coord_y: '39.85009384155273400000'
        },
        {
          Id: 454,
          Esf_id: 822,
          Realid: 454,
          Name: '泥洼站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.31081390380860000000',
          Baidu_coord_y: '39.86470031738281000000',
          Coord_x: '116.30432891845703000000',
          Coord_y: '39.85859298706055000000'
        },
        {
          Id: 455,
          Esf_id: 823,
          Realid: 455,
          Name: '西局站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.30988311767578000000',
          Baidu_coord_y: '39.87252426147461000000',
          Coord_x: '116.30340576171875000000',
          Coord_y: '39.86639785766601600000'
        },
        {
          Id: 531,
          Esf_id: 824,
          Realid: 435,
          Name: '六里桥站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.30960845947266000000',
          Baidu_coord_y: '39.88642883300781000000',
          Coord_x: '116.30313873291016000000',
          Coord_y: '39.88029861450195000000'
        },
        {
          Id: 459,
          Esf_id: 826,
          Realid: 459,
          Name: '莲花桥站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.31682586669922000000',
          Baidu_coord_y: '39.90407943725586000000',
          Coord_x: '116.31031799316406000000',
          Coord_y: '39.89808654785156000000'
        },
        {
          Id: 343,
          Esf_id: 827,
          Realid: 8,
          Name: '公主坟站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.31687927246094000000',
          Baidu_coord_y: '39.91347885131836000000',
          Coord_x: '116.31038665771484000000',
          Coord_y: '39.90748977661133000000'
        },
        {
          Id: 460,
          Esf_id: 828,
          Realid: 460,
          Name: '西钓鱼台站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.30418395996094000000',
          Baidu_coord_y: '39.92967224121094000000',
          Coord_x: '116.29777526855469000000',
          Coord_y: '39.92346572875976600000'
        },
        {
          Id: 647,
          Esf_id: 5647,
          Realid: 359,
          Name: '慈寿寺站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.30067443847656000000',
          Baidu_coord_y: '39.93927001953125000000',
          Coord_x: '116.29428100585938000000',
          Coord_y: '39.93301773071289000000'
        },
        {
          Id: 463,
          Esf_id: 830,
          Realid: 463,
          Name: '车道沟站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.30027770996094000000',
          Baidu_coord_y: '39.95489501953125000000',
          Coord_x: '116.29387664794922000000',
          Coord_y: '39.94863510131836000000'
        },
        {
          Id: 464,
          Esf_id: 831,
          Realid: 464,
          Name: '长春桥站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.30046081542969000000',
          Baidu_coord_y: '39.96487426757812500000',
          Coord_x: '116.29405212402344000000',
          Coord_y: '39.95861816406250000000'
        },
        {
          Id: 465,
          Esf_id: 832,
          Realid: 465,
          Name: '火器营站',
          Did: 9,
          Dname: '10号线',
          Baidu_coord_x: '116.29560852050781000000',
          Baidu_coord_y: '39.97238159179687500000',
          Coord_x: '116.28920745849610000000',
          Coord_y: '39.96607208251953000000'
        }
      ],
      Id: 9,
      Esf_id: 12,
      Name: '10号线'
    },
    {
      Stations: [
        {
          Id: 66,
          Esf_id: 215,
          Realid: 66,
          Name: '宋家庄站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.43487548828125000000',
          Baidu_coord_y: '39.85187530517578000000',
          Coord_x: '116.42838287353516000000',
          Coord_y: '39.84584426879883000000'
        },
        {
          Id: 67,
          Esf_id: 216,
          Realid: 67,
          Name: '刘家窑站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42858123779297000000',
          Baidu_coord_y: '39.86381149291992000000',
          Coord_x: '116.42211151123047000000',
          Coord_y: '39.85766601562500000000'
        },
        {
          Id: 68,
          Esf_id: 217,
          Realid: 68,
          Name: '蒲黄榆站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42960357666016000000',
          Baidu_coord_y: '39.87169265747070000000',
          Coord_x: '116.42312622070312000000',
          Coord_y: '39.86556243896484400000'
        },
        {
          Id: 69,
          Esf_id: 218,
          Realid: 69,
          Name: '天坛东门站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42739105224610000000',
          Baidu_coord_y: '39.88849639892578000000',
          Coord_x: '116.42092895507812000000',
          Coord_y: '39.88233184814453000000'
        },
        {
          Id: 70,
          Esf_id: 219,
          Realid: 70,
          Name: '磁器口站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42535400390625000000',
          Baidu_coord_y: '39.89962387084961000000',
          Coord_x: '116.41891479492188000000',
          Coord_y: '39.89342880249023400000'
        },
        {
          Id: 71,
          Esf_id: 220,
          Realid: 34,
          Name: '崇文门站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42443847656250000000',
          Baidu_coord_y: '39.90695190429687500000',
          Coord_x: '116.41800689697266000000',
          Coord_y: '39.90074539184570000000'
        },
        {
          Id: 72,
          Esf_id: 221,
          Realid: 17,
          Name: '东单站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42524719238281000000',
          Baidu_coord_y: '39.91450500488281000000',
          Coord_x: '116.41882324218750000000',
          Coord_y: '39.90831375122070000000'
        },
        {
          Id: 73,
          Esf_id: 222,
          Realid: 73,
          Name: '灯市口站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42412567138672000000',
          Baidu_coord_y: '39.92355728149414000000',
          Coord_x: '116.41770935058594000000',
          Coord_y: '39.91735458374023400000'
        },
        {
          Id: 74,
          Esf_id: 223,
          Realid: 74,
          Name: '东四站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42389678955078000000',
          Baidu_coord_y: '39.93066406250000000000',
          Coord_x: '116.41748809814453000000',
          Coord_y: '39.92445755004883000000'
        },
        {
          Id: 75,
          Esf_id: 224,
          Realid: 75,
          Name: '张自忠路站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42356872558594000000',
          Baidu_coord_y: '39.93995285034180000000',
          Coord_x: '116.41716003417969000000',
          Coord_y: '39.93374252319336000000'
        },
        {
          Id: 76,
          Esf_id: 225,
          Realid: 76,
          Name: '北新桥站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42321014404297000000',
          Baidu_coord_y: '39.94731140136719000000',
          Coord_x: '116.41680145263672000000',
          Coord_y: '39.94109344482422000000'
        },
        {
          Id: 466,
          Esf_id: 226,
          Realid: 28,
          Name: '雍和宫站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42311859130860000000',
          Baidu_coord_y: '39.95511245727539000000',
          Coord_x: '116.41670989990234000000',
          Coord_y: '39.94889068603515600000'
        },
        {
          Id: 78,
          Esf_id: 227,
          Realid: 78,
          Name: '和平里北街站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42504882812500000000',
          Baidu_coord_y: '39.96475219726562500000',
          Coord_x: '116.41861724853516000000',
          Coord_y: '39.95855712890625000000'
        },
        {
          Id: 79,
          Esf_id: 228,
          Realid: 79,
          Name: '和平西桥站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42440795898438000000',
          Baidu_coord_y: '39.97482299804687500000',
          Coord_x: '116.41796875000000000000',
          Coord_y: '39.96861267089844000000'
        },
        {
          Id: 80,
          Esf_id: 229,
          Realid: 80,
          Name: '惠新西街南口站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42403411865234000000',
          Baidu_coord_y: '39.98342514038086000000',
          Coord_x: '116.41759490966797000000',
          Coord_y: '39.97720718383789000000'
        },
        {
          Id: 81,
          Esf_id: 230,
          Realid: 81,
          Name: '惠新西街北口站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42343902587890000000',
          Baidu_coord_y: '39.99416351318359400000',
          Coord_x: '116.41699218750000000000',
          Coord_y: '39.98793792724609400000'
        },
        {
          Id: 82,
          Esf_id: 231,
          Realid: 82,
          Name: '大屯路东站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42402648925781000000',
          Baidu_coord_y: '40.00928115844726600000',
          Coord_x: '116.41758728027344000000',
          Coord_y: '40.00306701660156000000'
        },
        {
          Id: 83,
          Esf_id: 232,
          Realid: 83,
          Name: '北苑路北站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42452239990234000000',
          Baidu_coord_y: '40.03681945800781000000',
          Coord_x: '116.41810607910156000000',
          Coord_y: '40.03062057495117000000'
        },
        {
          Id: 84,
          Esf_id: 233,
          Realid: 84,
          Name: '立水桥南站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.42089080810547000000',
          Baidu_coord_y: '40.04818344116211000000',
          Coord_x: '116.41449737548828000000',
          Coord_y: '40.04193496704101600000'
        },
        {
          Id: 85,
          Esf_id: 234,
          Realid: 85,
          Name: '立水桥站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.41827392578125000000',
          Baidu_coord_y: '40.05924224853515600000',
          Coord_x: '116.41188812255860000000',
          Coord_y: '40.05296707153320000000'
        },
        {
          Id: 86,
          Esf_id: 235,
          Realid: 86,
          Name: '天通苑南站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.41919708251953000000',
          Baidu_coord_y: '40.07278060913086000000',
          Coord_x: '116.41280364990234000000',
          Coord_y: '40.06651306152344000000'
        },
        {
          Id: 87,
          Esf_id: 236,
          Realid: 87,
          Name: '天通苑站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.41943359375000000000',
          Baidu_coord_y: '40.08172607421875000000',
          Coord_x: '116.41303253173828000000',
          Coord_y: '40.07545471191406000000'
        },
        {
          Id: 88,
          Esf_id: 237,
          Realid: 88,
          Name: '天通苑北站',
          Did: 4,
          Dname: '5号线',
          Baidu_coord_x: '116.41938018798828000000',
          Baidu_coord_y: '40.08971786499023400000',
          Coord_x: '116.41297149658203000000',
          Coord_y: '40.08344650268555000000'
        }
      ],
      Id: 4,
      Esf_id: 11,
      Name: '5号线'
    },
    {
      Stations: [
        {
          Id: 42,
          Esf_id: 297,
          Realid: 42,
          Name: '公益西桥站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.37731170654297000000',
          Baidu_coord_y: '39.84305572509765600000',
          Coord_x: '116.37081909179688000000',
          Coord_y: '39.83704376220703000000'
        },
        {
          Id: 43,
          Esf_id: 298,
          Realid: 43,
          Name: '角门西站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.37764739990234000000',
          Baidu_coord_y: '39.85192871093750000000',
          Coord_x: '116.37114715576172000000',
          Coord_y: '39.84590530395508000000'
        },
        {
          Id: 44,
          Esf_id: 299,
          Realid: 44,
          Name: '马家堡站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.37785339355469000000',
          Baidu_coord_y: '39.85943222045898400000',
          Coord_x: '116.37135314941406000000',
          Coord_y: '39.85340499877930000000'
        },
        {
          Id: 45,
          Esf_id: 300,
          Realid: 45,
          Name: '北京南站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.38548278808594000000',
          Baidu_coord_y: '39.87119674682617000000',
          Coord_x: '116.37902069091797000000',
          Coord_y: '39.86503219604492000000'
        },
        {
          Id: 46,
          Esf_id: 301,
          Realid: 46,
          Name: '陶然亭站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.38088226318360000000',
          Baidu_coord_y: '39.88481903076172000000',
          Coord_x: '116.37438964843750000000',
          Coord_y: '39.87873458862305000000'
        },
        {
          Id: 47,
          Esf_id: 302,
          Realid: 47,
          Name: '菜市口站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.38091278076172000000',
          Baidu_coord_y: '39.89547348022461000000',
          Coord_x: '116.37442779541016000000',
          Coord_y: '39.88938903808594000000'
        },
        {
          Id: 48,
          Esf_id: 303,
          Realid: 37,
          Name: '宣武门站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.38075256347656000000',
          Baidu_coord_y: '39.90592956542969000000',
          Coord_x: '116.37428283691406000000',
          Coord_y: '39.89985275268555000000'
        },
        {
          Id: 49,
          Esf_id: 304,
          Realid: 13,
          Name: '西单站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.38220214843750000000',
          Baidu_coord_y: '39.91333770751953000000',
          Coord_x: '116.37574768066406000000',
          Coord_y: '39.90723800659180000000'
        },
        {
          Id: 50,
          Esf_id: 305,
          Realid: 50,
          Name: '灵境胡同站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.38019561767578000000',
          Baidu_coord_y: '39.92222976684570000000',
          Coord_x: '116.37373352050781000000',
          Coord_y: '39.91616821289062500000'
        },
        {
          Id: 51,
          Esf_id: 306,
          Realid: 51,
          Name: '西四站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.37992858886719000000',
          Baidu_coord_y: '39.93003463745117000000',
          Coord_x: '116.37346649169922000000',
          Coord_y: '39.92398071289062500000'
        },
        {
          Id: 52,
          Esf_id: 307,
          Realid: 52,
          Name: '平安里站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.37945556640625000000',
          Baidu_coord_y: '39.93992233276367000000',
          Coord_x: '116.37299346923828000000',
          Coord_y: '39.93387603759765600000'
        },
        {
          Id: 53,
          Esf_id: 308,
          Realid: 53,
          Name: '新街口站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.37416839599610000000',
          Baidu_coord_y: '39.94663238525390600000',
          Coord_x: '116.36766815185547000000',
          Coord_y: '39.94068145751953000000'
        },
        {
          Id: 54,
          Esf_id: 309,
          Realid: 24,
          Name: '西直门站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.36144256591797000000',
          Baidu_coord_y: '39.94643783569336000000',
          Coord_x: '116.35487365722656000000',
          Coord_y: '39.94068908691406000000'
        },
        {
          Id: 55,
          Esf_id: 310,
          Realid: 55,
          Name: '动物园站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.34477233886719000000',
          Baidu_coord_y: '39.94390869140625000000',
          Coord_x: '116.33817291259766000000',
          Coord_y: '39.93826293945312500000'
        },
        {
          Id: 56,
          Esf_id: 311,
          Realid: 56,
          Name: '国家图书馆站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.33171081542969000000',
          Baidu_coord_y: '39.94903564453125000000',
          Coord_x: '116.32514190673828000000',
          Coord_y: '39.94329071044922000000'
        },
        {
          Id: 57,
          Esf_id: 312,
          Realid: 57,
          Name: '魏公村站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.32965087890625000000',
          Baidu_coord_y: '39.96395492553711000000',
          Coord_x: '116.32307434082031000000',
          Coord_y: '39.95817565917969000000'
        },
        {
          Id: 58,
          Esf_id: 313,
          Realid: 58,
          Name: '人民大学站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.32778930664062000000',
          Baidu_coord_y: '39.97276687622070000000',
          Coord_x: '116.32121276855469000000',
          Coord_y: '39.96695709228515600000'
        },
        {
          Id: 59,
          Esf_id: 314,
          Realid: 59,
          Name: '海淀黄庄站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.32413482666016000000',
          Baidu_coord_y: '39.98194503784180000000',
          Coord_x: '116.31757354736328000000',
          Coord_y: '39.97607421875000000000'
        },
        {
          Id: 60,
          Esf_id: 315,
          Realid: 60,
          Name: '中关村站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.32304382324219000000',
          Baidu_coord_y: '39.98988342285156000000',
          Coord_x: '116.31648254394531000000',
          Coord_y: '39.98399353027344000000'
        },
        {
          Id: 61,
          Esf_id: 316,
          Realid: 61,
          Name: '北京大学东门站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.32234191894531000000',
          Baidu_coord_y: '39.99811553955078000000',
          Coord_x: '116.31578826904297000000',
          Coord_y: '39.99221420288086000000'
        },
        {
          Id: 62,
          Esf_id: 317,
          Realid: 62,
          Name: '圆明园站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.31620788574219000000',
          Baidu_coord_y: '40.00561141967773400000',
          Coord_x: '116.30969238281250000000',
          Coord_y: '39.99959945678711000000'
        },
        {
          Id: 63,
          Esf_id: 318,
          Realid: 63,
          Name: '西苑站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.29685974121094000000',
          Baidu_coord_y: '40.00490570068359400000',
          Coord_x: '116.29044342041016000000',
          Coord_y: '39.99860000610351600000'
        },
        {
          Id: 64,
          Esf_id: 319,
          Realid: 64,
          Name: '北宫门站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.28398895263672000000',
          Baidu_coord_y: '40.00867843627930000000',
          Coord_x: '116.27759552001953000000',
          Coord_y: '40.00232696533203000000'
        },
        {
          Id: 65,
          Esf_id: 320,
          Realid: 65,
          Name: '安河桥北站',
          Did: 3,
          Dname: '4号线',
          Baidu_coord_x: '116.27642822265625000000',
          Baidu_coord_y: '40.01865768432617000000',
          Coord_x: '116.27002716064453000000',
          Coord_y: '40.01235198974609400000'
        }
      ],
      Id: 3,
      Esf_id: 17,
      Name: '4号线'
    },
    {
      Stations: [
        {
          Id: 1,
          Esf_id: 174,
          Realid: 1,
          Name: '苹果园站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.18406677246094000000',
          Baidu_coord_y: '39.93239212036133000000',
          Coord_x: '116.17765808105469000000',
          Coord_y: '39.92618560791015600000'
        },
        {
          Id: 2,
          Esf_id: 175,
          Realid: 2,
          Name: '古城站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.19707489013672000000',
          Baidu_coord_y: '39.91341400146484400000',
          Coord_x: '116.19057464599610000000',
          Coord_y: '39.90742874145508000000'
        },
        {
          Id: 3,
          Esf_id: 176,
          Realid: 3,
          Name: '八角游乐园站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.21929168701172000000',
          Baidu_coord_y: '39.91315078735351600000',
          Coord_x: '116.21268463134766000000',
          Coord_y: '39.90747833251953000000'
        },
        {
          Id: 4,
          Esf_id: 177,
          Realid: 4,
          Name: '八宝山站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.24230194091797000000',
          Baidu_coord_y: '39.91324996948242000000',
          Coord_x: '116.23572540283203000000',
          Coord_y: '39.90748977661133000000'
        },
        {
          Id: 5,
          Esf_id: 178,
          Realid: 5,
          Name: '玉泉路站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.25947570800781000000',
          Baidu_coord_y: '39.91352844238281000000',
          Coord_x: '116.25299835205078000000',
          Coord_y: '39.90747451782226600000'
        },
        {
          Id: 6,
          Esf_id: 179,
          Realid: 6,
          Name: '五棵松站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.28036499023438000000',
          Baidu_coord_y: '39.91383743286133000000',
          Coord_x: '116.27398681640625000000',
          Coord_y: '39.90750885009765600000'
        },
        {
          Id: 7,
          Esf_id: 180,
          Realid: 7,
          Name: '万寿路站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.30148315429688000000',
          Baidu_coord_y: '39.91378402709961000000',
          Coord_x: '116.29507446289062000000',
          Coord_y: '39.90753936767578000000'
        },
        {
          Id: 8,
          Esf_id: 181,
          Realid: 8,
          Name: '公主坟站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.31687927246094000000',
          Baidu_coord_y: '39.91347885131836000000',
          Coord_x: '116.31038665771484000000',
          Coord_y: '39.90748977661133000000'
        },
        {
          Id: 9,
          Esf_id: 182,
          Realid: 9,
          Name: '军事博物馆站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.33121490478516000000',
          Baidu_coord_y: '39.91323471069336000000',
          Coord_x: '116.32463836669922000000',
          Coord_y: '39.90748214721680000000'
        },
        {
          Id: 10,
          Esf_id: 183,
          Realid: 10,
          Name: '木樨地站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.34346008300781000000',
          Baidu_coord_y: '39.91313934326172000000',
          Coord_x: '116.33685302734375000000',
          Coord_y: '39.90748596191406000000'
        },
        {
          Id: 11,
          Esf_id: 184,
          Realid: 11,
          Name: '南礼士路站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.35922241210938000000',
          Baidu_coord_y: '39.91297912597656000000',
          Coord_x: '116.35263061523438000000',
          Coord_y: '39.90725708007812500000'
        },
        {
          Id: 12,
          Esf_id: 185,
          Realid: 12,
          Name: '复兴门站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.36376190185547000000',
          Baidu_coord_y: '39.91302490234375000000',
          Coord_x: '116.35719299316406000000',
          Coord_y: '39.90724182128906000000'
        },
        {
          Id: 13,
          Esf_id: 186,
          Realid: 13,
          Name: '西单站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.38220214843750000000',
          Baidu_coord_y: '39.91333770751953000000',
          Coord_x: '116.37574768066406000000',
          Coord_y: '39.90723800659180000000'
        },
        {
          Id: 14,
          Esf_id: 187,
          Realid: 14,
          Name: '天安门西站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.39810180664062000000',
          Baidu_coord_y: '39.91388702392578000000',
          Coord_x: '116.39171600341797000000',
          Coord_y: '39.90757369995117000000'
        },
        {
          Id: 15,
          Esf_id: 188,
          Realid: 15,
          Name: '天安门东站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.40793609619140000000',
          Baidu_coord_y: '39.91423416137695000000',
          Coord_x: '116.40156555175781000000',
          Coord_y: '39.90789031982422000000'
        },
        {
          Id: 16,
          Esf_id: 189,
          Realid: 16,
          Name: '王府井站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.41791534423828000000',
          Baidu_coord_y: '39.91443634033203000000',
          Coord_x: '116.41152191162110000000',
          Coord_y: '39.90814971923828000000'
        },
        {
          Id: 17,
          Esf_id: 190,
          Realid: 17,
          Name: '东单站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.42524719238281000000',
          Baidu_coord_y: '39.91450500488281000000',
          Coord_x: '116.41882324218750000000',
          Coord_y: '39.90831375122070000000'
        },
        {
          Id: 18,
          Esf_id: 191,
          Realid: 18,
          Name: '建国门站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.44178771972656000000',
          Baidu_coord_y: '39.91450500488281000000',
          Coord_x: '116.43526458740234000000',
          Coord_y: '39.90860366821289000000'
        },
        {
          Id: 19,
          Esf_id: 192,
          Realid: 19,
          Name: '永安里站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.45702362060547000000',
          Baidu_coord_y: '39.91421508789062500000',
          Coord_x: '116.45042419433594000000',
          Coord_y: '39.90852355957031000000'
        },
        {
          Id: 20,
          Esf_id: 193,
          Realid: 20,
          Name: '国贸站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.46752166748047000000',
          Baidu_coord_y: '39.91431808471680000000',
          Coord_x: '116.46091461181640000000',
          Coord_y: '39.90867233276367000000'
        },
        {
          Id: 21,
          Esf_id: 194,
          Realid: 21,
          Name: '大望路站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.48344421386719000000',
          Baidu_coord_y: '39.91414260864258000000',
          Coord_x: '116.47688293457031000000',
          Coord_y: '39.90836715698242000000'
        },
        {
          Id: 22,
          Esf_id: 195,
          Realid: 22,
          Name: '四惠站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.50194549560547000000',
          Baidu_coord_y: '39.91485977172851600000',
          Coord_x: '116.49548339843750000000',
          Coord_y: '39.90876388549805000000'
        },
        {
          Id: 23,
          Esf_id: 196,
          Realid: 23,
          Name: '四惠东站',
          Did: 1,
          Dname: '1号线',
          Baidu_coord_x: '116.52234649658203000000',
          Baidu_coord_y: '39.91497421264648400000',
          Coord_x: '116.51597595214844000000',
          Coord_y: '39.90863800048828000000'
        }
      ],
      Id: 1,
      Esf_id: 9,
      Name: '1号线'
    },
    {
      Stations: [
        {
          Id: 115,
          Esf_id: 275,
          Realid: 24,
          Name: '西直门站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.36144256591797000000',
          Baidu_coord_y: '39.94643783569336000000',
          Coord_x: '116.35487365722656000000',
          Coord_y: '39.94068908691406000000'
        },
        {
          Id: 116,
          Esf_id: 274,
          Realid: 116,
          Name: '大钟寺站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.35171508789062000000',
          Baidu_coord_y: '39.97231674194336000000',
          Coord_x: '116.34509277343750000000',
          Coord_y: '39.96665191650390600000'
        },
        {
          Id: 117,
          Esf_id: 273,
          Realid: 110,
          Name: '知春路站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.34761810302734000000',
          Baidu_coord_y: '39.98206329345703000000',
          Coord_x: '116.34098815917969000000',
          Coord_y: '39.97640991210937500000'
        },
        {
          Id: 118,
          Esf_id: 272,
          Realid: 118,
          Name: '五道口站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.34425354003906000000',
          Baidu_coord_y: '39.99863815307617000000',
          Coord_x: '116.33761596679688000000',
          Coord_y: '39.99297714233398400000'
        },
        {
          Id: 119,
          Esf_id: 271,
          Realid: 119,
          Name: '上地站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.32649230957031000000',
          Baidu_coord_y: '40.03891754150390600000',
          Coord_x: '116.31994628906250000000',
          Coord_y: '40.03309631347656000000'
        },
        {
          Id: 120,
          Esf_id: 270,
          Realid: 120,
          Name: '西二旗站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.31261444091797000000',
          Baidu_coord_y: '40.05892181396484400000',
          Coord_x: '116.30615997314453000000',
          Coord_y: '40.05285644531250000000'
        },
        {
          Id: 121,
          Esf_id: 269,
          Realid: 121,
          Name: '龙泽站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.32612609863281000000',
          Baidu_coord_y: '40.07671737670898400000',
          Coord_x: '116.31958007812500000000',
          Coord_y: '40.07088851928711000000'
        },
        {
          Id: 122,
          Esf_id: 268,
          Realid: 122,
          Name: '回龙观站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.34232330322266000000',
          Baidu_coord_y: '40.07642745971680000000',
          Coord_x: '116.33570861816406000000',
          Coord_y: '40.07077026367187500000'
        },
        {
          Id: 123,
          Esf_id: 267,
          Realid: 123,
          Name: '霍营站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.36672210693360000000',
          Baidu_coord_y: '40.07712936401367000000',
          Coord_x: '116.36016845703125000000',
          Coord_y: '40.07130432128906000000'
        },
        {
          Id: 124,
          Esf_id: 266,
          Realid: 85,
          Name: '立水桥站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.41827392578125000000',
          Baidu_coord_y: '40.05924224853515600000',
          Coord_x: '116.41188812255860000000',
          Coord_y: '40.05296707153320000000'
        },
        {
          Id: 125,
          Esf_id: 265,
          Realid: 125,
          Name: '北苑站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.44105529785156000000',
          Baidu_coord_y: '40.04898452758789000000',
          Coord_x: '116.43454742431640000000',
          Coord_y: '40.04307174682617000000'
        },
        {
          Id: 126,
          Esf_id: 264,
          Realid: 126,
          Name: '望京西站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.45475006103516000000',
          Baidu_coord_y: '40.00086975097656000000',
          Coord_x: '116.44813537597656000000',
          Coord_y: '39.99514770507812500000'
        },
        {
          Id: 127,
          Esf_id: 263,
          Realid: 103,
          Name: '芍药居站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.44357299804688000000',
          Baidu_coord_y: '39.98354721069336000000',
          Coord_x: '116.43701171875000000000',
          Coord_y: '39.97766876220703000000'
        },
        {
          Id: 128,
          Esf_id: 262,
          Realid: 128,
          Name: '光熙门站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.43840789794922000000',
          Baidu_coord_y: '39.97434234619140600000',
          Coord_x: '116.43188476562500000000',
          Coord_y: '39.96837234497070000000'
        },
        {
          Id: 129,
          Esf_id: 261,
          Realid: 129,
          Name: '柳芳站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.43917846679688000000',
          Baidu_coord_y: '39.96424484252930000000',
          Coord_x: '116.43266296386719000000',
          Coord_y: '39.95829391479492000000'
        },
        {
          Id: 130,
          Esf_id: 260,
          Realid: 29,
          Name: '东直门站',
          Did: 14,
          Dname: '13号线',
          Baidu_coord_x: '116.44120788574219000000',
          Baidu_coord_y: '39.94851303100586000000',
          Coord_x: '116.43469238281250000000',
          Coord_y: '39.94260406494140600000'
        }
      ],
      Id: 14,
      Esf_id: 13,
      Name: '13号线'
    },
    {
      Stations: [
        {
          Id: 357,
          Esf_id: 833,
          Realid: 357,
          Name: '海淀五路居站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.28273773193360000000',
          Baidu_coord_y: '39.93859863281250000000',
          Coord_x: '116.27637481689453000000',
          Coord_y: '39.93226623535156000000'
        },
        {
          Id: 359,
          Esf_id: 834,
          Realid: 359,
          Name: '慈寿寺站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.30067443847656000000',
          Baidu_coord_y: '39.93927001953125000000',
          Coord_x: '116.29428100585938000000',
          Coord_y: '39.93301773071289000000'
        },
        {
          Id: 567,
          Esf_id: 835,
          Realid: 534,
          Name: '花园桥站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.31755828857422000000',
          Baidu_coord_y: '39.93838119506836000000',
          Coord_x: '116.31107330322266000000',
          Coord_y: '39.93240737915039000000'
        },
        {
          Id: 362,
          Esf_id: 836,
          Realid: 362,
          Name: '白石桥南站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.33203887939453000000',
          Baidu_coord_y: '39.93840026855469000000',
          Coord_x: '116.32546997070312000000',
          Coord_y: '39.93265914916992000000'
        },
        {
          Id: 363,
          Esf_id: 837,
          Realid: 363,
          Name: '车公庄西站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.35044097900390000000',
          Baidu_coord_y: '39.93829727172851600000',
          Coord_x: '116.34384155273438000000',
          Coord_y: '39.93264389038086000000'
        },
        {
          Id: 587,
          Esf_id: 1122,
          Realid: 41,
          Name: '车公庄站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.36183166503906000000',
          Baidu_coord_y: '39.93835067749023400000',
          Coord_x: '116.35527038574219000000',
          Coord_y: '39.93259811401367000000'
        },
        {
          Id: 365,
          Esf_id: 839,
          Realid: 365,
          Name: '平安里站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.37899780273438000000',
          Baidu_coord_y: '39.93928909301758000000',
          Coord_x: '116.37253570556640000000',
          Coord_y: '39.93325042724609400000'
        },
        {
          Id: 589,
          Esf_id: 1253,
          Realid: 589,
          Name: '北海北站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.39289093017578000000',
          Baidu_coord_y: '39.93949127197265600000',
          Coord_x: '116.38649749755860000000',
          Coord_y: '39.93323516845703000000'
        },
        {
          Id: 366,
          Esf_id: 841,
          Realid: 366,
          Name: '南锣鼓巷站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.41056060791016000000',
          Baidu_coord_y: '39.93996047973633000000',
          Coord_x: '116.40419769287110000000',
          Coord_y: '39.93362426757812500000'
        },
        {
          Id: 367,
          Esf_id: 842,
          Realid: 367,
          Name: '东四站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.42388916015625000000',
          Baidu_coord_y: '39.93101882934570000000',
          Coord_x: '116.41748046875000000000',
          Coord_y: '39.92481231689453000000'
        },
        {
          Id: 346,
          Esf_id: 844,
          Realid: 31,
          Name: '朝阳门站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.44113922119140000000',
          Baidu_coord_y: '39.93059158325195000000',
          Coord_x: '116.43463134765625000000',
          Coord_y: '39.92468261718750000000'
        },
        {
          Id: 370,
          Esf_id: 845,
          Realid: 370,
          Name: '东大桥站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.45825195312500000000',
          Baidu_coord_y: '39.92862319946289000000',
          Coord_x: '116.45166015625000000000',
          Coord_y: '39.92294692993164000000'
        },
        {
          Id: 440,
          Esf_id: 846,
          Realid: 97,
          Name: '呼家楼站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.46823883056640000000',
          Baidu_coord_y: '39.92898178100586000000',
          Coord_x: '116.46163177490234000000',
          Coord_y: '39.92333602905273400000'
        },
        {
          Id: 373,
          Esf_id: 847,
          Realid: 373,
          Name: '金台路站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.48471832275390000000',
          Baidu_coord_y: '39.92889022827148400000',
          Coord_x: '116.47816467285156000000',
          Coord_y: '39.92309951782226600000'
        },
        {
          Id: 375,
          Esf_id: 848,
          Realid: 375,
          Name: '十里堡站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.50847625732422000000',
          Baidu_coord_y: '39.92923736572265600000',
          Coord_x: '116.50206756591797000000',
          Coord_y: '39.92303848266601600000'
        },
        {
          Id: 376,
          Esf_id: 849,
          Realid: 376,
          Name: '青年路站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.52384185791016000000',
          Baidu_coord_y: '39.92963790893555000000',
          Coord_x: '116.51747894287110000000',
          Coord_y: '39.92329788208008000000'
        },
        {
          Id: 377,
          Esf_id: 850,
          Realid: 377,
          Name: '褡裢坡站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.57022094726562000000',
          Baidu_coord_y: '39.92982482910156000000',
          Coord_x: '116.56365966796875000000',
          Coord_y: '39.92406082153320000000'
        },
        {
          Id: 378,
          Esf_id: 851,
          Realid: 378,
          Name: '黄渠站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.58491516113281000000',
          Baidu_coord_y: '39.92993545532226600000',
          Coord_x: '116.57831573486328000000',
          Coord_y: '39.92429351806640600000'
        },
        {
          Id: 379,
          Esf_id: 852,
          Realid: 379,
          Name: '常营站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.60544586181640000000',
          Baidu_coord_y: '39.93151092529297000000',
          Coord_x: '116.59889984130860000000',
          Coord_y: '39.92570877075195000000'
        },
        {
          Id: 380,
          Esf_id: 853,
          Realid: 380,
          Name: '草房站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.62254333496094000000',
          Baidu_coord_y: '39.93067169189453000000',
          Coord_x: '116.61610412597656000000',
          Coord_y: '39.92457199096680000000'
        },
        {
          Id: 381,
          Esf_id: 854,
          Realid: 381,
          Name: '物资学院路站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.64543914794922000000',
          Baidu_coord_y: '39.93318557739258000000',
          Coord_x: '116.63907623291016000000',
          Coord_y: '39.92684173583984400000'
        },
        {
          Id: 382,
          Esf_id: 855,
          Realid: 382,
          Name: '通州北关站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.66764831542969000000',
          Baidu_coord_y: '39.92701721191406000000',
          Coord_x: '116.66121673583984000000',
          Coord_y: '39.92086791992187500000'
        },
        {
          Id: 384,
          Esf_id: 857,
          Realid: 384,
          Name: '北运河西站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.69437408447266000000',
          Baidu_coord_y: '39.90907669067383000000',
          Coord_x: '116.68778228759766000000',
          Coord_y: '39.90335845947265600000'
        },
        {
          Id: 889,
          Esf_id: 5889,
          Realid: 889,
          Name: '北运河东站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.71373748779297000000',
          Baidu_coord_y: '39.90944671630859400000',
          Coord_x: '116.70713043212890000000',
          Coord_y: '39.90377426147461000000'
        },
        {
          Id: 386,
          Esf_id: 859,
          Realid: 386,
          Name: '东夏园站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.74090576171875000000',
          Baidu_coord_y: '39.90954589843750000000',
          Coord_x: '116.73443603515625000000',
          Coord_y: '39.90346527099609400000'
        },
        {
          Id: 387,
          Esf_id: 860,
          Realid: 387,
          Name: '潞城站',
          Did: 5,
          Dname: '6号线',
          Baidu_coord_x: '116.75481414794922000000',
          Baidu_coord_y: '39.90909957885742000000',
          Coord_x: '116.74841308593750000000',
          Coord_y: '39.90281295776367000000'
        }
      ],
      Id: 5,
      Esf_id: 41,
      Name: '6号线'
    },
    {
      Stations: [
        {
          Id: 388,
          Esf_id: 5388,
          Realid: 388,
          Name: '北京西站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.32786560058594000000',
          Baidu_coord_y: '39.90182113647461000000',
          Coord_x: '116.32129669189453000000',
          Coord_y: '39.89601516723633000000'
        },
        {
          Id: 389,
          Esf_id: 5389,
          Realid: 389,
          Name: '湾子站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.33510589599610000000',
          Baidu_coord_y: '39.89593124389648400000',
          Coord_x: '116.32849884033203000000',
          Coord_y: '39.89021682739258000000'
        },
        {
          Id: 390,
          Esf_id: 5390,
          Realid: 390,
          Name: '达官营站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.34207153320312000000',
          Baidu_coord_y: '39.89567184448242000000',
          Coord_x: '116.33544158935547000000',
          Coord_y: '39.89000701904297000000'
        },
        {
          Id: 391,
          Esf_id: 5391,
          Realid: 391,
          Name: '广安门内站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.36438751220703000000',
          Baidu_coord_y: '39.89570999145508000000',
          Coord_x: '116.35781097412110000000',
          Coord_y: '39.88991165161133000000'
        },
        {
          Id: 349,
          Esf_id: 5349,
          Realid: 47,
          Name: '菜市口站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.38091278076172000000',
          Baidu_coord_y: '39.89547348022461000000',
          Coord_x: '116.37442779541016000000',
          Coord_y: '39.88938903808594000000'
        },
        {
          Id: 393,
          Esf_id: 5393,
          Realid: 393,
          Name: '虎坊桥站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.39002990722656000000',
          Baidu_coord_y: '39.89601898193359400000',
          Coord_x: '116.38359832763672000000',
          Coord_y: '39.88978958129883000000'
        },
        {
          Id: 394,
          Esf_id: 5394,
          Realid: 394,
          Name: '珠市口站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.40331268310547000000',
          Baidu_coord_y: '39.89762878417969000000',
          Coord_x: '116.39691925048828000000',
          Coord_y: '39.89128112792969000000'
        },
        {
          Id: 693,
          Esf_id: 5693,
          Realid: 693,
          Name: '桥湾站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.41506958007812000000',
          Baidu_coord_y: '39.89922332763672000000',
          Coord_x: '116.40866851806640000000',
          Coord_y: '39.89290618896484400000'
        },
        {
          Id: 355,
          Esf_id: 5355,
          Realid: 70,
          Name: '磁器口站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.42535400390625000000',
          Baidu_coord_y: '39.89962387084961000000',
          Coord_x: '116.41891479492188000000',
          Coord_y: '39.89342880249023400000'
        },
        {
          Id: 694,
          Esf_id: 5694,
          Realid: 694,
          Name: '广渠门内站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.44094085693360000000',
          Baidu_coord_y: '39.89963150024414000000',
          Coord_x: '116.43441009521484000000',
          Coord_y: '39.89371109008789000000'
        },
        {
          Id: 695,
          Esf_id: 5695,
          Realid: 695,
          Name: '广渠门外站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.45595550537110000000',
          Baidu_coord_y: '39.89945220947265600000',
          Coord_x: '116.44934844970703000000',
          Coord_y: '39.89374542236328000000'
        },
        {
          Id: 441,
          Esf_id: 5441,
          Realid: 94,
          Name: '双井站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.46845245361328000000',
          Baidu_coord_y: '39.89918518066406000000',
          Coord_x: '116.46183013916016000000',
          Coord_y: '39.89353179931640600000'
        },
        {
          Id: 401,
          Esf_id: 5401,
          Realid: 401,
          Name: '九龙山站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.48402404785156000000',
          Baidu_coord_y: '39.89930343627930000000',
          Coord_x: '116.47744750976562000000',
          Coord_y: '39.89351272583008000000'
        },
        {
          Id: 403,
          Esf_id: 5403,
          Realid: 403,
          Name: '大郊亭站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.49462890625000000000',
          Baidu_coord_y: '39.89942932128906000000',
          Coord_x: '116.48811340332031000000',
          Coord_y: '39.89346313476562500000'
        },
        {
          Id: 404,
          Esf_id: 5404,
          Realid: 404,
          Name: '百子湾站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.50589752197266000000',
          Baidu_coord_y: '39.89926910400390600000',
          Coord_x: '116.49945068359375000000',
          Coord_y: '39.89310073852539000000'
        },
        {
          Id: 405,
          Esf_id: 5405,
          Realid: 405,
          Name: '化工站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.51010131835938000000',
          Baidu_coord_y: '39.89348602294922000000',
          Coord_x: '116.50366973876953000000',
          Coord_y: '39.88725280761719000000'
        },
        {
          Id: 696,
          Esf_id: 5696,
          Realid: 696,
          Name: '南楼梓庄站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.50768280029297000000',
          Baidu_coord_y: '39.88071441650390600000',
          Coord_x: '116.50122833251953000000',
          Coord_y: '39.87451553344726600000'
        },
        {
          Id: 407,
          Esf_id: 5407,
          Realid: 407,
          Name: '欢乐谷景区站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.50620269775390000000',
          Baidu_coord_y: '39.87482070922851600000',
          Coord_x: '116.49974060058594000000',
          Coord_y: '39.86864089965820000000'
        },
        {
          Id: 408,
          Esf_id: 5408,
          Realid: 408,
          Name: '垡头站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.51821136474610000000',
          Baidu_coord_y: '39.86756134033203000000',
          Coord_x: '116.51180267333984000000',
          Coord_y: '39.86123657226562500000'
        },
        {
          Id: 697,
          Esf_id: 5697,
          Realid: 697,
          Name: '双合站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.53161621093750000000',
          Baidu_coord_y: '39.86653900146484400000',
          Coord_x: '116.52521514892578000000',
          Coord_y: '39.86019515991211000000'
        },
        {
          Id: 410,
          Esf_id: 5410,
          Realid: 410,
          Name: '焦化厂站',
          Did: 6,
          Dname: '7号线',
          Baidu_coord_x: '116.54482269287110000000',
          Baidu_coord_y: '39.86130523681640600000',
          Coord_x: '116.53837585449219000000',
          Coord_y: '39.85509872436523400000'
        }
      ],
      Id: 6,
      Esf_id: 90,
      Name: '7号线'
    },
    {
      Stations: [
        {
          Id: 24,
          Esf_id: 210,
          Realid: 24,
          Name: '西直门站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.36144256591797000000',
          Baidu_coord_y: '39.94643783569336000000',
          Coord_x: '116.35487365722656000000',
          Coord_y: '39.94068908691406000000'
        },
        {
          Id: 25,
          Esf_id: 211,
          Realid: 25,
          Name: '积水潭站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.37918853759766000000',
          Baidu_coord_y: '39.95476531982422000000',
          Coord_x: '116.37271118164062000000',
          Coord_y: '39.94871902465820000000'
        },
        {
          Id: 26,
          Esf_id: 212,
          Realid: 26,
          Name: '鼓楼大街站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.40010833740234000000',
          Baidu_coord_y: '39.95472335815430000000',
          Coord_x: '116.39373016357422000000',
          Coord_y: '39.94839859008789000000'
        },
        {
          Id: 27,
          Esf_id: 213,
          Realid: 27,
          Name: '安定门站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.41466522216797000000',
          Baidu_coord_y: '39.95556640625000000000',
          Coord_x: '116.40828704833984000000',
          Coord_y: '39.94925308227539000000'
        },
        {
          Id: 28,
          Esf_id: 214,
          Realid: 28,
          Name: '雍和宫站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.42311859130860000000',
          Baidu_coord_y: '39.95511245727539000000',
          Coord_x: '116.41670989990234000000',
          Coord_y: '39.94889068603515600000'
        },
        {
          Id: 29,
          Esf_id: 197,
          Realid: 29,
          Name: '东直门站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.44120788574219000000',
          Baidu_coord_y: '39.94851303100586000000',
          Coord_x: '116.43469238281250000000',
          Coord_y: '39.94260406494140600000'
        },
        {
          Id: 30,
          Esf_id: 198,
          Realid: 30,
          Name: '东四十条站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.44063568115234000000',
          Baidu_coord_y: '39.93984222412109400000',
          Coord_x: '116.43412780761719000000',
          Coord_y: '39.93392181396484400000'
        },
        {
          Id: 31,
          Esf_id: 199,
          Realid: 31,
          Name: '朝阳门站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.44113922119140000000',
          Baidu_coord_y: '39.93059158325195000000',
          Coord_x: '116.43463134765625000000',
          Coord_y: '39.92468261718750000000'
        },
        {
          Id: 32,
          Esf_id: 200,
          Realid: 18,
          Name: '建国门站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.44178771972656000000',
          Baidu_coord_y: '39.91450500488281000000',
          Coord_x: '116.43526458740234000000',
          Coord_y: '39.90860366821289000000'
        },
        {
          Id: 33,
          Esf_id: 201,
          Realid: 33,
          Name: '北京站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.43365478515625000000',
          Baidu_coord_y: '39.91119384765625000000',
          Coord_x: '116.42717742919922000000',
          Coord_y: '39.90514373779297000000'
        },
        {
          Id: 34,
          Esf_id: 202,
          Realid: 34,
          Name: '崇文门站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.42443847656250000000',
          Baidu_coord_y: '39.90695190429687500000',
          Coord_x: '116.41800689697266000000',
          Coord_y: '39.90074539184570000000'
        },
        {
          Id: 35,
          Esf_id: 203,
          Realid: 35,
          Name: '前门站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.40435028076172000000',
          Baidu_coord_y: '39.90656280517578000000',
          Coord_x: '116.39797210693360000000',
          Coord_y: '39.90021514892578000000'
        },
        {
          Id: 36,
          Esf_id: 204,
          Realid: 36,
          Name: '和平门站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.39061737060547000000',
          Baidu_coord_y: '39.90637588500976600000',
          Coord_x: '116.38420104980469000000',
          Coord_y: '39.90013885498047000000'
        },
        {
          Id: 37,
          Esf_id: 205,
          Realid: 37,
          Name: '宣武门站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.38075256347656000000',
          Baidu_coord_y: '39.90592956542969000000',
          Coord_x: '116.37428283691406000000',
          Coord_y: '39.89985275268555000000'
        },
        {
          Id: 38,
          Esf_id: 206,
          Realid: 38,
          Name: '长椿街站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.36991119384766000000',
          Baidu_coord_y: '39.90533828735351600000',
          Coord_x: '116.36337280273438000000',
          Coord_y: '39.89945602416992000000'
        },
        {
          Id: 39,
          Esf_id: 207,
          Realid: 12,
          Name: '复兴门站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.36376190185547000000',
          Baidu_coord_y: '39.91302490234375000000',
          Coord_x: '116.35719299316406000000',
          Coord_y: '39.90724182128906000000'
        },
        {
          Id: 40,
          Esf_id: 208,
          Realid: 40,
          Name: '阜成门站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.36281585693360000000',
          Baidu_coord_y: '39.92952346801758000000',
          Coord_x: '116.35625457763672000000',
          Coord_y: '39.92375564575195000000'
        },
        {
          Id: 41,
          Esf_id: 209,
          Realid: 41,
          Name: '车公庄站',
          Did: 2,
          Dname: '2号线',
          Baidu_coord_x: '116.36183166503906000000',
          Baidu_coord_y: '39.93835067749023400000',
          Coord_x: '116.35527038574219000000',
          Coord_y: '39.93259811401367000000'
        }
      ],
      Id: 2,
      Esf_id: 10,
      Name: '2号线'
    },
    {
      Stations: [
        {
          Id: 131,
          Esf_id: 288,
          Realid: 22,
          Name: '四惠站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.50194549560547000000',
          Baidu_coord_y: '39.91485977172851600000',
          Coord_x: '116.49548339843750000000',
          Coord_y: '39.90876388549805000000'
        },
        {
          Id: 132,
          Esf_id: 287,
          Realid: 23,
          Name: '四惠东站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.52234649658203000000',
          Baidu_coord_y: '39.91497421264648400000',
          Coord_x: '116.51597595214844000000',
          Coord_y: '39.90863800048828000000'
        },
        {
          Id: 133,
          Esf_id: 286,
          Realid: 133,
          Name: '高碑店站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.53829956054688000000',
          Baidu_coord_y: '39.91579818725586000000',
          Coord_x: '116.53190612792969000000',
          Coord_y: '39.90951538085937500000'
        },
        {
          Id: 134,
          Esf_id: 285,
          Realid: 134,
          Name: '传媒大学站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.56250000000000000000',
          Baidu_coord_y: '39.91544342041015600000',
          Coord_x: '116.55596923828125000000',
          Coord_y: '39.90955352783203000000'
        },
        {
          Id: 135,
          Esf_id: 284,
          Realid: 135,
          Name: '双桥站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.58363342285156000000',
          Baidu_coord_y: '39.91603088378906000000',
          Coord_x: '116.57702636718750000000',
          Coord_y: '39.91038131713867000000'
        },
        {
          Id: 136,
          Esf_id: 283,
          Realid: 136,
          Name: '管庄站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.60599517822266000000',
          Baidu_coord_y: '39.91505432128906000000',
          Coord_x: '116.59944152832031000000',
          Coord_y: '39.90924072265625000000'
        },
        {
          Id: 137,
          Esf_id: 282,
          Realid: 137,
          Name: '八里桥站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.62530517578125000000',
          Baidu_coord_y: '39.91199874877930000000',
          Coord_x: '116.61886596679688000000',
          Coord_y: '39.90584564208984400000'
        },
        {
          Id: 138,
          Esf_id: 281,
          Realid: 138,
          Name: '通州北苑站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.64356994628906000000',
          Baidu_coord_y: '39.91007614135742000000',
          Coord_x: '116.63719177246094000000',
          Coord_y: '39.90373229980469000000'
        },
        {
          Id: 139,
          Esf_id: 280,
          Realid: 139,
          Name: '果园站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.65278625488281000000',
          Baidu_coord_y: '39.89988708496094000000',
          Coord_x: '116.64639282226562000000',
          Coord_y: '39.89355468750000000000'
        },
        {
          Id: 140,
          Esf_id: 279,
          Realid: 140,
          Name: '九棵树站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.66400146484375000000',
          Baidu_coord_y: '39.89647293090820000000',
          Coord_x: '116.65756225585938000000',
          Coord_y: '39.89025878906250000000'
        },
        {
          Id: 141,
          Esf_id: 278,
          Realid: 141,
          Name: '梨园站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.67539978027344000000',
          Baidu_coord_y: '39.88966369628906000000',
          Coord_x: '116.66889190673828000000',
          Coord_y: '39.88364028930664000000'
        },
        {
          Id: 142,
          Esf_id: 277,
          Realid: 142,
          Name: '临河里站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.68527221679688000000',
          Baidu_coord_y: '39.88135147094726600000',
          Coord_x: '116.67870330810547000000',
          Coord_y: '39.87549972534180000000'
        },
        {
          Id: 143,
          Esf_id: 276,
          Realid: 143,
          Name: '土桥站',
          Did: 13,
          Dname: '八通线',
          Baidu_coord_x: '116.69303131103516000000',
          Baidu_coord_y: '39.87779617309570000000',
          Coord_x: '116.68642425537110000000',
          Coord_y: '39.87205505371094000000'
        }
      ],
      Id: 13,
      Esf_id: 14,
      Name: '八通线'
    },
    {
      Stations: [
        {
          Id: 541,
          Esf_id: 362,
          Realid: 541,
          Name: '天宫院站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.32643890380860000000',
          Baidu_coord_y: '39.67612075805664000000',
          Coord_x: '116.31988525390625000000',
          Coord_y: '39.67029953002930000000'
        },
        {
          Id: 542,
          Esf_id: 363,
          Realid: 542,
          Name: '生物医药基地站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.32837677001953000000',
          Baidu_coord_y: '39.69267272949219000000',
          Coord_x: '116.32182312011719000000',
          Coord_y: '39.68688201904297000000'
        },
        {
          Id: 543,
          Esf_id: 365,
          Realid: 543,
          Name: '义和庄站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.32553863525390000000',
          Baidu_coord_y: '39.71829605102539000000',
          Coord_x: '116.31899261474610000000',
          Coord_y: '39.71245956420898400000'
        },
        {
          Id: 544,
          Esf_id: 366,
          Realid: 544,
          Name: '黄村火车站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.33947753906250000000',
          Baidu_coord_y: '39.72825241088867000000',
          Coord_x: '116.33286285400390000000',
          Coord_y: '39.72257995605469000000'
        },
        {
          Id: 545,
          Esf_id: 367,
          Realid: 545,
          Name: '黄村西大街站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.33912658691406000000',
          Baidu_coord_y: '39.73738098144531000000',
          Coord_x: '116.33250427246094000000',
          Coord_y: '39.73170089721680000000'
        },
        {
          Id: 546,
          Esf_id: 368,
          Realid: 546,
          Name: '清源路站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.33901977539062000000',
          Baidu_coord_y: '39.74835586547851600000',
          Coord_x: '116.33238983154297000000',
          Coord_y: '39.74267196655273400000'
        },
        {
          Id: 547,
          Esf_id: 369,
          Realid: 547,
          Name: '枣园站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.33897399902344000000',
          Baidu_coord_y: '39.75907897949219000000',
          Coord_x: '116.33234405517578000000',
          Coord_y: '39.75339508056640600000'
        },
        {
          Id: 548,
          Esf_id: 370,
          Realid: 548,
          Name: '高米店南站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.33840942382812000000',
          Baidu_coord_y: '39.76905822753906000000',
          Coord_x: '116.33178710937500000000',
          Coord_y: '39.76337051391601600000'
        },
        {
          Id: 549,
          Esf_id: 371,
          Realid: 549,
          Name: '高米店北站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.33733367919922000000',
          Baidu_coord_y: '39.77954864501953000000',
          Coord_x: '116.33071899414062000000',
          Coord_y: '39.77385711669922000000'
        },
        {
          Id: 550,
          Esf_id: 372,
          Realid: 550,
          Name: '西红门站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.33516693115234000000',
          Baidu_coord_y: '39.79544448852539000000',
          Coord_x: '116.32858276367188000000',
          Coord_y: '39.78973770141601600000'
        },
        {
          Id: 551,
          Esf_id: 373,
          Realid: 551,
          Name: '新宫站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.37209320068360000000',
          Baidu_coord_y: '39.81830215454101600000',
          Coord_x: '116.36558532714844000000',
          Coord_y: '39.81238937377930000000'
        },
        {
          Id: 552,
          Esf_id: 809,
          Realid: 42,
          Name: '公益西桥站',
          Did: 16,
          Dname: '大兴线',
          Baidu_coord_x: '116.37731170654297000000',
          Baidu_coord_y: '39.84305572509765600000',
          Coord_x: '116.37081909179688000000',
          Coord_y: '39.83704376220703000000'
        }
      ],
      Id: 16,
      Esf_id: 21,
      Name: '大兴线'
    },
    {
      Stations: [
        {
          Id: 655,
          Esf_id: 5655,
          Realid: 655,
          Name: '朱辛庄站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.32013702392578000000',
          Baidu_coord_y: '40.11061096191406000000',
          Coord_x: '116.31359100341797000000',
          Coord_y: '40.10467147827148400000'
        },
        {
          Id: 654,
          Esf_id: 5654,
          Realid: 654,
          Name: '育知路',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.33390045166016000000',
          Baidu_coord_y: '40.09409713745117000000',
          Coord_x: '116.32729339599610000000',
          Coord_y: '40.08836746215820000000'
        },
        {
          Id: 653,
          Esf_id: 5653,
          Realid: 653,
          Name: '平西府站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.35729217529297000000',
          Baidu_coord_y: '40.09595489501953000000',
          Coord_x: '116.35068511962890000000',
          Coord_y: '40.09024810791015600000'
        },
        {
          Id: 411,
          Esf_id: 336,
          Realid: 411,
          Name: '回龙观东大街站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.36979675292969000000',
          Baidu_coord_y: '40.08723068237305000000',
          Coord_x: '116.36325073242188000000',
          Coord_y: '40.08135223388672000000'
        },
        {
          Id: 536,
          Esf_id: 335,
          Realid: 123,
          Name: '霍营站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.36672210693360000000',
          Baidu_coord_y: '40.07712936401367000000',
          Coord_x: '116.36016845703125000000',
          Coord_y: '40.07130432128906000000'
        },
        {
          Id: 414,
          Esf_id: 334,
          Realid: 414,
          Name: '育新站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.35399627685547000000',
          Baidu_coord_y: '40.06612396240234400000',
          Coord_x: '116.34740447998047000000',
          Coord_y: '40.06045150756836000000'
        },
        {
          Id: 415,
          Esf_id: 333,
          Realid: 415,
          Name: '西小口站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.35821533203125000000',
          Baidu_coord_y: '40.05271530151367000000',
          Coord_x: '116.35163116455078000000',
          Coord_y: '40.04700851440430000000'
        },
        {
          Id: 416,
          Esf_id: 332,
          Realid: 416,
          Name: '永泰庄站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.36116027832031000000',
          Baidu_coord_y: '40.04369354248047000000',
          Coord_x: '116.35459136962890000000',
          Coord_y: '40.03794860839844000000'
        },
        {
          Id: 417,
          Esf_id: 331,
          Realid: 417,
          Name: '林萃桥站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.37890625000000000000',
          Baidu_coord_y: '40.02799606323242000000',
          Coord_x: '116.37242126464844000000',
          Coord_y: '40.02195358276367000000'
        },
        {
          Id: 92,
          Esf_id: 330,
          Realid: 92,
          Name: '森林公园南门站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.39927673339844000000',
          Baidu_coord_y: '40.01639938354492000000',
          Coord_x: '116.39287567138672000000',
          Coord_y: '40.01007080078125000000'
        },
        {
          Id: 91,
          Esf_id: 329,
          Realid: 91,
          Name: '奥林匹克公园站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.39922332763672000000',
          Baidu_coord_y: '40.00863265991211000000',
          Coord_x: '116.39281463623047000000',
          Coord_y: '40.00230026245117000000'
        },
        {
          Id: 90,
          Esf_id: 328,
          Realid: 90,
          Name: '奥体中心站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40019226074219000000',
          Baidu_coord_y: '39.99244308471680000000',
          Coord_x: '116.39378356933594000000',
          Coord_y: '39.98610687255859400000'
        },
        {
          Id: 89,
          Esf_id: 717,
          Realid: 89,
          Name: '北土城站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40070343017578000000',
          Baidu_coord_y: '39.98332214355469000000',
          Coord_x: '116.39430236816406000000',
          Coord_y: '39.97698211669922000000'
        },
        {
          Id: 419,
          Esf_id: 326,
          Realid: 419,
          Name: '安华桥站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40103149414062000000',
          Baidu_coord_y: '39.97486495971680000000',
          Coord_x: '116.39463806152344000000',
          Coord_y: '39.96852874755859400000'
        },
        {
          Id: 495,
          Esf_id: 324,
          Realid: 26,
          Name: '鼓楼大街站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40010833740234000000',
          Baidu_coord_y: '39.95472335815430000000',
          Coord_x: '116.39373016357422000000',
          Coord_y: '39.94839859008789000000'
        },
        {
          Id: 422,
          Esf_id: 323,
          Realid: 422,
          Name: '什刹海站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40287017822266000000',
          Baidu_coord_y: '39.94358062744140600000',
          Coord_x: '116.39650726318360000000',
          Coord_y: '39.93724441528320000000'
        },
        {
          Id: 423,
          Esf_id: 322,
          Realid: 423,
          Name: '南锣鼓巷站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.41056060791016000000',
          Baidu_coord_y: '39.93996047973633000000',
          Coord_x: '116.40419769287110000000',
          Coord_y: '39.93362426757812500000'
        },
        {
          Id: 424,
          Esf_id: 321,
          Realid: 424,
          Name: '中国美术馆站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.41727447509766000000',
          Baidu_coord_y: '39.93150711059570000000',
          Coord_x: '116.41088867187500000000',
          Coord_y: '39.92521667480469000000'
        },
        {
          Id: 676,
          Esf_id: 5676,
          Realid: 676,
          Name: '王府井站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.41779327392578000000',
          Baidu_coord_y: '39.91439819335937500000',
          Coord_x: '116.41139984130860000000',
          Coord_y: '39.90811157226562500000'
        },
        {
          Id: 677,
          Esf_id: 5677,
          Realid: 677,
          Name: '前门站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40427398681640000000',
          Baidu_coord_y: '39.90653228759765600000',
          Coord_x: '116.39789581298828000000',
          Coord_y: '39.90018844604492000000'
        },
        {
          Id: 678,
          Esf_id: 5678,
          Realid: 678,
          Name: '珠市口站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40362548828125000000',
          Baidu_coord_y: '39.89777374267578000000',
          Coord_x: '116.39723205566406000000',
          Coord_y: '39.89142608642578000000'
        },
        {
          Id: 679,
          Esf_id: 5679,
          Realid: 679,
          Name: '天桥站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40523529052734000000',
          Baidu_coord_y: '39.88898086547851600000',
          Coord_x: '116.39883422851562000000',
          Coord_y: '39.88262939453125000000'
        },
        {
          Id: 680,
          Esf_id: 5680,
          Realid: 477,
          Name: '永定门外站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40564727783203000000',
          Baidu_coord_y: '39.87371063232422000000',
          Coord_x: '116.39924621582031000000',
          Coord_y: '39.86735534667969000000'
        },
        {
          Id: 681,
          Esf_id: 5681,
          Realid: 681,
          Name: '木樨园北站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40658569335938000000',
          Baidu_coord_y: '39.86579513549805000000',
          Coord_x: '116.40018463134766000000',
          Coord_y: '39.85943984985351600000'
        },
        {
          Id: 682,
          Esf_id: 5682,
          Realid: 682,
          Name: '木樨园南站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40669250488281000000',
          Baidu_coord_y: '39.85828018188476600000',
          Coord_x: '116.40030670166016000000',
          Coord_y: '39.85192871093750000000'
        },
        {
          Id: 683,
          Esf_id: 5683,
          Realid: 683,
          Name: '大红门站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40700531005860000000',
          Baidu_coord_y: '39.85204315185547000000',
          Coord_x: '116.40061950683594000000',
          Coord_y: '39.84569168090820000000'
        },
        {
          Id: 684,
          Esf_id: 5684,
          Realid: 684,
          Name: '大红门桥站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40737152099610000000',
          Baidu_coord_y: '39.84270477294922000000',
          Coord_x: '116.40099334716797000000',
          Coord_y: '39.83635711669922000000'
        },
        {
          Id: 685,
          Esf_id: 5685,
          Realid: 685,
          Name: '和义站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.40848541259766000000',
          Baidu_coord_y: '39.82084655761719000000',
          Coord_x: '116.40212249755860000000',
          Coord_y: '39.81450271606445000000'
        },
        {
          Id: 686,
          Esf_id: 5686,
          Realid: 686,
          Name: '西洼地站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.41481781005860000000',
          Baidu_coord_y: '39.81172943115234400000',
          Coord_x: '116.40843963623047000000',
          Coord_y: '39.80541992187500000000'
        },
        {
          Id: 687,
          Esf_id: 5687,
          Realid: 687,
          Name: '六营门站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.42498779296875000000',
          Baidu_coord_y: '39.80678558349609400000',
          Coord_x: '116.41857147216797000000',
          Coord_y: '39.80059432983398400000'
        },
        {
          Id: 688,
          Esf_id: 5688,
          Realid: 688,
          Name: '五福堂站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.42935943603516000000',
          Baidu_coord_y: '39.79170227050781000000',
          Coord_x: '116.42291259765625000000',
          Coord_y: '39.78557586669922000000'
        },
        {
          Id: 689,
          Esf_id: 5689,
          Realid: 689,
          Name: '德茂站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.44327545166016000000',
          Baidu_coord_y: '39.78141021728515600000',
          Coord_x: '116.43672943115234000000',
          Coord_y: '39.77552795410156000000'
        },
        {
          Id: 690,
          Esf_id: 5690,
          Realid: 690,
          Name: '瀛海站',
          Did: 7,
          Dname: '8号线',
          Baidu_coord_x: '116.45511627197266000000',
          Baidu_coord_y: '39.76945495605469000000',
          Coord_x: '116.44850158691406000000',
          Coord_y: '39.76373672485351600000'
        }
      ],
      Id: 7,
      Esf_id: 18,
      Name: '8号线'
    },
    {
      Stations: [
        {
          Id: 580,
          Esf_id: 798,
          Realid: 120,
          Name: '西二旗站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.31261444091797000000',
          Baidu_coord_y: '40.05892181396484400000',
          Coord_x: '116.30615997314453000000',
          Coord_y: '40.05285644531250000000'
        },
        {
          Id: 570,
          Esf_id: 799,
          Realid: 570,
          Name: '生命科学园站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.30055236816406000000',
          Baidu_coord_y: '40.10097503662109400000',
          Coord_x: '116.29412841796875000000',
          Coord_y: '40.09471130371094000000'
        },
        {
          Id: 571,
          Esf_id: 800,
          Realid: 571,
          Name: '朱辛庄站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.32013702392578000000',
          Baidu_coord_y: '40.11033630371094000000',
          Coord_x: '116.31359100341797000000',
          Coord_y: '40.10439300537109400000'
        },
        {
          Id: 572,
          Esf_id: 801,
          Realid: 572,
          Name: '巩华城站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.30027770996094000000',
          Baidu_coord_y: '40.13732147216797000000',
          Coord_x: '116.29386138916016000000',
          Coord_y: '40.13105392456055000000'
        },
        {
          Id: 573,
          Esf_id: 802,
          Realid: 573,
          Name: '沙河站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.29511260986328000000',
          Baidu_coord_y: '40.15460968017578000000',
          Coord_x: '116.28872680664062000000',
          Coord_y: '40.14830017089844000000'
        },
        {
          Id: 574,
          Esf_id: 803,
          Realid: 574,
          Name: '沙河高教园站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.28667449951172000000',
          Baidu_coord_y: '40.17074203491211000000',
          Coord_x: '116.28031158447266000000',
          Coord_y: '40.16439819335937500000'
        },
        {
          Id: 575,
          Esf_id: 804,
          Realid: 575,
          Name: '南邵站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.29442596435547000000',
          Baidu_coord_y: '40.21317672729492000000',
          Coord_x: '116.28803253173828000000',
          Coord_y: '40.20685577392578000000'
        },
        {
          Id: 648,
          Esf_id: 5648,
          Realid: 648,
          Name: '昌平新城站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.28798675537110000000',
          Baidu_coord_y: '40.22809982299805000000',
          Coord_x: '116.28158569335938000000',
          Coord_y: '40.22174835205078000000'
        },
        {
          Id: 577,
          Esf_id: 806,
          Realid: 577,
          Name: '水库路站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.26823425292969000000',
          Baidu_coord_y: '40.22801971435547000000',
          Coord_x: '116.26178741455078000000',
          Coord_y: '40.22181320190430000000'
        },
        {
          Id: 576,
          Esf_id: 805,
          Realid: 576,
          Name: '亢山广场站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.25631713867188000000',
          Baidu_coord_y: '40.22708892822265600000',
          Coord_x: '116.24980163574219000000',
          Coord_y: '40.22108459472656000000'
        },
        {
          Id: 649,
          Esf_id: 5649,
          Realid: 649,
          Name: '昌平站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.24016571044922000000',
          Baidu_coord_y: '40.22635650634765600000',
          Coord_x: '116.23355865478516000000',
          Coord_y: '40.22061538696289000000'
        },
        {
          Id: 578,
          Esf_id: 807,
          Realid: 578,
          Name: '西关环岛站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.22171783447266000000',
          Baidu_coord_y: '40.23191833496094000000',
          Coord_x: '116.21508026123047000000',
          Coord_y: '40.22624969482422000000'
        },
        {
          Id: 579,
          Esf_id: 808,
          Realid: 579,
          Name: '十三陵景区站',
          Did: 34,
          Dname: '昌平线',
          Baidu_coord_x: '116.21517944335938000000',
          Baidu_coord_y: '40.24556350708008000000',
          Coord_x: '116.20856475830078000000',
          Coord_y: '40.23984527587890600000'
        }
      ],
      Id: 34,
      Esf_id: 40,
      Name: '昌平线'
    },
    {
      Stations: [
        {
          Id: 467,
          Esf_id: 5467,
          Realid: 467,
          Name: '张郭庄站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.19342041015625000000',
          Baidu_coord_y: '39.86411666870117000000',
          Coord_x: '116.18692779541016000000',
          Coord_y: '39.85805511474609400000'
        },
        {
          Id: 468,
          Esf_id: 5468,
          Realid: 468,
          Name: '园博园站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.20835113525390000000',
          Baidu_coord_y: '39.86710739135742000000',
          Coord_x: '116.20175933837890000000',
          Coord_y: '39.86130142211914000000'
        },
        {
          Id: 469,
          Esf_id: 5469,
          Realid: 469,
          Name: '大瓦窑站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.24695587158203000000',
          Baidu_coord_y: '39.86522293090820000000',
          Coord_x: '116.24038696289062000000',
          Coord_y: '39.85938262939453000000'
        },
        {
          Id: 470,
          Esf_id: 5470,
          Realid: 470,
          Name: '郭庄子站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.25983428955078000000',
          Baidu_coord_y: '39.87075424194336000000',
          Coord_x: '116.25334167480469000000',
          Coord_y: '39.86468505859375000000'
        },
        {
          Id: 642,
          Esf_id: 5642,
          Realid: 642,
          Name: '大井站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.28182983398438000000',
          Baidu_coord_y: '39.87158966064453000000',
          Coord_x: '116.27542877197266000000',
          Coord_y: '39.86524581909180000000'
        },
        {
          Id: 432,
          Esf_id: 1121,
          Realid: 431,
          Name: '七里庄站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.30029296875000000000',
          Baidu_coord_y: '39.87258911132812500000',
          Coord_x: '116.29386901855469000000',
          Coord_y: '39.86632156372070000000'
        },
        {
          Id: 456,
          Esf_id: 5456,
          Realid: 455,
          Name: '西局站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.30988311767578000000',
          Baidu_coord_y: '39.87252426147461000000',
          Coord_x: '116.30340576171875000000',
          Coord_y: '39.86639785766601600000'
        },
        {
          Id: 471,
          Esf_id: 5471,
          Realid: 471,
          Name: '东管头站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.32774353027344000000',
          Baidu_coord_y: '39.87343978881836000000',
          Coord_x: '116.32115936279297000000',
          Coord_y: '39.86763000488281000000'
        },
        {
          Id: 472,
          Esf_id: 5472,
          Realid: 472,
          Name: '丽泽商务区站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.34286499023438000000',
          Baidu_coord_y: '39.87324142456055000000',
          Coord_x: '116.33622741699219000000',
          Coord_y: '39.86757659912109400000'
        },
        {
          Id: 473,
          Esf_id: 5473,
          Realid: 473,
          Name: '菜户营站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.35134124755860000000',
          Baidu_coord_y: '39.87301635742187500000',
          Coord_x: '116.34471130371094000000',
          Coord_y: '39.86734771728515600000'
        },
        {
          Id: 474,
          Esf_id: 5474,
          Realid: 474,
          Name: '西铁营站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.36091613769531000000',
          Baidu_coord_y: '39.86680984497070000000',
          Coord_x: '116.35430908203125000000',
          Coord_y: '39.86105728149414000000'
        },
        {
          Id: 643,
          Esf_id: 5643,
          Realid: 643,
          Name: '右安门外站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.37242889404297000000',
          Baidu_coord_y: '39.86865997314453000000',
          Coord_x: '116.36588287353516000000',
          Coord_y: '39.86272811889648400000'
        },
        {
          Id: 348,
          Esf_id: 5348,
          Realid: 45,
          Name: '北京南站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.38548278808594000000',
          Baidu_coord_y: '39.87119674682617000000',
          Coord_x: '116.37902069091797000000',
          Coord_y: '39.86503219604492000000'
        },
        {
          Id: 476,
          Esf_id: 5476,
          Realid: 476,
          Name: '陶然桥站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.39334869384766000000',
          Baidu_coord_y: '39.87497711181640600000',
          Coord_x: '116.38692474365234000000',
          Coord_y: '39.86870193481445000000'
        },
        {
          Id: 477,
          Esf_id: 5477,
          Realid: 477,
          Name: '永定门外站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.40564727783203000000',
          Baidu_coord_y: '39.87371063232422000000',
          Coord_x: '116.39924621582031000000',
          Coord_y: '39.86735534667969000000'
        },
        {
          Id: 478,
          Esf_id: 5478,
          Realid: 478,
          Name: '安乐林路站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.41561126708984000000',
          Baidu_coord_y: '39.87141418457031000000',
          Coord_x: '116.40920257568360000000',
          Coord_y: '39.86509704589844000000'
        },
        {
          Id: 354,
          Esf_id: 5354,
          Realid: 68,
          Name: '蒲黄榆站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.42960357666016000000',
          Baidu_coord_y: '39.87169265747070000000',
          Coord_x: '116.42312622070312000000',
          Coord_y: '39.86556243896484400000'
        },
        {
          Id: 479,
          Esf_id: 5479,
          Realid: 479,
          Name: '方庄路站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.43876647949219000000',
          Baidu_coord_y: '39.87178421020508000000',
          Coord_x: '116.43223571777344000000',
          Coord_y: '39.86582183837890600000'
        },
        {
          Id: 444,
          Esf_id: 5444,
          Realid: 443,
          Name: '十里河站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.46575164794922000000',
          Baidu_coord_y: '39.87157440185547000000',
          Coord_x: '116.45911407470703000000',
          Coord_y: '39.86591720581055000000'
        },
        {
          Id: 481,
          Esf_id: 5481,
          Realid: 481,
          Name: '南八里庄站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.47742462158203000000',
          Baidu_coord_y: '39.87363815307617000000',
          Coord_x: '116.47080230712890000000',
          Coord_y: '39.86792373657226600000'
        },
        {
          Id: 482,
          Esf_id: 5482,
          Realid: 482,
          Name: '北京工业大学站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.48397064208984000000',
          Baidu_coord_y: '39.88171005249023400000',
          Coord_x: '116.47738647460938000000',
          Coord_y: '39.87591934204101600000'
        },
        {
          Id: 483,
          Esf_id: 5483,
          Realid: 483,
          Name: '平乐园站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.48368835449219000000',
          Baidu_coord_y: '39.89078903198242000000',
          Coord_x: '116.47709655761719000000',
          Coord_y: '39.88500213623047000000'
        },
        {
          Id: 402,
          Esf_id: 5402,
          Realid: 401,
          Name: '九龙山站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.48402404785156000000',
          Baidu_coord_y: '39.89930343627930000000',
          Coord_x: '116.47744750976562000000',
          Coord_y: '39.89351272583008000000'
        },
        {
          Id: 345,
          Esf_id: 5345,
          Realid: 21,
          Name: '大望路站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.48344421386719000000',
          Baidu_coord_y: '39.91414260864258000000',
          Coord_x: '116.47688293457031000000',
          Coord_y: '39.90836715698242000000'
        },
        {
          Id: 484,
          Esf_id: 5484,
          Realid: 484,
          Name: '红庙站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.48421478271484000000',
          Baidu_coord_y: '39.92150878906250000000',
          Coord_x: '116.47765350341797000000',
          Coord_y: '39.91572570800781000000'
        },
        {
          Id: 374,
          Esf_id: 1120,
          Realid: 373,
          Name: '金台路站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.48471832275390000000',
          Baidu_coord_y: '39.92889022827148400000',
          Coord_x: '116.47816467285156000000',
          Coord_y: '39.92309951782226600000'
        },
        {
          Id: 485,
          Esf_id: 5485,
          Realid: 485,
          Name: '朝阳公园站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.48453521728516000000',
          Baidu_coord_y: '39.93964004516601600000',
          Coord_x: '116.47798156738281000000',
          Coord_y: '39.93385314941406000000'
        },
        {
          Id: 486,
          Esf_id: 5486,
          Realid: 486,
          Name: '枣营站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.48159027099610000000',
          Baidu_coord_y: '39.95022583007812500000',
          Coord_x: '116.47502136230469000000',
          Coord_y: '39.94447326660156000000'
        },
        {
          Id: 487,
          Esf_id: 5487,
          Realid: 487,
          Name: '东风北桥站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.49156188964844000000',
          Baidu_coord_y: '39.96832656860351600000',
          Coord_x: '116.48502349853516000000',
          Coord_y: '39.96241378784180000000'
        },
        {
          Id: 488,
          Esf_id: 5488,
          Realid: 488,
          Name: '将台站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.49626159667969000000',
          Baidu_coord_y: '39.97679901123047000000',
          Coord_x: '116.48974609375000000000',
          Coord_y: '39.97080230712890600000'
        },
        {
          Id: 645,
          Esf_id: 5645,
          Realid: 645,
          Name: '高家园站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.49414062500000000000',
          Baidu_coord_y: '39.98697280883789000000',
          Coord_x: '116.48760986328125000000',
          Coord_y: '39.98100662231445000000'
        },
        {
          Id: 489,
          Esf_id: 5489,
          Realid: 489,
          Name: '望京南站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.48379516601562000000',
          Baidu_coord_y: '39.99380874633789000000',
          Coord_x: '116.47720336914062000000',
          Coord_y: '39.98801803588867000000'
        },
        {
          Id: 644,
          Esf_id: 5644,
          Realid: 644,
          Name: '阜通站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.47763824462890000000',
          Baidu_coord_y: '39.99788665771484400000',
          Coord_x: '116.47102355957031000000',
          Coord_y: '39.99217224121094000000'
        },
        {
          Id: 490,
          Esf_id: 5490,
          Realid: 490,
          Name: '望京站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.47457122802734000000',
          Baidu_coord_y: '40.00482177734375000000',
          Coord_x: '116.46794891357422000000',
          Coord_y: '39.99913406372070000000'
        },
        {
          Id: 492,
          Esf_id: 5492,
          Realid: 492,
          Name: '东湖渠站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.47401428222656000000',
          Baidu_coord_y: '40.01623535156250000000',
          Coord_x: '116.46739196777344000000',
          Coord_y: '40.01055526733398400000'
        },
        {
          Id: 494,
          Esf_id: 5494,
          Realid: 494,
          Name: '来广营站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.47349548339844000000',
          Baidu_coord_y: '40.02614974975586000000',
          Coord_x: '116.46688079833984000000',
          Coord_y: '40.02047348022461000000'
        },
        {
          Id: 493,
          Esf_id: 5493,
          Realid: 493,
          Name: '善各庄站',
          Did: 10,
          Dname: '14号线',
          Baidu_coord_x: '116.48474884033203000000',
          Baidu_coord_y: '40.03308486938476600000',
          Coord_x: '116.47818756103516000000',
          Coord_y: '40.02729034423828000000'
        }
      ],
      Id: 10,
      Esf_id: 66,
      Name: '14号线'
    },
    {
      Stations: [
        {
          Id: 496,
          Esf_id: 5496,
          Realid: 496,
          Name: '清华东路西口站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.34555053710938000000',
          Baidu_coord_y: '40.00633239746094000000',
          Coord_x: '116.33891296386719000000',
          Coord_y: '40.00067520141601600000'
        },
        {
          Id: 498,
          Esf_id: 5498,
          Realid: 498,
          Name: '六道口站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.35929870605469000000',
          Baidu_coord_y: '40.00685882568359400000',
          Coord_x: '116.35269165039062000000',
          Coord_y: '40.00112533569336000000'
        },
        {
          Id: 499,
          Esf_id: 5499,
          Realid: 499,
          Name: '北沙滩站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.37550354003906000000',
          Baidu_coord_y: '40.00756835937500000000',
          Coord_x: '116.36898040771484000000',
          Coord_y: '40.00157928466797000000'
        },
        {
          Id: 418,
          Esf_id: 5418,
          Realid: 91,
          Name: '奥林匹克公园站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.39922332763672000000',
          Baidu_coord_y: '40.00863265991211000000',
          Coord_x: '116.39281463623047000000',
          Coord_y: '40.00230026245117000000'
        },
        {
          Id: 501,
          Esf_id: 5501,
          Realid: 501,
          Name: '安立路站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.41486358642578000000',
          Baidu_coord_y: '40.00867080688476600000',
          Coord_x: '116.40846252441406000000',
          Coord_y: '40.00234985351562500000'
        },
        {
          Id: 502,
          Esf_id: 1494,
          Realid: 502,
          Name: '关庄站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.43784332275390000000',
          Baidu_coord_y: '40.00741195678711000000',
          Coord_x: '116.43132019042969000000',
          Coord_y: '40.00143051147461000000'
        },
        {
          Id: 537,
          Esf_id: 1471,
          Realid: 126,
          Name: '望京西站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.45475006103516000000',
          Baidu_coord_y: '40.00086975097656000000',
          Coord_x: '116.44813537597656000000',
          Coord_y: '39.99514770507812500000'
        },
        {
          Id: 491,
          Esf_id: 1482,
          Realid: 490,
          Name: '望京站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.47457122802734000000',
          Baidu_coord_y: '40.00482177734375000000',
          Coord_x: '116.46794891357422000000',
          Coord_y: '39.99913406372070000000'
        },
        {
          Id: 506,
          Esf_id: 1485,
          Realid: 506,
          Name: '崔各庄站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.49914550781250000000',
          Baidu_coord_y: '40.02843856811523400000',
          Coord_x: '116.49266052246094000000',
          Coord_y: '40.02238845825195000000'
        },
        {
          Id: 590,
          Esf_id: 1472,
          Realid: 590,
          Name: '马泉营站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.50963592529297000000',
          Baidu_coord_y: '40.03984832763672000000',
          Coord_x: '116.50322723388672000000',
          Coord_y: '40.03363037109375000000'
        },
        {
          Id: 507,
          Esf_id: 1480,
          Realid: 507,
          Name: '孙河站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.54103851318360000000',
          Baidu_coord_y: '40.05126571655273400000',
          Coord_x: '116.53464508056640000000',
          Coord_y: '40.04501724243164000000'
        },
        {
          Id: 508,
          Esf_id: 1479,
          Realid: 508,
          Name: '国展站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.56172180175781000000',
          Baidu_coord_y: '40.07593154907226600000',
          Coord_x: '116.55519866943360000000',
          Coord_y: '40.07003021240234400000'
        },
        {
          Id: 509,
          Esf_id: 1478,
          Realid: 509,
          Name: '花梨坎站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.56396484375000000000',
          Baidu_coord_y: '40.09003829956055000000',
          Coord_x: '116.55741119384766000000',
          Coord_y: '40.08416748046875000000'
        },
        {
          Id: 510,
          Esf_id: 1477,
          Realid: 510,
          Name: '后沙峪站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.57079315185547000000',
          Baidu_coord_y: '40.11986541748047000000',
          Coord_x: '116.56419372558594000000',
          Coord_y: '40.11409759521484400000'
        },
        {
          Id: 511,
          Esf_id: 1476,
          Realid: 511,
          Name: '南法信站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.61640930175781000000',
          Baidu_coord_y: '40.13445663452148400000',
          Coord_x: '116.60990142822266000000',
          Coord_y: '40.12845611572265600000'
        },
        {
          Id: 512,
          Esf_id: 1905,
          Realid: 512,
          Name: '石门站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.64749908447266000000',
          Baidu_coord_y: '40.13631439208984400000',
          Coord_x: '116.64111328125000000000',
          Coord_y: '40.12996292114258000000'
        },
        {
          Id: 513,
          Esf_id: 1906,
          Realid: 513,
          Name: '顺义站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.66346740722656000000',
          Baidu_coord_y: '40.13608932495117000000',
          Coord_x: '116.65703582763672000000',
          Coord_y: '40.12986755371094000000'
        },
        {
          Id: 514,
          Esf_id: 1907,
          Realid: 514,
          Name: '俸伯站',
          Did: 11,
          Dname: '15号线',
          Baidu_coord_x: '116.69145202636719000000',
          Baidu_coord_y: '40.13830566406250000000',
          Coord_x: '116.68486022949219000000',
          Coord_y: '40.13254928588867000000'
        }
      ],
      Id: 11,
      Esf_id: 75,
      Name: '15号线'
    },
    {
      Stations: [
        {
          Id: 553,
          Esf_id: 389,
          Realid: 66,
          Name: '宋家庄站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.43487548828125000000',
          Baidu_coord_y: '39.85187530517578000000',
          Coord_x: '116.42838287353516000000',
          Coord_y: '39.84584426879883000000'
        },
        {
          Id: 554,
          Esf_id: 388,
          Realid: 554,
          Name: '肖村站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.45485687255860000000',
          Baidu_coord_y: '39.83993148803711000000',
          Coord_x: '116.44826507568360000000',
          Coord_y: '39.83421707153320000000'
        },
        {
          Id: 555,
          Esf_id: 387,
          Realid: 555,
          Name: '小红门站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.46560668945312000000',
          Baidu_coord_y: '39.83444595336914000000',
          Coord_x: '116.45899963378906000000',
          Coord_y: '39.82880020141601600000'
        },
        {
          Id: 556,
          Esf_id: 386,
          Realid: 556,
          Name: '旧宫站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.46762084960938000000',
          Baidu_coord_y: '39.81246185302734400000',
          Coord_x: '116.46102142333984000000',
          Coord_y: '39.80681991577148400000'
        },
        {
          Id: 557,
          Esf_id: 385,
          Realid: 557,
          Name: '亦庄桥站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.48713684082031000000',
          Baidu_coord_y: '39.80886840820312500000',
          Coord_x: '116.48059844970703000000',
          Coord_y: '39.80303955078125000000'
        },
        {
          Id: 558,
          Esf_id: 384,
          Realid: 558,
          Name: '亦庄文化园站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.49703979492188000000',
          Baidu_coord_y: '39.81271362304687500000',
          Coord_x: '116.49056243896484000000',
          Coord_y: '39.80671310424805000000'
        },
        {
          Id: 559,
          Esf_id: 383,
          Realid: 559,
          Name: '万源街站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.51206207275390000000',
          Baidu_coord_y: '39.80931854248047000000',
          Coord_x: '116.50566101074219000000',
          Coord_y: '39.80307006835937500000'
        },
        {
          Id: 560,
          Esf_id: 381,
          Realid: 560,
          Name: '荣京东街站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.51995086669922000000',
          Baidu_coord_y: '39.79964065551758000000',
          Coord_x: '116.51357269287110000000',
          Coord_y: '39.79331588745117000000'
        },
        {
          Id: 561,
          Esf_id: 380,
          Realid: 561,
          Name: '荣昌东街站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.52803802490234000000',
          Baidu_coord_y: '39.78919219970703000000',
          Coord_x: '116.52165985107422000000',
          Coord_y: '39.78284835815430000000'
        },
        {
          Id: 562,
          Esf_id: 379,
          Realid: 562,
          Name: '同济南路站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.54638671875000000000',
          Baidu_coord_y: '39.77914810180664000000',
          Coord_x: '116.53993988037110000000',
          Coord_y: '39.77296829223633000000'
        },
        {
          Id: 563,
          Esf_id: 378,
          Realid: 563,
          Name: '经海路站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.56890869140625000000',
          Baidu_coord_y: '39.78949356079101600000',
          Coord_x: '116.56233978271484000000',
          Coord_y: '39.78370666503906000000'
        },
        {
          Id: 564,
          Esf_id: 377,
          Realid: 564,
          Name: '次渠南站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.58794403076172000000',
          Baidu_coord_y: '39.80050659179687500000',
          Coord_x: '116.58133697509766000000',
          Coord_y: '39.79486083984375000000'
        },
        {
          Id: 565,
          Esf_id: 376,
          Realid: 565,
          Name: '次渠站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.59790802001953000000',
          Baidu_coord_y: '39.80919265747070000000',
          Coord_x: '116.59133148193360000000',
          Coord_y: '39.80348587036133000000'
        },
        {
          Id: 566,
          Esf_id: 375,
          Realid: 566,
          Name: '亦庄火车站',
          Did: 17,
          Dname: '亦庄线',
          Baidu_coord_x: '116.60560607910156000000',
          Baidu_coord_y: '39.81618118286133000000',
          Coord_x: '116.59906005859375000000',
          Coord_y: '39.81037521362305000000'
        }
      ],
      Id: 17,
      Esf_id: 22,
      Name: '亦庄线'
    },
    {
      Stations: [
        {
          Id: 425,
          Esf_id: 337,
          Realid: 425,
          Name: '郭公庄站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.30856323242188000000',
          Baidu_coord_y: '39.82076263427734400000',
          Coord_x: '116.30213165283203000000',
          Coord_y: '39.81462860107422000000'
        },
        {
          Id: 528,
          Esf_id: 339,
          Realid: 528,
          Name: '丰台科技园站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.30347442626953000000',
          Baidu_coord_y: '39.83142852783203000000',
          Coord_x: '116.29706573486328000000',
          Coord_y: '39.82521438598633000000'
        },
        {
          Id: 529,
          Esf_id: 340,
          Realid: 529,
          Name: '科怡路站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.30379486083984000000',
          Baidu_coord_y: '39.83868026733398400000',
          Coord_x: '116.29737091064453000000',
          Coord_y: '39.83246612548828000000'
        },
        {
          Id: 527,
          Esf_id: 341,
          Realid: 527,
          Name: '丰台南路站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.30271911621094000000',
          Baidu_coord_y: '39.84709548950195000000',
          Coord_x: '116.29629516601562000000',
          Coord_y: '39.84086608886719000000'
        },
        {
          Id: 530,
          Esf_id: 343,
          Realid: 530,
          Name: '丰台东大街站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.30030822753906000000',
          Baidu_coord_y: '39.86133193969726600000',
          Coord_x: '116.29388427734375000000',
          Coord_y: '39.85506820678711000000'
        },
        {
          Id: 431,
          Esf_id: 342,
          Realid: 431,
          Name: '七里庄站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.30029296875000000000',
          Baidu_coord_y: '39.87258911132812500000',
          Coord_x: '116.29386901855469000000',
          Coord_y: '39.86632156372070000000'
        },
        {
          Id: 435,
          Esf_id: 345,
          Realid: 435,
          Name: '六里桥站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.30960845947266000000',
          Baidu_coord_y: '39.88642883300781000000',
          Coord_x: '116.30313873291016000000',
          Coord_y: '39.88029861450195000000'
        },
        {
          Id: 532,
          Esf_id: 344,
          Realid: 532,
          Name: '六里桥东站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.32146453857422000000',
          Baidu_coord_y: '39.89278030395508000000',
          Coord_x: '116.31491851806640000000',
          Coord_y: '39.88686370849609400000'
        },
        {
          Id: 568,
          Esf_id: 346,
          Realid: 388,
          Name: '北京西站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.32786560058594000000',
          Baidu_coord_y: '39.90182113647461000000',
          Coord_x: '116.32129669189453000000',
          Coord_y: '39.89601516723633000000'
        },
        {
          Id: 344,
          Esf_id: 347,
          Realid: 9,
          Name: '军事博物馆站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.33121490478516000000',
          Baidu_coord_y: '39.91323471069336000000',
          Coord_x: '116.32463836669922000000',
          Coord_y: '39.90748214721680000000'
        },
        {
          Id: 533,
          Esf_id: 348,
          Realid: 533,
          Name: '白堆子站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.33235931396484000000',
          Baidu_coord_y: '39.92970657348633000000',
          Coord_x: '116.32579040527344000000',
          Coord_y: '39.92396926879883000000'
        },
        {
          Id: 588,
          Esf_id: 1252,
          Realid: 362,
          Name: '白石桥南站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.33203887939453000000',
          Baidu_coord_y: '39.93840026855469000000',
          Coord_x: '116.32546997070312000000',
          Coord_y: '39.93265914916992000000'
        },
        {
          Id: 351,
          Esf_id: 349,
          Realid: 56,
          Name: '国家图书馆站',
          Did: 8,
          Dname: '9号线',
          Baidu_coord_x: '116.33171081542969000000',
          Baidu_coord_y: '39.94903564453125000000',
          Coord_x: '116.32514190673828000000',
          Coord_y: '39.94329071044922000000'
        }
      ],
      Id: 8,
      Esf_id: 19,
      Name: '9号线'
    },
    {
      Stations: [
        {
          Id: 426,
          Esf_id: 351,
          Realid: 425,
          Name: '郭公庄站',
          Did: 12,
          Dname: '房山线',
          Baidu_coord_x: '116.30856323242188000000',
          Baidu_coord_y: '39.82076263427734400000',
          Coord_x: '116.30213165283203000000',
          Coord_y: '39.81462860107422000000'
        },
        {
          Id: 535,
          Esf_id: 352,
          Realid: 535,
          Name: '大葆台站',
          Did: 12,
          Dname: '房山线',
          Baidu_coord_x: '116.29815673828125000000',
          Baidu_coord_y: '39.81411361694336000000',
          Coord_x: '116.29177856445312000000',
          Coord_y: '39.80783081054687500000'
        },
        {
          Id: 517,
          Esf_id: 353,
          Realid: 517,
          Name: '稻田站',
          Did: 12,
          Dname: '房山线',
          Baidu_coord_x: '116.22542572021484000000',
          Baidu_coord_y: '39.80051040649414000000',
          Coord_x: '116.21882629394531000000',
          Coord_y: '39.79486083984375000000'
        },
        {
          Id: 518,
          Esf_id: 1237,
          Realid: 518,
          Name: '长阳站',
          Did: 12,
          Dname: '房山线',
          Baidu_coord_x: '116.21926116943360000000',
          Baidu_coord_y: '39.76940917968750000000',
          Coord_x: '116.21263885498047000000',
          Coord_y: '39.76372909545898400000'
        },
        {
          Id: 520,
          Esf_id: 355,
          Realid: 520,
          Name: '篱笆房站',
          Did: 12,
          Dname: '房山线',
          Baidu_coord_x: '116.19586181640625000000',
          Baidu_coord_y: '39.76672363281250000000',
          Coord_x: '116.18934631347656000000',
          Coord_y: '39.76070785522461000000'
        },
        {
          Id: 521,
          Esf_id: 356,
          Realid: 521,
          Name: '广阳城站',
          Did: 12,
          Dname: '房山线',
          Baidu_coord_x: '116.19137573242188000000',
          Baidu_coord_y: '39.75401687622070000000',
          Coord_x: '116.18489074707031000000',
          Coord_y: '39.74792098999023400000'
        },
        {
          Id: 522,
          Esf_id: 357,
          Realid: 522,
          Name: '良乡大学城北站',
          Did: 12,
          Dname: '房山线',
          Baidu_coord_x: '116.18929290771484000000',
          Baidu_coord_y: '39.73607635498047000000',
          Coord_x: '116.18282318115234000000',
          Coord_y: '39.72994613647461000000'
        },
        {
          Id: 523,
          Esf_id: 358,
          Realid: 523,
          Name: '良乡大学城站',
          Did: 12,
          Dname: '房山线',
          Baidu_coord_x: '116.18289184570312000000',
          Baidu_coord_y: '39.72947692871094000000',
          Coord_x: '116.17646026611328000000',
          Coord_y: '39.72324752807617000000'
        },
        {
          Id: 524,
          Esf_id: 359,
          Realid: 524,
          Name: '良乡大学城西站',
          Did: 12,
          Dname: '房山线',
          Baidu_coord_x: '116.16264343261719000000',
          Baidu_coord_y: '39.72963333129883000000',
          Coord_x: '116.15625000000000000000',
          Coord_y: '39.72328948974609400000'
        },
        {
          Id: 525,
          Esf_id: 360,
          Realid: 525,
          Name: '良乡南关站',
          Did: 12,
          Dname: '房山线',
          Baidu_coord_x: '116.14725494384766000000',
          Baidu_coord_y: '39.72946929931640600000',
          Coord_x: '116.14081573486328000000',
          Coord_y: '39.72328186035156000000'
        },
        {
          Id: 526,
          Esf_id: 361,
          Realid: 526,
          Name: '苏庄站',
          Did: 12,
          Dname: '房山线',
          Baidu_coord_x: '116.13189697265625000000',
          Baidu_coord_y: '39.72919845581055000000',
          Coord_x: '116.12536621093750000000',
          Coord_y: '39.72327804565430000000'
        }
      ],
      Id: 12,
      Esf_id: 20,
      Name: '房山线'
    },
    {
      Stations: [
        {
          Id: 538,
          Esf_id: 296,
          Realid: 29,
          Name: '东直门站',
          Did: 15,
          Dname: '机场线',
          Baidu_coord_x: '116.44120788574219000000',
          Baidu_coord_y: '39.94851303100586000000',
          Coord_x: '116.43469238281250000000',
          Coord_y: '39.94260406494140600000'
        },
        {
          Id: 439,
          Esf_id: 295,
          Realid: 101,
          Name: '三元桥站',
          Did: 15,
          Dname: '机场线',
          Baidu_coord_x: '116.46362304687500000000',
          Baidu_coord_y: '39.96625518798828000000',
          Coord_x: '116.45700073242188000000',
          Coord_y: '39.96060180664062500000'
        },
        {
          Id: 539,
          Esf_id: 294,
          Realid: 539,
          Name: '2号航站楼站',
          Did: 15,
          Dname: '机场线',
          Baidu_coord_x: '116.59933471679688000000',
          Baidu_coord_y: '40.08533477783203000000',
          Coord_x: '116.59274291992188000000',
          Coord_y: '40.07960891723633000000'
        },
        {
          Id: 540,
          Esf_id: 293,
          Realid: 540,
          Name: '3号航站楼站',
          Did: 15,
          Dname: '机场线',
          Baidu_coord_x: '116.62224578857422000000',
          Baidu_coord_y: '40.05905532836914000000',
          Coord_x: '116.61579895019531000000',
          Coord_y: '40.05295562744140600000'
        }
      ],
      Id: 15,
      Esf_id: 16,
      Name: '机场线'
    }
  ]
};

exports.default = {
  imgArr: imgArr,
  areas: areas,
  stations: stations
};

module.exports = exports['default'];
