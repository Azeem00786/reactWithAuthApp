import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import AuthContext from '../Store/auth-context';
import { useHistory } from 'react-router-dom';
const ProfileForm = () => {
  const createCtx = useContext(AuthContext);
  const changePasswordRef = useRef();
  const redirectAfterPassUpdate = useHistory();
  const updatePasswordHandler = (event) =>{
event.preventDefault();
const newPasswordValue = changePasswordRef.current.value;
console.log(newPasswordValue);
fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAnZD-xTIeCoc79We_1Ex582k7MuodFI_I',
{
  method:'POST',
body:JSON.stringify({
  idToken:createCtx.token,
  password:newPasswordValue,
  returnSecureToken	:false
}),
headers:{
  'Content-Type': 'application/json'
}
}
).then(res=>{
  redirectAfterPassUpdate.replace('/')
// return res.json();
})
  }
  return (
    <form className={classes.form} onSubmit={updatePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'ref={changePasswordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
