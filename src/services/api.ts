'use client';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_DB_BASEURL
// Create an Axios instance with default headers
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: baseUrl,
  // timeout: 10000,
  // mode: 'cors',
});

// Add a request interceptor to set the authorization header on every request
// api.interceptors.request.use(
//   async function (config) {
//     const token = await getToken();

//     if (token) {
//       config.headers.Token = `${token}`;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);
export default api;
