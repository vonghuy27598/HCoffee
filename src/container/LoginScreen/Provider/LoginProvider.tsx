import React, {createContext, useContext} from 'react';
import {IDataLoginProvider} from './typeLoginProvider';

const LoginContext = createContext({});

const LoginProvider = ({children}: {children: React.ReactNode}) => {
  const data = {} as IDataLoginProvider;

  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('Login context error');
  }

  return context as IDataLoginProvider;
};

export {LoginProvider, useLogin};
