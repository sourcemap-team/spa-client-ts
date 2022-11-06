import React, { FC } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useAuth } from '@context/Auth';
import { Link } from 'react-router-dom';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LoginData } from '@custom-types/index';

import styles from "./Login.module.scss";

const AuthPage: FC = () => {
  const { login, loginResponse } = useAuth();

  const onFinish = (loginData: LoginData) => {
    login(loginData);
  };

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        Sign In to Platform
      </h2>
      <div className={styles.formWrap}>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete={'on'}
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
              loading={loginResponse.isLoading}
            >
              Sign in
            </Button>
            &nbsp;Or&nbsp;<Link to="/register">Sign up</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AuthPage;
