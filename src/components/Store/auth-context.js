import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }

})

export const AuthContextProvider = (props) => {

    const getToken = localStorage.getItem('firebaseToken')
    const [token, setToken] = useState(getToken)
    const afterLogout = useHistory();
    // this return truthy or falsy value
    const userIsLogedIn = !!token;

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('firebaseToken')
        afterLogout.push('/login')
    }
    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('firebaseToken', token);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLogedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;

