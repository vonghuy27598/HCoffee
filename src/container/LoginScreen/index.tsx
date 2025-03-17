import React from 'react';
import {LoginProvider} from './Provider/LoginProvider';
import ContainerLogin from './Components/ContainerLogin';

const LoginScreen = () => {
  return (
    <LoginProvider>
      <ContainerLogin />
    </LoginProvider>
  );
};

export default LoginScreen;
