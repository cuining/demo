/*
* @Author: cncc
* @Date:   2016-04-21 17:35:18
* @Last Modified by:   cncc
* @Last Modified time: 2016-04-21 17:40:16
*/

'use strict';

var menu = [{ ID: 6, Name: '合同及消耗业务' }];

var table = {
  item: {
    Technology: 'ASP.net',
    Requirement: '无',
    GroupID: '29B2C11B-EEFC-436B-BA02-2EE255D92873',
    Name: '合同及消耗业务',
    ModifyUser: 'CFA6227E-8562-4E01-A714-329ED2E1DA83',
    ModifyTime: '2016-04-06T10:33:26.167',
    Sort: 6,
    ID: 6,
    CreateUser: 'CFA6227E-8562-4E01-A714-329ED2E1DA83',
    CreateTime: '2016-04-06T09:37:26',
    Note: '功能描述:\r\n1:通过控制台程序,获取金蝶系统中生成的线下合同信息,保存到经纪人数据库,在客服后台进行管理这部分合同.\r\n2:通过控制台程序,获取经纪人数据库生成的在线合同信息,传输给金蝶系统.\r\n3:通过每日执行存储过程,生成以上两种合同的每日消耗,储存在经纪人数据库中.\r\n4:通过控制台程序,获取以上两种合同的每周,每月消耗数据,定期传送给金蝶系统.\r\n\r\n名词解释:(内容超长,无法保存)\r\n临时合同:因为生成正式合同有延时，只能先生成临时合同，通过临时合同号进行经纪人付费开通。同时也包括一些无付费的赠送合同及测试合同。\r\n正式合同:通过金蝶系统生成的正式合同，有控制台程序接收到搜房帮系统中。可以与已经生成的临时合同做关联。\r\n在线合同:通过在线购买产生的在线订单号作为搜房帮系统中的合同号。同时另外再生成在线合同号传给金蝶（EAS）的系统\r\n合同消耗:三种合同通过不同方式开通，每天产生的费用消耗，直到合同总金额被使用完。\r\n合同占用:通过开通及预开通的结束日期，以及估算的合同每日消耗，计算这个合同到结束日为止，总共可以消耗多少金额。\r\nEAS系统:金蝶的一个软件，用作财务系统管理合同。\r\n传输程序:将新产生的在线合同，以及三种合同的消耗传输给金蝶（EAS）系统。\r\n并行合同:2个以上合同开给同一个人,合同时间有重叠，内容有重叠（一个开60端口，一个开120端口）重叠的时间部分生成并行合同（180端口），不重叠的部分仍然独立开通（一个60，一个120），按预开通执行,并行合同在AgentPowerCtrl.ContractCode中使用。'
  },
  ascts: {
    Entrance: [
      {
        ID: 5,
        GroupID: 6,
        Name: '客服后台',
        Url: '\/Admin\/Contract\/*.aspx',
        CreateTime: '2016-04-06 09:37:26.000',
        ModifyTime: '2016-04-06 09:37:26.297',
        Sort: 5,
        Note: '1.文件夹下所有合同管理相关文件\n2.菜单入库为左侧"合同管理"大菜单'
      },
      {
        ID: 6,
        GroupID: 6,
        Name: '客服后台',
        Url: '\/Admin\/Agent\/PowerChangeSingle.aspx等',
        CreateTime: '2016-04-06 09:37:26.000',
        ModifyTime: '2016-04-06 09:37:26.337',
        Sort: 6,
        Note: '经纪人权限开通时,需要使用合同相关信息,在这些页面有获取合同信息的Ajax程序.'
      },
      {
        ID: 7,
        GroupID: 6,
        Name: '控制台程序',
        Url: 'svn:\/\/192.168.5.215:2003\/tech\/MAgent\/Applications\/合同相关\/ConsoleApp_CostOverflowEmail',
        CreateTime: '2016-04-06 10:14:52.000',
        ModifyTime: '2016-04-06 10:14:52.233',
        Sort: 7,
        Note: '占用超出时发邮件警告客服人员'
      },
      {
        ID: 8,
        GroupID: 6,
        Name: '控制台程序',
        Url: 'svn:\/\/192.168.5.215:2003\/tech\/MAgent\/Applications\/合同相关\/ConsoleApp_KingdeeContractSync',
        CreateTime: '2016-04-06 10:15:10.000',
        ModifyTime: '2016-04-06 10:15:10.743',
        Sort: 8,
        Note: '从金蝶抓取线下合同程序'
      },
      {
        ID: 9,
        GroupID: 6,
        Name: '控制台程序',
        Url: 'svn:\/\/192.168.5.215:2003\/tech\/MAgent\/Applications\/合同相关\/ConsoleApp_TempContractSendEmail',
        CreateTime: '2016-04-06 10:15:30.000',
        ModifyTime: '2016-04-06 10:15:30.163',
        Sort: 9,
        Note: '未关联正式合同的临时合同,发邮件提醒客服'
      },
      {
        ID: 10,
        GroupID: 6,
        Name: '控制台程序',
        Url: 'svn:\/\/192.168.5.215:2003\/tech\/MAgent\/Applications\/EASContractDeal',
        CreateTime: '2016-04-06 10:16:13.000',
        ModifyTime: '2016-04-06 10:16:13.827',
        Sort: 10,
        Note: '新版发送EAS合同数据程序'
      },
      {
        ID: 11,
        GroupID: 6,
        Name: '控制台程序',
        Url: 'svn:\/\/192.168.5.215:2003\/tech\/MAgent\/Applications\/EASContract_New\/EAS.ConsoleApp',
        CreateTime: '2016-04-06 10:16:58.000',
        ModifyTime: '2016-04-06 10:33:25.450',
        Sort: 11,
        Note: '旧版发送EAS合同程序,已停用\n发送合同,发送消耗,发送对应关系提醒,发送错误提醒等.'
      }
    ],
    DBTable: [
      {
        ID: 5,
        GroupID: 6,
        Name: 'MagentContract',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:38:44.000',
        ModifyTime: '2016-04-06 09:39:31.290',
        Sort: 5,
        Note: '经纪人线下合同表(从金蝶中抓取)\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=105'
      },
      {
        ID: 6,
        GroupID: 6,
        Name: 'MagentContract_Temp',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:39:16.000',
        ModifyTime: '2016-04-06 09:39:38.777',
        Sort: 6,
        Note: '临时合同表(客服后台生成)\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=1308'
      },
      {
        ID: 7,
        GroupID: 6,
        Name: 'MagentContract_MagentContract_Temp',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:40:07.000',
        ModifyTime: '2016-04-06 09:40:07.413',
        Sort: 7,
        Note: '正式合同表与临时合同表的关系表(对应表)\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=1310'
      },
      {
        ID: 8,
        GroupID: 6,
        Name: 'CombineContract',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:40:49.000',
        ModifyTime: '2016-04-06 09:50:15.957',
        Sort: 8,
        Note: '并行合同表\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=1314'
      },
      {
        ID: 9,
        GroupID: 6,
        Name: 'CombineContract_Relation',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:47:34.000',
        ModifyTime: '2016-04-06 09:47:34.247',
        Sort: 9,
        Note: '并行合同子表(并行合同表的子表\/并行合同与正式合同，临时合同的关系表)\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=1315'
      },
      {
        ID: 10,
        GroupID: 6,
        Name: 'MagentCon_Adjust_Request',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:49:38.000',
        ModifyTime: '2016-04-06 09:50:06.873',
        Sort: 10,
        Note: '预开通合同信息表,用于计算合同占用(设置权限预开通,到期后将数据转移至AgentPowerCtrl表,并在MagentCon_Adjust_Request_Unrelease中保存历史记录)\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=1534'
      },
      {
        ID: 11,
        GroupID: 6,
        Name: 'AgentPowerCtrl_YYYYMMDD',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:51:27.000',
        ModifyTime: '2016-04-06 09:51:27.803',
        Sort: 11,
        Note: '经纪人权限历史表,每天生成,用于计算合同消费,占用等信息,表名也可以不带后面日期参数.\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=14'
      },
      {
        ID: 12,
        GroupID: 6,
        Name: 'MagentContract_CostDetailLog',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:52:13.000',
        ModifyTime: '2016-04-06 09:52:13.943',
        Sort: 12,
        Note: '线下正式合同消费详情表,保存经纪人合同每日消耗\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=1313'
      },
      {
        ID: 13,
        GroupID: 6,
        Name: 'MagentContract_TempCostDetailLog',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:52:46.000',
        ModifyTime: '2016-04-06 09:55:54.497',
        Sort: 13,
        Note: '线下临时合同每日消费详情表\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=1312'
      },
      {
        ID: 14,
        GroupID: 6,
        Name: 'MagentShopContract_CostDetailLog',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:55:11.000',
        ModifyTime: '2016-04-06 09:55:11.370',
        Sort: 14,
        Note: '线下网店合同每日消费详情表,结构与MagentContract_CostDetailLog类似'
      },
      {
        ID: 15,
        GroupID: 6,
        Name: 'MagentShopContract_OnlineCostDetailLog',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:55:47.000',
        ModifyTime: '2016-04-06 09:55:47.460',
        Sort: 15,
        Note: '在线网店合同消耗.\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=2423'
      },
      {
        ID: 16,
        GroupID: 6,
        Name: 'Wireless_MagentContract_CostDetailLog',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:56:59.000',
        ModifyTime: '2016-04-06 09:56:59.913',
        Sort: 16,
        Note: '线下无线搜房帮合同每日消耗数据\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=1512'
      },
      {
        ID: 17,
        GroupID: 6,
        Name: 'Wireless_MagentContract_TempCostDetailLog',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:57:22.000',
        ModifyTime: '2016-04-06 09:57:22.973',
        Sort: 17,
        Note: '线下临时无线搜房帮合同消耗数据\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=1513'
      },
      {
        ID: 18,
        GroupID: 6,
        Name: 'MagentContract_CostDetailLog_WithAgentId',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:58:53.000',
        ModifyTime: '2016-04-06 09:58:53.007',
        Sort: 18,
        Note: '线下合同每日消耗数据,带经纪人ID作为主键\n结构与MagentContract_CostDetailLog类似'
      },
      {
        ID: 19,
        GroupID: 6,
        Name: 'MagentContract_TempCostDetailLog_WithAgentId',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 09:59:52.000',
        ModifyTime: '2016-04-06 09:59:52.870',
        Sort: 19,
        Note: '线下临时合同消耗数据,以合同\/日期\/经纪人ID作为主键\n与MagentContract_TempCostDetailLog类似'
      },
      {
        ID: 20,
        GroupID: 6,
        Name: 'EContract_CostDetailLog',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:00:42.000',
        ModifyTime: '2016-04-06 10:00:42.190',
        Sort: 20,
        Note: '在线合同每日消耗详情\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=2591'
      },
      {
        ID: 21,
        GroupID: 6,
        Name: 'Eas_Contract',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:01:20.000',
        ModifyTime: '2016-04-06 10:01:20.663',
        Sort: 21,
        Note: '传输给金蝶的在线合同数据记录\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=2672'
      },
      {
        ID: 22,
        GroupID: 6,
        Name: 'Eas_Contract_ToSend',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:02:13.000',
        ModifyTime: '2016-04-06 10:02:13.780',
        Sort: 22,
        Note: '待发送给金蝶的在线合同列表,由在线合同完成支付时生成\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=2675'
      },
      {
        ID: 23,
        GroupID: 6,
        Name: 'Eas_Contract_CostDetailSend',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:02:39.000',
        ModifyTime: '2016-04-06 10:02:39.980',
        Sort: 23,
        Note: '已经发送给金蝶的消耗数据记录\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=2673'
      },
      {
        ID: 24,
        GroupID: 6,
        Name: 'Eas_Contract_CostDetailStatus',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:03:19.000',
        ModifyTime: '2016-04-06 10:03:19.453',
        Sort: 24,
        Note: '当日经纪人消耗是否已生成的判断表\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=2674'
      },
      {
        ID: 25,
        GroupID: 6,
        Name: 'MagentContract_CostSituation',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:03:52.000',
        ModifyTime: '2016-04-06 10:03:52.107',
        Sort: 25,
        Note: '线下合同占用表\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=1319'
      },
      {
        ID: 26,
        GroupID: 6,
        Name: 'MagentContract_TempCostSituation',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:08:18.000',
        ModifyTime: '2016-04-06 10:08:18.547',
        Sort: 26,
        Note: '临时合同占用数据表\nhttp:\/\/192.168.96.243:8081\/OutputDocument\/LookByHtml?isDb=N&dbId=11&tbIdStr=1320'
      }
    ],
    DBProcedure: [
      {
        ID: 4,
        GroupID: 6,
        Name: 'WorkNew_ContractCostLog',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:05:43.000',
        ModifyTime: '2016-04-06 10:05:43.660',
        Sort: 4,
        Note: '合同消耗用,整理全部线下合同(正式,临时)'
      },
      {
        ID: 5,
        GroupID: 6,
        Name: 'WorkNew_ContractCostLog_Detail',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:06:08.000',
        ModifyTime: '2016-04-06 10:06:08.117',
        Sort: 5,
        Note: '上一步骤WorkNew_ContractCostLog整理出来的合同进行消耗计算'
      },
      {
        ID: 6,
        GroupID: 6,
        Name: 'WorkNew_ContractCost_WithAgentLog',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:06:42.000',
        ModifyTime: '2016-04-06 10:06:42.627',
        Sort: 6,
        Note: '整理所有经纪人及其对应的合同数据(正式,临时)'
      },
      {
        ID: 7,
        GroupID: 6,
        Name: 'WorkNew_ContractCost_WithAgentLog_Detail',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:07:14.000',
        ModifyTime: '2016-04-06 10:07:14.317',
        Sort: 7,
        Note: '上一步WorkNew_ContractCost_WithAgentLog整理出来的经纪人合同数据进行逐条计算消耗'
      },
      {
        ID: 8,
        GroupID: 6,
        Name: 'WorkNew_ContractCostSituation',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:08:54.000',
        ModifyTime: '2016-04-06 10:08:54.087',
        Sort: 8,
        Note: '合同占用计算存储过程(正式,临时)'
      },
      {
        ID: 9,
        GroupID: 6,
        Name: 'WorkNew_Wireless_ContractCostLog',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:09:23.000',
        ModifyTime: '2016-04-06 10:09:23.897',
        Sort: 9,
        Note: '无线搜房帮合同整理(正式.临时)'
      },
      {
        ID: 10,
        GroupID: 6,
        Name: 'WorkNew_Wireless_ContractCostLog_Detail',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:09:43.000',
        ModifyTime: '2016-04-06 10:09:43.157',
        Sort: 10,
        Note: '上一步WorkNew_Wireless_ContractCostLog整理出来的合同逐条进行消耗计算'
      },
      {
        ID: 11,
        GroupID: 6,
        Name: 'WorkNew_Wireless_ContractCost_WithAgentLog',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:10:42.000',
        ModifyTime: '2016-04-06 10:10:42.040',
        Sort: 11,
        Note: '无线搜房帮合同分经纪人数据整理(正式.临时)\n'
      },
      {
        ID: 12,
        GroupID: 6,
        Name: 'WorkNew_Wireless_ContractCost_WithAgentLog_Detail',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:10:58.000',
        ModifyTime: '2016-04-06 10:10:58.957',
        Sort: 12,
        Note: '上一步WorkNew_Wireless_ContractCost_WithAgentLog整理出来的合同逐条计算消耗'
      },
      {
        ID: 13,
        GroupID: 6,
        Name: 'WorkNew_Wireless_ContractCostSituation',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:11:20.000',
        ModifyTime: '2016-04-06 10:11:20.230',
        Sort: 13,
        Note: '无线搜房帮占用计算'
      },
      {
        ID: 14,
        GroupID: 6,
        Name: 'WorkNew_EContractCostLog_Detail',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:11:50.000',
        ModifyTime: '2016-04-06 10:11:50.120',
        Sort: 14,
        Note: '在线合同每日消耗计算(不包括网店)'
      },
      {
        ID: 15,
        GroupID: 6,
        Name: 'WorkNew_ShopContractCost',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:12:20.000',
        ModifyTime: '2016-04-06 10:12:20.913',
        Sort: 15,
        Note: '线下网店合同消耗计算'
      },
      {
        ID: 16,
        GroupID: 6,
        Name: 'WorkNew_ContractCostSituationMall',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:12:37.000',
        ModifyTime: '2016-04-06 10:12:37.753',
        Sort: 16,
        Note: '线下网店占用'
      },
      {
        ID: 17,
        GroupID: 6,
        Name: 'WorkNew_MallEContractCost',
        DataBase: '经纪人库',
        CreateTime: '2016-04-06 10:12:59.000',
        ModifyTime: '2016-04-06 10:12:59.447',
        Sort: 17,
        Note: '在线网店消耗计算'
      }
    ],
    DBView: [],
    Service: [],
    TaskPlan: [
      {
        ID: 3,
        GroupID: 6,
        Name: '合同占用超出警告邮件',
        Server: '123.103.36.36<br\/>218.30.110.127',
        CreateTime: '2016-04-06 10:25:17.000',
        ModifyTime: '2016-04-06 10:27:10.413',
        Sort: 3,
        Note: '合同消费溢出提醒,每日校验\nsvn:\/\/192.168.5.215:2003\/tech\/MAgent\/Applications\/合同相关\/ConsoleApp_CostOverflowEmail\n\/apptask\/ConsoleApp_CostOverflowEmail\/ConsoleApp_CostOverflowEmail.exe'
      },
      {
        ID: 4,
        GroupID: 6,
        Name: '临时合同月末发送邮件',
        Server: '218.30.110.127<br\/>123.103.36.203',
        CreateTime: '2016-04-06 10:26:29.000',
        ModifyTime: '2016-04-06 10:27:47.647',
        Sort: 4,
        Note: '临时合同未关联正式合同,月末发送邮件提醒,每月末执行\nsvn:\/\/192.168.5.215:2003\/tech\/MAgent\/Applications\/合同相关\/ConsoleApp_TempContractSendEmail\ne:\/soufun\/apptask\/ConsoleApp_TempContractSendEmail\/ConsoleApp_TempContractSendEmail.exe'
      },
      {
        ID: 5,
        GroupID: 6,
        Name: '同步金蝶生成的线下合同',
        Server: '123.103.36.36<br\/>218.30.105.81',
        CreateTime: '2016-04-06 10:29:03.000',
        ModifyTime: '2016-04-06 10:29:03.523',
        Sort: 5,
        Note: '同步金蝶合同数据\n\/apptask\/ConsoleApp_KingdeeContractSync\/ConsoleApp_KingdeeContractSync.exe\nsvn:\/\/192.168.5.215:2003\/tech\/MAgent\/Applications\/合同相关\/ConsoleApp_KingdeeContractSync'
      },
      {
        ID: 6,
        GroupID: 6,
        Name: '在线合同同步金蝶数据库',
        Server: '123.103.36.203<br\/>218.30.105.81',
        CreateTime: '2016-04-06 10:30:48.000',
        ModifyTime: '2016-04-06 10:30:48.387',
        Sort: 6,
        Note: '在线合同同步金蝶数据库\n\/apptask\/EASContractDeal\/\nsvn:\/\/192.168.5.215:2003\/tech\/MAgent\/Applications\/EASContractDeal'
      },
      {
        ID: 7,
        GroupID: 6,
        Name: '合同数据同步至独立数据库',
        Server: '北方123.103.36.203,南方218.30.105.81,上海180.153.102.200',
        CreateTime: '2016-04-06 10:31:59.000',
        ModifyTime: '2016-04-06 10:31:59.700',
        Sort: 7,
        Note: '合同数据同步至独立数据库\n\/apptask\/Contract.ConsoleApp\/Contract.ConsoleApp.Sync.exe\nsvn:\/\/192.168.5.215:2003\/tech\/MAgent\/Applications\/Contract.ConsoleApp'
      }
    ],
    Interface: [],
    Section: [],
    Producter: [
      {
        ID: 3,
        GroupID: 6,
        Name: '胡华',
        Contact: 'huhua@soufun.com',
        CreateTime: '2016-04-06 10:17:54.000',
        ModifyTime: '2016-04-06 10:17:54.573',
        Sort: 3,
        Note: '消耗及消费占用规则,合同问题处理\n每月需生成相应的内审截图给胡华'
      },
      {
        ID: 4,
        GroupID: 6,
        Name: '赵海燕',
        Contact: 'zhaohaiyan@fang.com',
        CreateTime: '2016-04-06 10:18:51.000',
        ModifyTime: '2016-04-06 10:18:51.787',
        Sort: 4,
        Note: '胡华休长假,替班'
      },
      {
        ID: 5,
        GroupID: 6,
        Name: '伯玲君',
        Contact: 'bolingjun@soufun.com',
        CreateTime: '2016-04-06 10:19:16.000',
        ModifyTime: '2016-04-06 10:19:16.683',
        Sort: 5,
        Note: 'EAS产品对接人'
      }
    ],
    Worker: [
      {
        ID: 4,
        GroupID: 6,
        Name: '李伟',
        Contact: 'bjliwei@fang.com',
        WeihuTime: '2016-04-01 00:00:00.000',
        CreateTime: '2016-04-06 10:19:48.000',
        ModifyTime: '2016-04-06 10:19:48.023',
        Sort: 4,
        Note: ''
      },
      {
        ID: 5,
        GroupID: 6,
        Name: '陈睿',
        Contact: 'chenrui.bj@fang.com',
        WeihuTime: '2016-03-01 00:00:00.000',
        CreateTime: '2016-04-06 10:20:13.000',
        ModifyTime: '2016-04-06 10:20:13.040',
        Sort: 5,
        Note: ''
      }
    ]
  }
};

exports.default = {
  menu: menu,
  table: table
};

module.exports = exports['default'];
