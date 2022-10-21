import { Layout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../../context/Auth.jsx';
import TopMenu from '../../TopMenu/TopMenu.jsx';

const { Header, Content, Footer } = Layout;

export const ProtectedLayout = () => {
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
