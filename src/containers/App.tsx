import React from 'react';
import { Switch, Route } from 'react-router';
import ProtectedRoute, { ProtectedRouteProps } from '../components/ProtectedRoute';
import { useSessionContext } from '../contexts/SessionContext';
import { Login } from './Login';
import { ProtectedPage } from './ProtectedPage';
import { AnotherSecretPage } from './AnotherSecretPage';
import { StartPage } from './StartPage';

const App: React.FC = () => {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPathOnAuthentication = (path: string) => {
    updateSessionContext({...sessionContext, redirectPathOnAuthentication: path});
  }

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    isAllowed: true,
    authenticationPath: '/login',
    restrictedPath: '/',
    redirectPathOnAuthentication: sessionContext.redirectPathOnAuthentication || '',
    setRedirectPathOnAuthentication
  };

  return (
    <div>
      <Switch>
        <ProtectedRoute {...defaultProtectedRouteProps} exact={true} path='/' component={StartPage} />
        <ProtectedRoute {...defaultProtectedRouteProps} path='/protected' component={ProtectedPage} />
        <ProtectedRoute {...defaultProtectedRouteProps} path='/another' component={AnotherSecretPage} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
