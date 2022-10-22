import React, { FC } from 'react';

import { useGetUserByNameQuery } from '@services/auth';

const ProfilePage: FC = () => {
  useGetUserByNameQuery('bulbasaur');

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default ProfilePage;
