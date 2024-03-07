import React, {createContext, useContext, useRef} from 'react';
import {IOrderProviderType} from './typeOrderProvider';
import {ScrollView} from 'react-native';

const OrderContext = createContext({});

const OrderProvider = ({children}: {children: React.ReactNode}) => {
  const scrollOrderRef = useRef<ScrollView>(null);
  const data = {
    scrollOrderRef,
  } as IOrderProviderType;

  return <OrderContext.Provider value={data}>{children}</OrderContext.Provider>;
};
const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('Order context error');
  }
  return context as IOrderProviderType;
};

export {OrderProvider, useOrder};
