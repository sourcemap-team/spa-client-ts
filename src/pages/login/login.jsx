import { Button, Checkbox, Form, Input } from 'antd';
import { useAuth } from '../../context/Auth.jsx';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const AuthPage = () => {
  const { login } = useAuth();

  const onFinish = (values) => {
    login(values);
  };

  return (
    <div style={{ margin: '64px auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '44px' }}>
        Sign In to Platform
      </h2>
      <div style={{ maxWidth: '320px', margin: '0 auto' }}>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AuthPage;
