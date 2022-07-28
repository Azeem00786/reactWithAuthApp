import { useState,useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../Store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
const inputEmail = useRef();
const inputPassword = useRef();
 const createCtx = useContext(AuthContext);
 const redirectAfterLogin = useHistory();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
const formSubmithandler = (event)=>{
event.preventDefault();
const inputEmailValue = inputEmail.current.value;
const inputPasswordValue = inputPassword.current.value;
setIsLoading(true);
let url;
if(isLogin){
  
url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`
}else{
  url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`
}
  fetch(url,
  {
    method:'POST',
    body:JSON.stringify({
      email:inputEmailValue,
      password:inputPasswordValue,
      returnSecureToken:true
    }),
    headers: {
      
      'Content-Type': 'application/json'
    }
  }).then((res=>{
   
    setIsLoading(false);
    if(res.ok){
      return res.json();
    }else{
      return res.json().then((data)=>{
        let errorMessage = 'authentiction failed';
        // if(data.error.message){
        //   errorMessage = data.error.message;
        // }
        // alert(errorMessage);
        
        throw new Error (errorMessage);
      })
    }
  })).then((data)=>{

    alert('you are loggedin')
    createCtx.login(data.idToken);
  redirectAfterLogin.replace('/');

  }).catch((err) => {
    alert(err.message);
  });

}
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={formSubmithandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={inputEmail}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={inputPassword}/>
        </div>
        <div className={classes.actions}>
          {!isLoading ? <button>{isLogin ? 'Login' : 'Create Account'}</button> : <p>Please wait...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
