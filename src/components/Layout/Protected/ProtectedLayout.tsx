import React, { FC, useState } from 'react';
import { Layout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@context/Auth';

import TopMenu from '@components/TopMenu/TopMenu';
import SideMenu from '@components/SideMenu/SideMenu';

const { Header, Content, Sider } = Layout;

export const ProtectedLayout: FC = () => {
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = (newValue: boolean) => {
    setCollapsed(newValue);
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <Header>
        <TopMenu />
      </Header>
      <Layout>
        <Sider width={320} trigger={null} collapsible collapsed={collapsed}>
          <SideMenu collapsed={collapsed} onCollapse={handleCollapse} />
        </Sider>
        <Content style={{ padding: '64px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
