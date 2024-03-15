import React from 'react';
import AppDraggaleBottomSheet from '@components/Custom/AppDraggaleBottomSheet';
import {
  BodyOptionBuy,
  FooterOptionBuy,
  HeaderOptionBuy,
} from '@components/OptionBuyProduct';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';

const ShowBottomSheet = () => {
  const {showBottomSheet, setShowBottomSheet} = useLineCateProduct();
  return (
    <AppDraggaleBottomSheet
      showBottomSheet={showBottomSheet}
      setShowBottomSheet={setShowBottomSheet}
      HeaderBottomSheetComponent={HeaderOptionBuy()}
      BodyBottomSheetComponent={BodyOptionBuy()}
      FooterBottoomSheetComponent={FooterOptionBuy()}
    />
  );
};

export default ShowBottomSheet;
