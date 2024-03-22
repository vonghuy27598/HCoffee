import React, {useEffect, useState} from 'react';
import AppDraggaleBottomSheet from '@components/Custom/AppDraggaleBottomSheet';
import {
  BodyOptionBuy,
  FooterOptionBuy,
  HeaderOptionBuy,
} from '@components/OptionBuyProduct';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';
import {IProductType} from '@type/productType';
import {Helper} from '@common/index';
import {IStoreOptionBuyProductType} from '@type/cartType';

const ShowBottomSheet = () => {
  // const [selectProduct, setSelectProduct] = useState<IProductType>();

  const {showBottomSheet, setShowBottomSheet, chooseProduct} =
    useLineCateProduct();
  const [addSelectProduct, setAddSelectProduct] =
    useState<IStoreOptionBuyProductType>({
      productId: 0,
      productName: '',
      size: '',
      totalPrice: 0,
      listTopping: [],
      quantity: 1,
      iD_Cate: 0,
      note: '',
    });
  useEffect(() => {
    console.log('addSelectProduct', addSelectProduct);
  }, [addSelectProduct]);

  return (
    <AppDraggaleBottomSheet
      showBottomSheet={showBottomSheet}
      setShowBottomSheet={setShowBottomSheet}
      HeaderBottomSheetComponent={HeaderOptionBuy(
        chooseProduct?.productName ?? '',
      )}
      BodyBottomSheetComponent={BodyOptionBuy({
        showBottomSheet,
        chooseProduct,
        addSelectProduct,
        setAddSelectProduct,
        updateItem: false,
      })}
      FooterBottoomSheetComponent={FooterOptionBuy({
        showBottomSheet,
        chooseProduct,
        addSelectProduct,
        setAddSelectProduct,
        setShowBottomSheet,
        updateItem: false,
      })}
    />
  );
};

export default ShowBottomSheet;
