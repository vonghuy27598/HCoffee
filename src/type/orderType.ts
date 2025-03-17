export interface IListOrder {
  listOrder: IOrder[];
}

export interface IOrder {
  orderId: number;
  orderDate: string;
  phoneNumber: string;
  address: string;
  deviceId: string;
  noteOrder: string;
  statusCodeOrder: number;
  totalPriceOrder: number;
  totalQuantityOrder: number;
  totalPriceShip: number;
  listProductChooses: IListProductChoose[];
}

export interface IListProductChoose {
  idChoose: number;
  productId: number;
  productName: string;
  categoryId: number;
  listToppingId: number[];
  size: string;
  quantity: number;
  totalPrice: number;
  noteProduct: string;
}
