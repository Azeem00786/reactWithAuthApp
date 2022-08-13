import classes from './AuthForm.module.css';
import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../Store/auth-context';
const Signup = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const redirectToHome = useHistory();
  const createCtx = useContext(AuthContext);
  const formSubmithandler = (event) => {

    event.preventDefault();
    const inputEmailValue = inputEmail.current.value;
    const inputPasswordValue = inputPassword.current.value;
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnZD-xTIeCoc79We_1Ex582k7MuodFI_I`
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
          throw new Error('error');

        }
        return response.json()

      }
      ).then((json => {
        createCtx.login(json)
        redirectToHome.replace('/todo');

      })).catch((error) => {
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
            Signup
            {/* {isLogin ? 'Create new account' : 'Login with existing account'} */}
          </button>
        </div>
      </form>
    </section>
  )
}
export default Signup;