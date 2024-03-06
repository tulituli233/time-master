import { request } from '@/utils/request.ts';

interface User {
    id: number;
    name: string;
    email: string;
}

export const login = (credentials: { Username: string, Password: string }): Promise<User> => {
    return request({
        url: `users/login`,
        method: 'POST',
        data: credentials
    });
};

export const register = (userData: { name: string, email: string, password: string }): Promise<User> => {
    return request({
        url: `users/register`,
        method: 'POST',
        data: userData
    });
};

