import { createContext, useContext, useState } from 'react';
import { initialSession, Session } from '../models/session';
import React from 'react';


export const SessionContext = createContext<[Session, (session: Session) => void]>([initialSession, (session: Session) => {}]);
export const useSessionContext = () => useContext(SessionContext);


export const SessionContextProvider: React.FC = (props) => {
  const [sessionState, setSessionState] = useState(initialSession);
  const defaultSessionContext: [Session, typeof setSessionState]  = [sessionState, setSessionState];

  return (
    <SessionContext.Provider value={defaultSessionContext}>
      {props.children}
    </SessionContext.Provider>
  );
}