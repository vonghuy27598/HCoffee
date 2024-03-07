import React, {createContext, useContext} from 'react';
import {IAppRootProviderType} from './typeAppRootProvider';

const AppContext = createContext({});

const AppProvider = ({children}: {children: React.ReactNode}) => {
  const dataProvider = {} as IAppRootProviderType;

  return (
    <AppContext.Provider value={dataProvider}>{children}</AppContext.Provider>
  );
};

const useAppRoot = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('App Root context error');
  }

  return context as IAppRootProviderType;
};

export {AppProvider, useAppRoot};
