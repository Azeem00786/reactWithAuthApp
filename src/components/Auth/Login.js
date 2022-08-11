import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../Store/auth-context";
import classes from './AuthForm.module.css';
const Login = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const redirectAfterLogin = useHistory()
  const createCtx = useContext(AuthContext);

  const formSubmithandler = (event) => {
    event.preventDefault();
    const inputEmailValue = inputEmail.current.value;
    const inputPasswordValue = inputPassword.current.value;

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnZD-xTIeCoc79We_1Ex582k7MuodFI_I`
    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: inputEmailValue,
          password: inputPasswordValue,
          returnSecureToken: true
        }),
        headers: {

          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (!response.ok) {
          throw new Error("not ok");
        }
        return response.json()
      })

      .then(json => {
        alert('you are logged in')


        createCtx.login(json)
        redirectAfterLogin.replace('/todo')
        if (json.ok) {
          alert('hii')
          return json.json();
        }
      }).catch((error) => {
        alert(error.message)

      })
  }
  return (
    <section className={classes.auth}>
      this is a signup page
      <form onSubmit={formSubmithandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={inputEmail} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={inputPassword} />
        </div>
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}

            onClick={formSubmithandler}
          >
            Login
            {/* {isLogin ? 'Create new account' : 'Login with existing account'} */}
          </button>
        </div>
      </form>
    </section>
  )
}
export default Login;