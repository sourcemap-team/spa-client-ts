import React from 'react';

import {
  PieChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    label: <Link to="/calendar">Calendar</Link>,
    key: '1',
    icon: <CalendarOutlined />,
  },
  {
    label: <Link to="/charts">Charts</Link>,
    key: '2',
    icon: <PieChartOutlined />,
  },
];

type Props = {
  collapsed: boolean;
  onCollapse?: (value: boolean) => void;
};

const SideMenu: React.FC<Props> = ({ collapsed, onCollapse }) => {
  const handleClick = () => {
    onCollapse(!collapsed);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          type="primary"
          onClick={handleClick}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        />
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default SideMenu;
