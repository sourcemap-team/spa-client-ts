import React, { FC } from 'react';
import { PageHeader } from 'antd';
import { useNavigate } from 'react-router-dom';

const ChartsPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader title="Charts" onBack={() => navigate(-1)} />
    </div>
  );
};

export default ChartsPage;
