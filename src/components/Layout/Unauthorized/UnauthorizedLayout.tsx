import React, { FC } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Footer, Content } = Layout;

export const UnauthorizedLayout: FC = () => {
  return (
    <Layout>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
