import React,{useState} from 'react';
import './Todo.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  YoutubeFilled,
  FileDoneOutlined ,
  ReadOutlined,
  FireOutlined ,
  UserAddOutlined,
  AppstoreOutlined   
} from '@ant-design/icons';
const { Header, Sider } = Layout;
 function SiderToDo () {
  const [collapsed, setCollapsed] = useState(false) 
  const toggle = () => {
    setCollapsed({
      collapsed: ! collapsed,
    });
  };
  return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="0" style={{fontSize:25}}>
              <p>ISOMORPHIC</p>
            </Menu.Item>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<ReadOutlined  />}>
              Map
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="6" icon={<FileDoneOutlined  />}>
              Srum Board
            </Menu.Item>
            <Menu.Item key="7" icon={<YoutubeFilled />}>
              Youtube Search
            </Menu.Item>
            <Menu.Item key="8" icon={<YoutubeFilled />}>
              Youtube Search
            </Menu.Item>
            <Menu.Item key="9" icon={<FileDoneOutlined />}>
              Todos
            </Menu.Item>
            <Menu.Item key="10" icon={<FireOutlined  />}>
              FireStore CRUD
            </Menu.Item>
            <Menu.Item key="11" icon={<UserAddOutlined/>}>
              Contact
            </Menu.Item>
            <Menu.Item key="12" icon={<AppstoreOutlined />}>
              Suffle
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
        </Layout>
      </Layout>
    );
}
export default SiderToDo;
