import React, { FC } from 'react';

import { PageHeader } from 'antd';
import { useNavigate } from 'react-router-dom';

import ProfileForm from '@modules/profile/Form';

const ProfilePage: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader
        title="Profile info"
        subTitle="Name Surname"
        onBack={() => navigate(-1)}
      />
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
