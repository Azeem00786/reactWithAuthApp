import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthContext from './components/Store/auth-context';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const createCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!createCtx.isLoggedIn && <Route path='/auth'>
          <AuthPage />
        </Route>}
        <Route path='/profile'>
          {createCtx.isLoggedIn && <UserProfile />}
          {!createCtx.isLoggedIn && <Redirect to='/auth'/>}
        </Route>
        <Route path='*'>
<Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
