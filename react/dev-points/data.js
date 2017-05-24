const select = [
  { value: 'DBTable', text: '数据表名称' },
  { value: 'Interface', text: '接口名称' },
  { value: 'Service', text: '服务名称' },
  { value: 'TaskPlan', text: '计划任务名称' },
  { value: 'Section', text: '配置节名称' },
  { value: 'Entrance', text: '界面url' },
  { value: 'DBView', text: '视图名称' }
];

const columns = [
  // 界面入口
  [
    {
      title: '站点名称',
      dataIndex: 'Name',
      width: 300
    },
    {
      title: '页面文件地址',
      dataIndex: 'Url'
    },
    {
      title: '说明',
      dataIndex: 'Note'
    }
  ],
  // 涉及的数据表
  [
    {
      title: '表名',
      dataIndex: 'Name',
      width: 300
    },
    {
      title: '数据库',
      dataIndex: 'DataBase'
    },
    {
      title: '表结构说明',
      dataIndex: 'Note'
    }
  ],
  // 涉及的存储过程
  [
    {
      title: '存储过程名',
      dataIndex: 'Name',
      width: 300
    },
    {
      title: '数据库',
      dataIndex: 'DataBase'
    },
    {
      title: '表结构说明',
      dataIndex: 'Note'
    }
  ],
  // 涉及的数据库视图
  [
    {
      title: '视图',
      dataIndex: 'Name',
      width: 300
    },
    {
      title: '数据库',
      dataIndex: 'DataBase'
    },
    {
      title: '说明',
      dataIndex: 'Note'
    }
  ],
  // 涉及的服务（WCF）
  [
    {
      title: '服务名',
      dataIndex: 'Name',
      width: 300
    },
    {
      title: '服务域名',
      dataIndex: 'DomainUrl'
    },
    {
      title: '说明',
      dataIndex: 'Note'
    }
  ],
  // 涉及的计划任务
  [
    {
      title: '程序名',
      dataIndex: 'Name',
      width: 300
    },
    {
      title: '服务器',
      dataIndex: 'Server'
    },
    {
      title: '说明',
      dataIndex: 'Note'
    }
  ],
  // 涉及的接口
  [
    {
      title: '接口名',
      dataIndex: 'Name',
      width: 300
    },
    {
      title: '接口域名',
      dataIndex: 'DomainUrl'
    },
    {
      title: '说明',
      dataIndex: 'Note'
    }
  ],
  // 涉及的配置节
  [
    {
      title: 'Key',
      dataIndex: 'Name',
      width: 300
    },
    {
      title: '所在站点',
      dataIndex: 'Site'
    },
    {
      title: '说明',
      dataIndex: 'Note'
    }
  ],
  // 相关的产品人员
  [
    {
      title: '姓名',
      dataIndex: 'Name',
      width: 300
    },
    {
      title: '联系方式',
      dataIndex: 'Contact'
    },
    {
      title: '备注',
      dataIndex: 'Note'
    }
  ],
  // 相关的技术人员
  [
    {
      title: '姓名',
      dataIndex: 'Name',
      width: 300
    },
    {
      title: '联系方式',
      dataIndex: 'Contact'
    },
    {
      title: '最后维护时间',
      dataIndex: 'WeihuTime'
    }
  ]
];

const tabs = [
  'Entrance',
  'DBTable',
  'DBProcedure',
  'DBView',
  'Service',
  'TaskPlan',
  'Interface',
  'Section',
  'Producter',
  'Worker'
];
const tabsName = [
  '界面入口',
  '涉及的数据表',
  '涉及的存储过程',
  '涉及的数据库视图',
  '涉及的服务（WCF）',
  '涉及的计划任务',
  '涉及的接口',
  '涉及的配置节',
  '相关的产品人员',
  '相关的技术人员'
];

exports.default = {
  select: select,
  columns: columns,
  tabs: tabs,
  tabsName: tabsName
};
module.exports = exports['default'];
