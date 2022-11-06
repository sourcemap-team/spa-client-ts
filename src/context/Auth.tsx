import React, { FC, ReactNode } from 'react';
import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { useLoginUserMutation, useRegisterUserMutation } from '@services/auth';
import { LoginData, RegistrationRequestData } from '@custom-types/index';

export const AuthContext = createContext(null);

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [registerUser, registerResponse] = useRegisterUserMutation();
  const [loginUser, loginResponse] = useLoginUserMutation();

  const login = async (userData: LoginData) => {
    const response = await loginUser(userData);

    if (response) {
      const { data, error } = response as { data: any; error: any };

      if (data) {
        const { accessToken, refreshToken } = data;
        localStorage.setItem('token', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        message.success('User was successfully signed in');
        navigate('/');
        return;
      }

      if (error) {
        message.error(error.data.message);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  };

  const register = async (registerData: RegistrationRequestData) => {
    const response = await registerUser(registerData);

    if (response) {
      const { data, error } = response as { data: any; error: any };

      if (data) {
        const { accessToken, refreshToken } = data;
        localStorage.setItem('token', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        message.success('User was successfully signed up');
        navigate('/');
        return;
      }

      if (error) {
        message.error(error.data.message);
      }
    }
  };

  const fetchCurrentUser = () => {
  };

  const value = useMemo(
    () => ({
      registerResponse: registerResponse,
      loginResponse: loginResponse,
      login,
      logout,
      register,
      fetchCurrentUser,
    }),
    [registerResponse, loginResponse]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
