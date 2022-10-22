import React, { FC } from 'react';
import { Layout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@context/Auth';

const { Footer, Content } = Layout;

export const UnauthorizedLayout: FC = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
