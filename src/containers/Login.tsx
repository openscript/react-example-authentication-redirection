import React from 'react'
import { useSessionContext } from '../contexts/SessionContext'
import { useHistory } from 'react-router';

export const Login: React.FC = () => {
  const [sessionContext, updateSessionContext] = useSessionContext();
  const currentHistory = useHistory();

  const handleClick = () => {
    updateSessionContext({...sessionContext, isAuthenticated: true});
    currentHistory.push('/');
  }

  return <button onClick={handleClick}>Login</button>
}