import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../components/layout';
import {
  Breadcrumb,
  Row,
  Col,
  Button,
  Table,
  Pagination
} from 'react-bootstrap';
import { axios } from '../lib';
import querystring from 'querystring';

export default class Index extends React.Component {
  static async getInitialProps({ query }) {
    const { p } = query;
    const page = Number(p || 0);

    const res = await axios.post(
      '/project/mainPageList',
      querystring.stringify({
        offset: page,
        limit: 10
      })
    );
    return {
      list: res.projectInfoDto,
      totalCount: res.totalCount,
      currentPage: page,
      limit: 10
    };
  }

  render() {
    const { totalCount, currentPage, limit, page } = this.props;
    const totalPage = Math.ceil(totalCount / limit);
    return (
      <Layout>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Project List
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row className="mb15">
          <Col xs={12} md={8}><Button>+ New Project</Button></Col>
          <Col xs={6} md={4} />
        </Row>
        <Table responsive bordered striped hover>
          <thead>
            <tr>
              <th>
                <a href="javascript:;">
                  Project Name

                </a>
              </th>
              <th>By State</th>
              <th>
                <a href="javascript:;">
                  Last Run Time
                </a>
              </th>
              <th>Environment Settings</th>
              <th>Test Results</th>
              <th>Other Settings</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list &&
              this.props.list.map((item, index) => (
                <tr key={item.projectId}>
                  <td>
                    {item.projectName}
                  </td>
                  <td>{item.lastResult}</td>
                  <td>{item.lastRunDate}</td>
                  <td />
                  <td className="test-result">
                    <span>
                      <a target="_blank" href="javascript:;">Run</a>
                    </span>
                    <span>
                      {item.lastTestRail !== '' && item.lastTestRail !== 'null'
                        ? <a target="_blank" href={item.lastTestRail}>
                            TestRail Report
                          </a>
                        : ''}
                    </span>
                    <span>
                      {item.lastRunReport !== 'null' &&
                        item.lastRunReport !== ''
                        ? <a target="_blank" href={item.lastRunReport}>
                            Last Run Results
                          </a>
                        : ''}
                    </span>
                    <span />
                  </td>
                  <td>
                    <a target="_blank" href="javascript:;">
                      Log Settings
                    </a>
                    ｜
                    <span>Mock</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        <Link prefetch href={`/?p=${currentPage + 1}`}><a>Next</a></Link>
        <style>
          {
            `
          .mb15 {
            margin-bottom: 15px;
          }
          .atfc-pager {
            display: flex;
            align-items: center;
          }
          .atfc-pager > span {
            margin-left: 20px;
            color: #337ab7;
          }
          .atfc-pager .detail {
            position: absolute;
            right: 60px;
          }
        `
          }
        </style>
      </Layout>
    );
  }
}
