import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MainTodo from './components/MainTodo';
import UserProfile from './components/Profile/UserProfile';
import AuthContext from './components/Store/auth-context';

// import AuthPage from './pages/AuthPage';
// import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


function App() {

  const createCtx = useContext(AuthContext);
  return (
    <Layout>


      <Switch>
        {createCtx.isLoggedIn && (<Route path='/todo'>
          <MainTodo />
        </Route>)}
        <Route path='/' exact>
          <LoginPage />
        </Route>
        {!createCtx.isLoggedIn && (<Route path='/Signup'>
          <SignupPage />
        </Route>)}       
        <Route path='/profile'>
          <UserProfile />
          {/* <Redirect to='/auth'/> */}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
