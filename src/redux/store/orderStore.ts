import {IListOrder, IOrder} from '@type/orderType';

export const orderStore: IOrder = {
  orderId: 0,
  orderDate: '',
  phoneNumber: '',
  address: '',
  deviceId: '',
  noteOrder: '',
  statusCodeOrder: 0,
  totalPriceOrder: 0,
  totalQuantityOrder: 0,
  totalPriceShip: 0,
  listProductChooses: [],
};

export const listOrderStore: IListOrder = {
  listOrder: [],
};
