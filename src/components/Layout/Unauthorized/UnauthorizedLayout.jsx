import { Layout } from 'antd';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../context/Auth.jsx';

const { Footer, Content } = Layout;

export const UnauthorizedLayout = () => {
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
