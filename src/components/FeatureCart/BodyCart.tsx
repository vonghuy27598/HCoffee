/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  View,
  TouchableOpacity,
  TextInput,
  ListRenderItemInfo,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {styles} from './styles';
import AppText from '@components/Custom/AppText';
import {COLORS} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {Helper} from '@common/index';
import AppDraggaleBottomSheet from '@components/Custom/AppDraggaleBottomSheet';
import {
  BodyOptionBuy,
  FooterOptionBuy,
  HeaderOptionBuy,
} from '@components/OptionBuyProduct';
import {SwipeListView} from 'react-native-swipe-list-view';
import {IStoreOptionBuyProductType} from '@type/cartType';
import {IProductType} from '@type/productType';
import {useApolloClient} from '@apollo/client';
import {getProductByCate} from '@graphQL/services/serviceLineProductByCate';
import {deleteProductCart} from '@redux/action/cartAction';
import {BodyPromotion, HeaderPromotion} from '@components/FeaturePromotion';

const BodyCart = (
  showBottomSheetCart: boolean,
  setShowBottomSheetCart: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const locationUser = useSelector(
    (state: RootState) => state.getLocationUserReducer.items,
  );
  const cart = useSelector((state: RootState) => state.setCartReducer);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [showBottomSheetPromotion, setShowBottomSheetPromotion] =
    useState(false);
  const [chooseProduct, setChooseProduct] = useState<IProductType>();
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
  const [selectIndex, setSelectIndex] = useState(0);
  const [listProduct, setListProduct] = useState<IStoreOptionBuyProductType[]>(
    [],
  );
  const dispatch = useDispatch<any>();
  const client = useApolloClient();
  useEffect(() => {
    if (
      !Helper.isNullOrUndefined(cart.listProduct) &&
      cart.listProduct.length > 0
    ) {
      setListProduct(cart.listProduct);
    } else {
      setListProduct([]);
    }
  }, [cart.listProduct.length, showBottomSheetCart]);
  const renderProduct = (
    data: ListRenderItemInfo<IStoreOptionBuyProductType>,
  ) => {
    return (
      <TouchableOpacity
        style={[[styles.flexDirection, styles.viewItem, styles.aboveRow]]}
        onPress={() => {
          updateItemProduct(data.index);
        }}
        key={`itemProduct-${data.index}`}
        activeOpacity={1}>
        <View style={styles.leftItem}>
          <AppText
            text={`${data.item.quantity} x ${data.item.productName}`}
            textFont="bold"
          />
          <AppText text={Helper.formatSize(data.item.size)} />
          {!Helper.isNullOrUndefined(data.item.listTopping) &&
            data.item.listTopping.length > 0 &&
            data.item.listTopping.map((val, index) => {
              return (
                <View key={`topping-${index}`}>
                  <AppText text={val.toppingName} />
                </View>
              );
            })}
        </View>

        <View style={styles.rightItem}>
          <AppText text={Helper.formatPrice(data.item.totalPrice)} />
        </View>
      </TouchableOpacity>
    );
  };
  const renderHandleProduct = (
    data: ListRenderItemInfo<IStoreOptionBuyProductType>,
    rowMap: any,
  ) => {
    return (
      <View key={`hidden-${data.index}`} style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.btnHidden, styles.btnUpdate]}
          onPress={() => {
            updateItemProduct(data.index);
          }}>
          <Icon name="pencil" size={20} color={COLORS.WHITE_COLOR} />
          <AppText text="Sửa" textFont="bold" textColor={COLORS.WHITE_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnHidden, styles.btnDelete]}
          onPress={() => deleteItemProduct(rowMap, data.index)}>
          <Icon name="trash-bin" size={20} color={COLORS.WHITE_COLOR} />
          <AppText text="Xóa" textFont="bold" textColor={COLORS.WHITE_COLOR} />
        </TouchableOpacity>
      </View>
    );
  };
  const updateItemProduct = (indexItem: number) => {
    const getProduct = client.readQuery<typeof getProductByCate.response>({
      query: getProductByCate.query,
    });
    setShowBottomSheet(true);
    setChooseProduct(
      getProduct?.getProductByCate
        .find(x => x.categoryId === listProduct[indexItem].iD_Cate)
        ?.listProduct.find(
          x => x.productId === listProduct[indexItem].productId,
        ),
    );
    setAddSelectProduct(listProduct[indexItem]);
    setSelectIndex(indexItem);
  };
  const deleteItemProduct = (rowMap: any, indexItem: number) => {
    const newData = [...listProduct];
    const prevIndex = listProduct.findIndex(
      (value, index) => index === indexItem,
    );
    newData.splice(prevIndex, 1);
    dispatch(deleteProductCart(prevIndex));
    setListProduct(newData);
    if (rowMap[indexItem]) {
      rowMap[indexItem].closeRow();
    }
  };

  return (
    <View style={styles.bodyContainer}>
      <View style={styles.viewBody}>
        <View style={[styles.flexDirection, styles.viewTitle]}>
          <AppText
            text="Giao hàng tận nơi"
            textFont="bold"
            style={styles.txtTitle}
          />
          <TouchableOpacity style={styles.btnPlus}>
            <AppText
              text="Thay đổi"
              textFont="bold"
              textColor={COLORS.PRIMARY_COLOR}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.flexDirection, styles.viewLocation]}>
          <View style={{paddingRight: 15, flex: 1}}>
            <AppText
              text={
                !Helper.isNullOrUndefined(locationUser) &&
                locationUser.length > 0
                  ? locationUser[0].address.street
                  : 'Vui lòng thêm địa chỉ'
              }
              textFont="bold"
              style={styles.txtItem}
            />
            <View style={styles.spacingTxtAddress} />
            <AppText
              text={
                !Helper.isNullOrUndefined(locationUser) &&
                locationUser.length > 0
                  ? locationUser[0].address.label
                  : 'HCoffee sẽ giao hàng tận nơi'
              }
              style={styles.txtItem}
              numberOfLines={2}
            />
          </View>
          <Icon name="chevron-forward" size={20} />
        </TouchableOpacity>
        <View style={styles.boxInput}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Thêm hướng dẫn giao hàng"
            style={styles.txtItem}
          />
        </View>
        <View style={styles.flexDirection}>
          <View style={styles.infoUser}>
            <AppText text="Họ tên khách hàng" style={styles.txtItem} />
            <View style={styles.spacingTxtInfo} />
            <AppText text={cart.phoneNumber} style={styles.txtItem} />
          </View>
          <View style={styles.spacingInfoUser} />
          <View style={styles.infoUser}>
            <AppText text="Dự kiến giao hàng" style={styles.txtItem} />
            <View style={styles.spacingTxtInfo} />
            <AppText text="15-30 phút" style={styles.txtItem} />
          </View>
        </View>
      </View>
      <View style={styles.viewBody}>
        <View style={[styles.flexDirection, styles.viewTitle]}>
          <AppText
            text="Sản phẩm đã chọn"
            textFont="bold"
            style={styles.txtTitle}
          />
          <TouchableOpacity
            style={styles.btnPlus}
            onPress={() => setShowBottomSheetCart(false)}>
            <AppText
              text="+ Thêm"
              textFont="bold"
              textColor={COLORS.PRIMARY_COLOR}
            />
          </TouchableOpacity>
        </View>
        {!Helper.isNullOrUndefined(listProduct) && listProduct!.length > 0 && (
          <SwipeListView
            scrollEnabled={false}
            data={listProduct}
            renderItem={renderProduct}
            renderHiddenItem={renderHandleProduct}
            disableRightSwipe
            stopRightSwipe={-150}
            rightOpenValue={-150}
            previewRowKey={'0'}
          />
        )}
      </View>
      <View style={styles.viewBody}>
        <View style={[styles.flexDirection, styles.viewTitle]}>
          <AppText text="Tổng cộng" textFont="bold" style={styles.txtTitle} />
        </View>
        <View style={[styles.flexDirection, styles.viewItem]}>
          <AppText text="Thành tiền" style={styles.txtItem} />
          <AppText
            text={Helper.formatPrice(cart.totalPriceCart)}
            style={styles.txtItem}
          />
        </View>
        <View style={[styles.flexDirection, styles.viewItem]}>
          <AppText text="Phí giao hàng" style={styles.txtItem} />
          <AppText
            text={Helper.formatPrice(cart.totalPriceShipCart)}
            style={styles.txtItem}
          />
        </View>
        <TouchableOpacity
          style={[styles.flexDirection, styles.viewItem]}
          onPress={() => setShowBottomSheetPromotion(true)}>
          <AppText text="Chọn khuyến mãi" style={styles.txtItem} />
          <Icon name="chevron-forward" size={20} />
        </TouchableOpacity>
        <View style={[styles.flexDirection, styles.viewItem]}>
          <AppText
            text="Số tiền thanh toán"
            textFont="bold"
            style={styles.txtItem}
          />
          <AppText
            text={Helper.formatPrice(
              cart.totalPriceCart + cart.totalPriceShipCart,
            )}
            textFont="bold"
            style={styles.txtItem}
          />
        </View>
      </View>
      <View style={[styles.viewBody, {paddingBottom: 30}]}>
        <View style={[styles.flexDirection, styles.viewTitle]}>
          <AppText text="Thanh toán" textFont="bold" style={styles.txtTitle} />
        </View>
        <TouchableOpacity style={[styles.flexDirection, styles.viewItem]}>
          <AppText text="Chọn phương thức thanh toán" style={styles.txtItem} />
          <Icon name="chevron-forward" size={20} />
        </TouchableOpacity>
      </View>

      {/* //Select Product */}
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
          updateItem: true,
        })}
        FooterBottoomSheetComponent={FooterOptionBuy({
          showBottomSheet,
          addSelectProduct,
          chooseProduct,
          setAddSelectProduct,
          setShowBottomSheet,
          updateItem: true,
          selectIndex,
        })}
      />
      {/* // Promotion */}
      <AppDraggaleBottomSheet
        showBottomSheet={showBottomSheetPromotion}
        setShowBottomSheet={setShowBottomSheetPromotion}
        HeaderBottomSheetComponent={HeaderPromotion(
          showBottomSheetPromotion,
          setShowBottomSheetPromotion,
        )}
        BodyBottomSheetComponent={BodyPromotion()}
      />
    </View>
  );
};

export default BodyCart;
