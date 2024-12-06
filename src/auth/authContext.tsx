// src/auth/authContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import { AxiosInstance } from 'axios';
import { jwtDecode } from 'jwt-decode';
import {
    UserTokenPayload,
    LoginCredentials,
    UserRole
} from './authTypes';
import { createAxiosInstance, getValidatedToken } from '../utils/axiosInstance';

interface AuthContextType {
    user: UserTokenPayload | null;
    isAuthenticated: boolean;
    axiosInstance: AxiosInstance;  // Changed from 'any' to AxiosInstance
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => void;
    hasPermission: (requiredRole: UserRole) => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserTokenPayload | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Directly initialize with createAxiosInstance(null)
    const [axiosInstance, setAxiosInstance] = useState<AxiosInstance>(() =>
        createAxiosInstance(null)
    );

    // Check authentication on mount
    useEffect(() => {
        const token = getValidatedToken();
        if (token) {
            const decoded = jwtDecode<UserTokenPayload>(token);
            setUser(decoded);
            setIsAuthenticated(true);
            setAxiosInstance(createAxiosInstance(token));
        }
    }, []);

    const login = async (credentials: LoginCredentials) => {
        try {
            const response = await axiosInstance.post<{
                accessToken: string;
                username:string;
                role:string
            }>('/auth/login', credentials);

            const { accessToken } = response.data;
            const decoded = jwtDecode<UserTokenPayload>(accessToken);

            // Store tokens
            localStorage.setItem('authToken', accessToken);
            localStorage.setItem('user', JSON.stringify({
                data: response.data.username,
                role: response.data.role
            }));

            // Update state
            setUser(decoded);
            setIsAuthenticated(true);
            setAxiosInstance(createAxiosInstance(accessToken));
        } catch (error) {
            console.error('Login failed', error);
            throw error;
        }
    };

    const logout = () => {
        // Clear tokens
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');

        // Reset state
        setUser(null);
        setIsAuthenticated(false);
        setAxiosInstance(createAxiosInstance(null));
    };

    const hasPermission = (requiredRole: UserRole): boolean => {
        if (!user) return false;

        const roleHierarchy = {
            [UserRole.ADMIN]: [UserRole.ADMIN, UserRole.PARENT, UserRole.STUDENT],
            [UserRole.PARENT]: [UserRole.PARENT, UserRole.STUDENT],
            [UserRole.STUDENT]: [UserRole.STUDENT]
        };

        return roleHierarchy[requiredRole].includes(user.role);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                axiosInstance,
                login,
                logout,
                hasPermission
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};