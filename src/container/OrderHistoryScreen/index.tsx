import {View} from 'react-native';
import React from 'react';
import EmptyHeader from '@components/Header/EmptyHeader/EmptyHeader';
import ContainerHistory from './Components/ContainerHistory';

const OrderHistoryScreen = () => {
  return (
    <View>
      <EmptyHeader headerName={'Lịch sử đơn hàng'} />
      <ContainerHistory />
    </View>
  );
};

export default OrderHistoryScreen;
