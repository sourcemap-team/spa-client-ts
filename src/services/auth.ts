import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RegistrationRequestData, LoginData } from '@custom-types/index';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://backend-kotlin-template.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchMe: builder.query({
      query: () => `/users/me`,
    }),
    loginUser: builder.mutation({
      query: (loginData: LoginData) => ({
        url: '/login',
        method: 'POST',
        body: loginData,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    registerUser: builder.mutation({
      query: (registrationData: RegistrationRequestData) => ({
        url: '/register',
        method: 'POST',
        body: registrationData,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
