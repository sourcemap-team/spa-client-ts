import React, { FC, useState } from 'react';
import { Layout, Skeleton } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';

import { authApi } from '@services/auth';

import TopMenu from '@components/TopMenu/TopMenu';
import SideMenu from '@components/SideMenu/SideMenu';

const { Header, Content, Sider } = Layout;

export const ProtectedLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const { isLoading, isFetching } = authApi.endpoints.fetchMe.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const { currentData } = authApi.endpoints.fetchMe.useQueryState(null);

  const handleCollapse = (newValue: boolean) => {
    setCollapsed(newValue);
  };

  if (isLoading || isFetching) {
    return <Skeleton active />;
  }

  if (!currentData) {
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
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
