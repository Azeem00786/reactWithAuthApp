import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const createCtx = useContext(AuthContext);
  // const redirectAfterLogout = useHistory();
  const userLogoutHandler = () => {
    alert('logout')
    createCtx.logout();
    // redirectAfterLogout.replace('/')
  }
  return (
    <header className={classes.header}>

      <Link to='/todo'>
        <div className={classes.logo}>React Authentication</div>
      </Link>
      <nav>
        <ul>
        {!createCtx.isLoggedIn &&(<li>
           
            <Link to='/'>login</Link>
          </li>)}

          {!createCtx.isLoggedIn &&(<li>
            {/* <Link to='/auth'>Login</Link> */}
            <Link to='/Signup'>Signup</Link>
          </li>)}
          {createCtx.isLoggedIn &&(<li>
            <Link to='/todo'>TodoApp</Link>
          </li>)}

          {createCtx.isLoggedIn && (<li>
            <Link to='/profile'>Profile</Link>
          </li>)}

          {createCtx.isLoggedIn && (<li>
            <button onClick={userLogoutHandler}>Logout</button>
          </li>)}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
