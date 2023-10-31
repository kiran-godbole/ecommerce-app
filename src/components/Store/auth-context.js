import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [tokenExpireTime, setTokenExpireTime] = useState(null);

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('token', token);
        const now = new Date();
        const fiveMinutesFromNow = new Date(now.getTime() + 5 * 60 * 1000); // 5 minutes from now
        setTokenExpireTime(fiveMinutesFromNow);
    };

    const logoutHandler = () => {
        setToken(null);
        setTokenExpireTime(null);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const checkTokenExpiration = () => {
            if (tokenExpireTime && new Date() >= tokenExpireTime) {
                logoutHandler();
            }
        };

        const tokenExpirationTimer = setInterval(checkTokenExpiration, 1000); // Check every second

        return () => {
            clearInterval(tokenExpirationTimer);
        };
    }, [tokenExpireTime]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };


    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;