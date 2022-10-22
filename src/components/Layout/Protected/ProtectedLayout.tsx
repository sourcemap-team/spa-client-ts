import React, { FC } from 'react';
import { Layout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@context/Auth';
import TopMenu from '@components/TopMenu/TopMenu';

const { Header, Content, Footer } = Layout;

export const ProtectedLayout: FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <Header>
        <TopMenu />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
