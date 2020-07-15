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
} from '@ant-design/icons';
const { Header, Sider } = Layout;
 function SiderToDo () {
  const [collapsed, setCollapsed] = useState(false)
  console.log("sao ko log đc vậy", collapsed);
 
  const toggle = () => {
    setCollapsed({
      collapsed: ! collapsed,
    });
  };
  return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              Map
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="6" icon={<UploadOutlined />}>
              Srum Board
            </Menu.Item>
            <Menu.Item key="7" icon={<UploadOutlined />}>
              Youtube Search
            </Menu.Item>
            <Menu.Item key="8" icon={<UploadOutlined />}>
              Youtube Search
            </Menu.Item>
            <Menu.Item key="9" icon={<UploadOutlined />}>
              Todos
            </Menu.Item>
            <Menu.Item key="9" icon={<UploadOutlined />}>
              FireStore CRUD
            </Menu.Item>
            <Menu.Item key="9" icon={<UploadOutlined />}>
              Contact
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
