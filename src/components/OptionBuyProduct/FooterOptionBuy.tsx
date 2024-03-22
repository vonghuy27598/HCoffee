/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AppText from '@components/Custom/AppText';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants';
import {Helper} from '@common/index';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';
import {useDispatch, useSelector} from 'react-redux';
import {setCart, updateCartAction} from '@redux/action/cartAction';
import {IStoreOptionBuyProductType} from '@type/cartType';
import {IProductType} from '@type/productType';
import {ISelectToppingType} from '@type/toppingType';
import {RootState} from '@redux/store';

const FooterOptionBuy = ({
  showBottomSheet,
  chooseProduct,
  addSelectProduct,
  setAddSelectProduct,
  setShowBottomSheet,
  updateItem,
}: {
  showBottomSheet?: boolean;
  chooseProduct: IProductType | undefined;
  addSelectProduct: IStoreOptionBuyProductType;
  setAddSelectProduct: React.Dispatch<
    React.SetStateAction<IStoreOptionBuyProductType>
  >;
  setShowBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  updateItem: boolean;
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const dispatch = useDispatch<any>();
  const addToCart = () => {
    dispatch(setCart(addSelectProduct));
    setShowBottomSheet(false);
  };
  const updateCart = () => {
    // console.log('UPDATE CART', addSelectProduct);

    dispatch(updateCartAction(addSelectProduct));
    setShowBottomSheet(false);
  };
  // useEffect(() => {
  //   setTotalPrice(
  //     Helper.getPriceSize(
  //       Helper.getFirstSize(
  //         chooseProduct?.smallPrice ?? 0,
  //         chooseProduct?.mediumPrice ?? 0,
  //       ),
  //       chooseProduct,
  //     ),
  //   );
  // }, [chooseProduct]);
  // useEffect(() => {
  //   if (updateItem) {
  //     console.log('updateItem', addSelectProduct);
  //     setAddSelectProduct(addSelectProduct);
  //   }
  // }, [addSelectProduct]);
  // useEffect(() => {
  //   if (!Helper.isNullOrUndefined(chooseProduct)) {
  //     if (!updateItem) {
  //       setTotalPrice(
  //         Helper.getPriceSize(addSelectProduct.size, chooseProduct),
  //       );
  //     }
  //   }
  // }, [chooseProduct]);
  useEffect(() => {
    if (showBottomSheet) {
      if (updateItem) {
        setTotalPrice(addSelectProduct.totalPrice);
        setQuantity(addSelectProduct.quantity);
      } else {
        setQuantity(1);
        setTotalPrice(
          Helper.getPriceSize(
            Helper.getFirstSize(
              chooseProduct?.smallPrice ?? 0,
              chooseProduct?.mediumPrice ?? 0,
            ),
            chooseProduct,
          ),
        );
      }
    }
  }, [showBottomSheet]);
  useEffect(() => {
    setAddSelectProduct(oldValue => ({
      ...oldValue,
      productId: chooseProduct?.productId ?? 0,
      productName: chooseProduct?.productName ?? '',
      iD_Cate: chooseProduct?.iD_Cate ?? 0,
      quantity: quantity,
      totalPrice:
        (Helper.getPriceSize(oldValue.size, chooseProduct) +
          Helper.getPriceCheckTopping(oldValue.listTopping)) *
        quantity,
    }));
    setTotalPrice(
      (Helper.getPriceSize(addSelectProduct.size, chooseProduct) +
        Helper.getPriceCheckTopping(addSelectProduct.listTopping)) *
        quantity,
    );
  }, [quantity, addSelectProduct.totalPrice]);
  return (
    <View style={styles.containerFooter}>
      <View style={styles.viewQuantity}>
        <TouchableOpacity
          style={styles.btnQuantỉty}
          onPress={() => setQuantity(oldValue => oldValue + 1)}>
          <Icon name="plus" size={20} color={COLORS.PRIMARY_COLOR} />
        </TouchableOpacity>
        <AppText text={quantity?.toString()} />
        <TouchableOpacity
          style={styles.btnQuantỉty}
          onPress={() => setQuantity(oldValue => oldValue - 1)}
          disabled={quantity === 1 ? true : false}>
          <Icon name="minus" size={20} color={COLORS.PRIMARY_COLOR} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewBtnBuy}>
        <TouchableOpacity
          style={styles.btnBuy}
          onPress={() => {
            updateItem ? updateCart() : addToCart();
            // animatedHideOrShow('hide');
          }}>
          <AppText
            text={`${updateItem ? 'Thay đổi' : 'Chọn'} ${Helper.formatPrice(
              totalPrice,
            )}`}
            textFont="bold"
            textColor={COLORS.WHITE_COLOR}
            textSize={16}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterOptionBuy;
