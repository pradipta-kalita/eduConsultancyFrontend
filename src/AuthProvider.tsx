import React, { createContext, useState } from 'react';
import axios from "axios";
import axiosInstance from "@/utils/axiosInstance.ts";

interface AuthContextType {
    user: { username: string; role: string } | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{ username: string; role: string } | null>(null);

    const login = async (email: string, password: string) => {
        try {
            const response = await axiosInstance.post('/auth/login', {
                email,
                password,
            });
            const { role, username } = response.data;
            setUser({ username, role });
            if(user?.role=='ADMIN'){
                window.location.href = '/admin'
            }else {
                window.location.href = '/profile';
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data || error.message);
            } else {
                console.error('Unexpected error:', error);
            }
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        setUser(null);
        // TODO : Handle cookie clearing on logout if needed
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

