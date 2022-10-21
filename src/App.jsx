import { Route, Routes } from 'react-router-dom';

import IndexPage from './pages/index/index.jsx';
import DashboardPage from './pages/dashboard/dashboard.jsx';
import ProfilePage from './pages/profile/profile.jsx';
import SettingsPage from './pages/settings/settings.jsx';

import LoginPage from './pages/login/login.jsx';
import RegisterPage from './pages/register/register.jsx';

import { ProtectedLayout } from './components/Layout/Protected/ProtectedLayout.jsx';
import { UnauthorizedLayout } from './components/Layout/Unauthorized/UnauthorizedLayout.jsx';

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
