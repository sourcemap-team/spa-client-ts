import { Button, Form, Image, Input } from 'antd';
import React from 'react';
import { authApi } from '@services/auth';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Index: React.FC = () => {
  const { currentData } = authApi.endpoints.fetchMe.useQueryState(null);
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Image
        width={320}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <Form
        {...layout}
        initialValues={currentData}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="accountRegistrationDate" label="Created">
          <Input disabled />
        </Form.Item>
        <Form.Item name={['roleInfo', 'name']} label="Role">
          <Input disabled />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[{ type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
