import { Menu } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/Auth.jsx';

const TopMenu = () => {
  const { logout } = useAuth();
  const handleRightMenuItemClick = ({ key }) => {
    if (key === 'logout') {
      logout();
    }
  };

  const leftItems = [
    { label: <Link to="/">Home</Link>, key: 'home' }, // remember to pass the key prop
    { label: <Link to="/dashboard">Dashboard</Link>, key: 'dashboards' }, // which is required
  ];

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
      type: 'divider',
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
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={leftItems}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['mail']}
        overflowedIndicator={<SettingOutlined />}
        items={rightItems}
        onClick={handleRightMenuItemClick}
      />
    </div>
  );
};
export default TopMenu;