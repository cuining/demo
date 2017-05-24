import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

const navbars = {
  Project: [{ title: 'New Project' }, { title: 'Project List', href: '#' }],
  API: [
    { title: 'New API', href: '#/api/new' },
    { title: 'API List', href: '#/api/list' }
  ],
  Header: '#/header/list',
  'Upload File': [
    { title: 'Upload File' },
    { title: 'Import SOA', href: '#/upload/ImportSoa' }
  ],
  'Test Rail': [
    { title: 'Copy Case', href: '#/copyCase/CopyCaseList/login' },
    { title: 'Log Out', href: '#/copyCase/CopyCaseList/logout' }
  ],
  Template: [
    { title: 'md', href: '#/protocolTemplate/protocolTemplate/md' },
    { title: 'yml', href: '#/protocolTemplate/protocolTemplate/yml' },
    { title: 'thrift', href: '#/protocolTemplate/protocolTemplate/thrift' }
  ],
  Stress: [
    { title: 'Stress Setting', href: '#/stress/StressSetting' },
    { title: 'HAR To JMX', href: '#/stress/HarToJmx' }
  ],
  DB: [
    { title: 'DB Configuration', href: '#/dbConfig/config/newDbConfig' },
    { title: 'DB Configuration List', href: '#/dbConfig/DbConfigList' }
  ],
  Batch: [
    { title: 'Import Case', href: '#/batch/ImportCase' },
    { title: 'Import UnitCase', href: '#/batch/ImportUnitCase' }
  ],
  'Case Summary': [{ title: 'Case Failed List', href: '#/case/failures' }]
};

export default () => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">atfcAPI</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {Object.keys(navbars).map((key, index) => {
          if (Array.isArray(navbars[key])) {
            return (
              <NavDropdown eventKey={index} title={key}>
                {navbars[key].map((item, idx) => {
                  const { href, onClick } = item;
                  const restProps = {
                    href,
                    onClick
                  };
                  return (
                    <MenuItem eventKey={idx} {...restProps}>
                      {item.title}
                    </MenuItem>
                  );
                })}
              </NavDropdown>
            );
          }
          return <NavItem eventKey={index} href={navbars[key]}>{key}</NavItem>;
        })}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
