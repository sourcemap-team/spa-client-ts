import React, { FC } from 'react';
import { Menu } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  CodepenCircleOutlined,
} from '@ant-design/icons';

import { gold } from '@ant-design/colors';

import { Link } from 'react-router-dom';

import { useAuth } from '@context/Auth';

const TopMenu: FC = () => {
  const { logout } = useAuth();
  const handleRightMenuItemClick = ({ key }) => {
    if (key === 'logout') {
      logout();
    }
  };

  const rightItems = [
    {
      label: <Link to="/profile">Profile</Link>,
      key: 'profile',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/settings">Settings</Link>,
      key: 'settings',
      icon: <SettingOutlined />,
    },
    {
      label: 'Logout',
      key: 'logout',
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link to="/">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CodepenCircleOutlined style={{ fontSize: '32px', color: gold[0] }} />
        </div>
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        overflowedIndicator={<SettingOutlined />}
        items={rightItems}
        onClick={handleRightMenuItemClick}
      />
    </div>
  );
};
export default TopMenu;
