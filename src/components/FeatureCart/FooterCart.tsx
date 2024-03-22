import {View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import AppText from '@components/Custom/AppText';
import {COLORS} from '../../constants';
import {IStoreOptionBuyProductType} from '@type/cartType';
import {Helper} from '@common/index';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';

const FooterCart = (
  showBottomSheetCart: boolean,
  setShowBottomSheetCart: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const [listProduct, setListProduct] = useState<IStoreOptionBuyProductType[]>(
    [],
  );
  const listProductCart = useSelector(
    (state: RootState) => state.setCartReducer.listProduct,
  );
  useEffect(() => {
    if (
      !Helper.isNullOrUndefined(listProductCart) &&
      listProductCart.length > 0
    ) {
      setListProduct(listProductCart);
    } else {
      setListProduct([]);
    }
  }, [listProductCart.length, showBottomSheetCart]);
  const totalPriceBeforeShip = () => {
    let total = 0;
    listProduct.map(x => (total += x.totalPrice));
    return total;
  };
  const quantityProduct = () => {
    let total = 0;
    listProduct.map(x => (total += x.quantity));
    return total;
  };
  return (
    <View style={[styles.flexDirection, styles.footerContainer]}>
      <View>
        <AppText
          text={`Giao hàng: ${quantityProduct()} sản phẩm`}
          textColor={COLORS.WHITE_COLOR}
          style={styles.txtItem}
        />
        <AppText
          text={Helper.formatPrice(totalPriceBeforeShip() + 18000)}
          textFont="bold"
          textColor={COLORS.WHITE_COLOR}
          style={styles.txtItem}
        />
      </View>
      <TouchableOpacity style={styles.btnBuy}>
        <AppText
          text="Đặt hàng"
          textColor={COLORS.PRIMARY_COLOR}
          style={styles.txtItem}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FooterCart;
