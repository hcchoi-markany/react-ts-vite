import axios from 'axios';
import { parseResponseData } from './interceptors';

// Create a base Axios instance
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
});

// Custom request interceptor
instance.interceptors.request.use(
  async (config) => {
    // Add custom request headers
    const token = await localStorage.getItem('access_token'); // Get the token from storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Add custom action here, for example, show a loading spinner
    // ...

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

// Custom response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the request is invalid and perform refresh token logic
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Perform refresh token logic here
      // ...

      return instance(originalRequest);
    }

    // Custom error response
    // ...

    return Promise.reject(error);
  },
);

export default instance;
