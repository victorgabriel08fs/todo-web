import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    

    // const verifyToken = useCallback(async ({ token }: { token: string }) => {

    //     const response = await api.post('/auth/verify-token', {
    //         token
    //     });

    //     const status = await response.data.status;
    //     return true;
    // }, []);

    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');

        if (storagedToken && storagedUser) {
            setUser(JSON.parse(storagedUser));
            api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`;

        }
    }, []);

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
            {children}
        </AuthContext.Provider >
    );


    async function Login({ email, password }) {
        const response = await api.post('/auth/login', {
            email,
            password,
        });

        setUser(response.data.user);
        // api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        api.defaults.headers.common['Authorization'] = `Bearer `;

        localStorage.setItem('@App:user', JSON.stringify(response.data.user));
        localStorage.setItem('@App:token', "response.data.token");

    }

    async function Logout() {
        setUser(null);
        api.defaults.headers.common['Authorization'] = ``;
        localStorage.setItem('@App:user', "");
        localStorage.setItem('@App:token', "");
    }
};


export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}


export default AuthContext;