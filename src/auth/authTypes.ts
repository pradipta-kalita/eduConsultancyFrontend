// src/auth/authTypes.ts
export enum UserRole {
    ADMIN = 'ADMIN',
    PARENT = 'PARENT',
    STUDENT = 'STUDENT'
}

export interface UserTokenPayload {
    id: string;
    email: string;
    role: UserRole;
    exp: number;
}

export interface LoginCredentials {
    email: string;
    password: string;
}