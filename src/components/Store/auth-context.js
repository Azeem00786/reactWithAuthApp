import React, { useState } from "react";
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }

})
export const AuthContextProvider = (props) =>{
    const getToken = localStorage.getItem('firebaseToken')
const[token, setToken] = useState(getToken)
// this return truthy or falsy value
const userIsLogedIn = !! token;
const loginHandler = (token) =>{
setToken(token);
localStorage.setItem('firebaseToken', token);
}
const logoutHandler = () =>{
    setToken(null);
    localStorage.removeItem('firebaseToken')
}
const contextValue = {
    token:token,
    isLoggedIn:userIsLogedIn,
    login:loginHandler,
    logout:logoutHandler
}
return(
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
)
}
export default AuthContext;

