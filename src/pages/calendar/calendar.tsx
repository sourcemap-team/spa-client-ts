import React, { FC } from 'react';
import { PageHeader } from 'antd';
import { useNavigate } from 'react-router-dom';
import CalendarComponent from '@modules/calendar';

const CalendarPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader title="Calendar" onBack={() => navigate(-1)} />
      <CalendarComponent />
    </div>
  );
};

export default CalendarPage;
