import {useMutation} from '@apollo/client';
import {IProductType} from '@type/productType';
import React, {createContext, useContext, useEffect} from 'react';
import {getAllProduct} from './services/serviceOrder';
import {Helper} from '@common/index';

const OrderContext = createContext({});

interface IData {
  dataProducts: IProductType[];
  loadingProducts: boolean;
}

const OrderProvider = ({children}: {children: React.ReactNode}) => {
  const [getAllProducts, {data: dataProducts, loading: loadingProducts}] =
    useMutation<typeof getAllProduct.response>(getAllProduct.query);
  useEffect(() => {
    getAllProducts({
      onError(error) {
        console.log('get products Failed', error);
      },
    });
  }, []);
  const data = {
    dataProducts: dataProducts?.[getAllProduct.key] || [],
    loadingProducts,
  } as IData;

  return <OrderContext.Provider value={data}>{children}</OrderContext.Provider>;
};
const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a OrderContext');
  }
  return context as IData;
};

export {OrderProvider, useOrder};
