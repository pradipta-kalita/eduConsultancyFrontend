// src/utils/axiosInstance.ts
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { UserTokenPayload } from '../auth/authTypes';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const createAxiosInstance = (token: string | null) => {


    // Request interceptor
    axiosInstance.interceptors.request.use(
        (config) => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Response interceptor
    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            // Handle token expiration
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    // Implement token refresh logic
                    const refreshToken = localStorage.getItem('refreshToken');
                    const response = await axios.post('/api/refresh-token', { refreshToken });

                    const { accessToken } = response.data;
                    localStorage.setItem('authToken', accessToken);

                    // Update request with new token
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    return axiosInstance(originalRequest);
                } catch (refreshError) {
                    // Logout user if refresh fails
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('refreshToken');
                    window.location.href = '/login';
                    return Promise.reject(refreshError);
                }
            }

            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export const getValidatedToken = (): string | null => {
    const token = localStorage.getItem('authToken');
    if (token) {
        try {
            const decoded = jwtDecode<UserTokenPayload>(token);
            // Check token expiration
            return decoded.exp * 1000 > Date.now() ? token : null;
        } catch {
            return null;
        }
    }
    return null;
};