import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { useAuth } from '@context/Auth';
import { RegistrationRequestData } from '@custom-types/index';

const RegisterPage: FC = () => {
  const { register, registerResponse } = useAuth();

  const onFinish = (registerData: RegistrationRequestData) => {
    register(registerData);
  };

  return (
    <div style={{ margin: '64px auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '44px' }}>
        Sign Up to Platform
      </h2>
      <div style={{ maxWidth: '320px', margin: '0 auto' }}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="on"
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
          <Form.Item
            name="passwordConfirm"
            rules={[
              {
                required: true,
                message: 'Please confirm your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password confirmation"
            />
          </Form.Item>

          <Form.Item>
            <Button
              loading={registerResponse.isLoading}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign Up
            </Button>
            &nbsp;Or&nbsp;<Link to="/login">Sign In!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
