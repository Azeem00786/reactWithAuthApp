import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (json) => { },
    logout: () => { },
    response: {}

})

export const AuthContextProvider = (props) => {

    const getToken = localStorage.getItem('firebaseToken')
    const [token, setToken] = useState(getToken)
    const [response, setResponse] = useState('')
    const afterLogout = useHistory();

    // this return truthy or falsy value
    const userIsLogedIn = !!token;

    const logoutHandler = () => {

        localStorage.removeItem('firebaseToken')
        setToken(null);

        afterLogout.replace('/')

    }
    const loginHandler = (json) => {

        setToken(json.idToken);
        setResponse(json);


        localStorage.setItem('firebaseToken', JSON.stringify(json));

    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLogedIn,
        login: loginHandler,
        logout: logoutHandler,
        response: response
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;

