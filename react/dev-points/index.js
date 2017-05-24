import React, { Component } from 'react';
import { render } from 'react-dom';
import { Icon, Select, Input, Button, Menu, Table, Spin } from 'antd';
import reqwest from 'reqwest';

import { select, columns, tabs, tabsName } from './data';
import { menu, table } from './mock/devkey';

let timer = null;
const defaultValue = 'DBTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: [],
      itemInfo: {},
      loading: true, // 是否显示加载效果
      searchValue: '',
      searchKey: defaultValue
    };
  }
  // 根据url参数名获取参数的值
  queryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    return r ? r[2] : null;
  }

  // menu子菜单点击
  handleClick(e) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(
      () => {
        reqwest({
          url: './DevKeyItem.ashx',
          method: 'post',
          type: 'json',
          data: { action: 'getItemInfo', itemID: e.key }
        })
          .then(response => this.setState({ itemInfo: response }))
          .fail(err => this.setState({ type: 'error' }));
      },
      200
    );
  }
  // 点击搜索按钮
  handleSearch(e) {
    window.location = '/search.html?k=' +
      encodeURIComponent(this.state.searchKey) +
      '&s=' +
      encodeURIComponent(this.state.searchValue);
  }
  // 搜索框文本输入
  handleInputChange(e) {
    this.setState({
      searchValue: e.target.value
    });
    console.log(this.state.searchValue);
  }
  // 搜索关键字change
  handleChange(e) {
    this.setState({
      searchKey: e
    });
    console.log(this.state.searchKey);
  }

  componentWillMount() {
    // 获取左侧菜单数据
    /*reqwest({
        url: './DevKeyItem.ashx',
        method: 'post',
        type:'json',
        data: { action: 'getnode', GroupID: this.queryString("teamID") }
      })
      .then(response => this.setState({ menuData:response}))
      .fail(err => this.setState({ type: 'error' }));

      // 获取table数据
      reqwest({
        url: './DevKeyItem.ashx',
        method: 'post',
        type:'json',
        data: { action: 'getItemInfo', itemID: this.queryString("itemID") }
      })
      .then(response => this.setState({ itemInfo:response}))
      .fail(err => this.setState({ type: 'error' }));*/

    this.setState({
      menuData: menu,
      itemInfo: table
    });
  }

  componentDidMount() {
    let self = this;
    document.addEventListener('scroll', function(e) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(
        () => {
          // 判断是否滚动到了底部

          let [n1, n2, n3] = [
            document.body.scrollTop || document.documentElement.scrollTop,
            document.body.clientHeight,
            document.body.scrollHeight
          ];
          // 滚动到底部
          if (n1 + n2 === n3 && self.state.loading) {
            self.setState({ loading: false });
          }
        },
        500
      );
    });
  }

  render() {
    // select columns tabs tabsName 数据来自data.js

    const SubMenu = Menu.SubMenu;
    const Option = Select.Option;
    const InputGroup = Input.Group;
    const { menuData, itemInfo } = this.state;

    // 右侧table
    const preData = itemInfo.ascts;
    // 项目简要说明
    const desc = itemInfo.item;
    let descHTML = [];
    if (desc) {
      descHTML.push(<p key="p0" className="desc">所用技术：{desc.Technology}</p>);
      descHTML.push(<p key="p1" className="desc">需求文档：{desc.Requirement}</p>);
      descHTML.push(
        <p key="p2" className="desc">描述：{desc.Note.split(/\n/)}</p>
      );
    }
    let TableArr = [];
    if (preData) {
      let length = tabs.length > 5 ? 5 : tabs.length;
      if (!this.state.loading) {
        length = tabs.length;
      }
      for (let i = 0; i < length; i++) {
        TableArr.push({
          tab: tabsName[i],
          columns: columns[i],
          dataSource: preData[tabs[i]]
        });
      }
    }
    // 左侧menu
    const menuStyle = {
      width: '200px',
      margin: '20px 0 0 0'
    };
    let children = [];
    for (let i = 0; i < select.length; i++) {
      children.push(
        <Option key={i.toString(36) + i} value={select[i].value}>
          {select[i].text}
        </Option>
      );
    }

    return (
      <div>
        <header className="cf">
          <div className="logo">
            <img
              width="60"
              src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"
            />
            <span className="name">开发要点管理系统</span>
          </div>
          <div className="search">
            <Select
              style={{ width: '30%', float: 'left' }}
              defaultValue={defaultValue}
              onChange={this.handleChange.bind(this)}
            >
              {children}
            </Select>
            <InputGroup
              className="ant-search-input"
              style={{ width: 200, float: 'left' }}
            >
              <Input
                {...this.props}
                value={this.state.searchValue}
                onChange={this.handleInputChange.bind(this)}
              />
              <div className="ant-input-group-wrap">
                <Button
                  className="ant-search-btn"
                  onClick={this.handleSearch.bind(this)}
                >
                  <Icon type="search" />
                </Button>
              </div>
            </InputGroup>

          </div>
          <nav>
            <ul>
              <li><a href="mailto:cuining@fang.com">支持</a></li>
            </ul>
          </nav>
        </header>
        <div className="wrapper cf">
          <div className="aside-container">
            <Menu
              style={menuStyle}
              mode="inline"
              defaultOpenKeys={['sub1']}
              onClick={this.handleClick.bind(this)}
            >
              <SubMenu
                key="sub1"
                title={<span><Icon type="setting" /><span>搜房帮</span></span>}
              >
                {menuData &&
                  menuData.map(item => (
                    <Menu.Item key={item.ID}>{item.Name}</Menu.Item>
                  ))}
              </SubMenu>
            </Menu>
          </div>
          <div className="main-container">
            {descHTML}
            {TableArr &&
              TableArr.map((item, index) => (
                <div key={index.toString(36) + index}>
                  <h4>{item.tab}</h4>
                  <Table
                    key={index}
                    rowKey={() => item.dataSource.ID}
                    size="middle"
                    columns={item.columns}
                    dataSource={item.dataSource}
                    pagination={false}
                    bordered
                  />
                </div>
              ))}
            <div className={this.state.loading ? 'loading' : ''}>
              <Spin spining={this.state.loading} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('container'));
