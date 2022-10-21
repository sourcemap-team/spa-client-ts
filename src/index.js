import 'antd/dist/antd.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
} from 'react-router-dom';

import AuthPage from './pages/auth/auth.jsx';
import IndexPage from './pages/index/index.jsx';

// import AuthLayout from "./components/Layout/Auth/AuthLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<IndexPage />}>
      <Route path="auth" element={<AuthPage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
