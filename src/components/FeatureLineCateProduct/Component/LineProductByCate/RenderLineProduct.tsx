import {IProductType} from '@type/productType';
import React, {useEffect} from 'react';
import Product from '@components/Products';

interface IProps {
  _index: number;
  _item: IProductType;
}

const RenderLineProduct = ({_index, _item}: IProps) => {
  return <Product product={_item} key={`product-${_index}`} />;
};

export default RenderLineProduct;
