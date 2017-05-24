import React, { Component } from 'react';
import { render } from 'react-dom';
import { Icon, Select, Input, Button, Table } from 'antd';
import reqwest from 'reqwest';
import { select } from './data';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      searchValue: this.queryString('s'),
      searchKey: this.queryString('k')
    };
  }
  // 根据url参数名获取参数的值
  queryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    return r ? r[2] : null;
  }

  handleChange(e) {
    this.setState({ searchKey: e });
  }

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
  handleSearch(e) {
    window.location = '/DevKey/DevKeySearch.html?k=' +
      encodeURIComponent(this.state.searchKey) +
      '&s=' +
      encodeURIComponent(this.state.searchValue);
  }
  handleInputChange(e) {
    console.log(e);
    this.setState({
      searchValue: e.target.value
    });
  }

  componentWillMount() {
    reqwest({
      url: './DevKeyItem.ashx',
      method: 'post',
      type: 'json',
      data: {
        action: 'search',
        searchKey: this.queryString('k'),
        searchValue: this.queryString('s')
      }
    })
      .then(response => this.setState({ result: response }))
      .fail(err => this.setState({ type: 'error' }));
  }

  componentDidMount() {}

  render() {
    const Option = Select.Option;
    const InputGroup = Input.Group;

    let children = [];
    for (let i = 0; i < select.length; i++) {
      children.push(
        <Option key={i.toString(36) + i} value={select[i].value}>
          {select[i].text}
        </Option>
      );
    }

    const preData = this.state.result;
    const columns = [
      {
        title: '开发要点',
        dataIndex: 'ItemName',
        key: 'ItemName',
        render(text, record) {
          return (
            <a
              href={
                '/DevKey/DevKeyView.html?teamID=' +
                  record.TeamID +
                  '&itemID=' +
                  record.GroupID
              }
              target="_blank"
            >
              {text}
            </a>
          );
        }
      },
      {
        title: '结果',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '',
        dataIndex: 'rel',
        key: 'rel'
      },
      {
        title: '备注',
        dataIndex: 'desc',
        key: 'desc'
      },
      {
        title: '修改时间',
        dataIndex: 'ModifyTime',
        key: 'ModifyTime'
      }
    ];

    let dataSource = [];

    if (preData && Array.isArray(preData)) {
      for (var i = 0; i < preData.length; i++) {
        dataSource.push({
          key: preData[i].ID,
          ItemName: preData[i].ItemName || '',
          name: preData[i].Name || '',
          rel: preData[i].DataBase ||
            preData[i].DomainUrl ||
            preData[i].Site ||
            preData[i].Server ||
            preData[i].Url,
          desc: preData[i].Note || '',
          GroupID: preData[i].GroupID || '',
          TeamID: preData[i].TeamID || '',
          ModifyTime: preData[i].ModifyTime || ''
        });
      }
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
              defaultValue={this.state.searchKey}
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
          <div className="main-container">
            <Table
              size="middle"
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              bordered
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<Search />, document.getElementById('container'));
