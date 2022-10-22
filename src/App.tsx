import React from 'react';
import { Route, Routes } from 'react-router-dom';

import IndexPage from '@pages/index/index';
import DashboardPage from '@pages/dashboard/dashboard';
import ProfilePage from '@pages/profile/profile';
import SettingsPage from '@pages/settings/settings';

import LoginPage from '@pages/login/login';
import RegisterPage from '@pages/register/register';

import { ProtectedLayout } from '@components/Layout/Protected/ProtectedLayout';
import { UnauthorizedLayout } from '@components/Layout/Unauthorized/UnauthorizedLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route element={<UnauthorizedLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
