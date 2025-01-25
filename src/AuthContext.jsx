import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUser] = useState(null); // Corrected: Fixed the setter name

    const login = (email) => {
        setIsAuthenticated(true);
        setUser(email); // Corrected: Fixed the setter name
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null); // Corrected: Fixed the setter name
        localStorage.removeItem('Email'); // Clear user data if needed
        localStorage.removeItem('PWD'); // Clear user data if needed
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};