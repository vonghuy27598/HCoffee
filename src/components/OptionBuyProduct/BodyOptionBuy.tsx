/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AppText from '@components/Custom/AppText';
import React, {useEffect, useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {Checkbox, RadioButton} from 'react-native-paper';
import {styles} from './styles';
import {Helper} from '@common/index';
import {COLORS} from '../../constants';
import {ScrollView} from 'react-native';
import {IProductType} from '@type/productType';
import {useApolloClient} from '@apollo/client';
import {getAllTopping} from '@graphQL/services/serviceGetAllTopping';
import {ISelectToppingType, IToppingType} from '@type/toppingType';
import {IStoreOptionBuyProductType} from '@type/cartType';

const BodyOptionBuy = ({
  showBottomSheet,
  chooseProduct,
  addSelectProduct,
  setAddSelectProduct,
  updateItem,
}: {
  showBottomSheet?: boolean;
  chooseProduct: IProductType | undefined;
  addSelectProduct: IStoreOptionBuyProductType;
  setAddSelectProduct: React.Dispatch<
    React.SetStateAction<IStoreOptionBuyProductType>
  >;
  updateItem: boolean;
}) => {
  const [checkSize, setCheckSize] = useState(
    Helper.getFirstSize(
      chooseProduct?.smallPrice ?? 0,
      chooseProduct?.mediumPrice ?? 0,
    ),
  );
  const [listTopping, setListTopping] = useState<ISelectToppingType[]>([]);
  const [selectTopping, setSelectTopping] = useState<ISelectToppingType[]>([]);
  const client = useApolloClient();
  const dataToppingQL = client.readQuery<typeof getAllTopping.response>({
    query: getAllTopping.query,
  });
  const getTopping = async (
    listIdTopping: number[],
    product: IProductType | undefined,
  ) => {
    const listTemp = dataToppingQL?.allListTopping.filter(item =>
      listIdTopping.includes(item.toppingId),
    );
    if (updateItem) {
      const listSelectB: ISelectToppingType[] = [];
      listTemp?.forEach((val: IToppingType, index: number) => {
        const findIndexTopping = addSelectProduct.listTopping.findIndex(
          x => x.toppingId === val.toppingId,
        );
        if (findIndexTopping >= 0) {
          listSelectB.push({...val, checked: true});
        } else {
          listSelectB.push({...val, checked: false});
        }
      });
      setListTopping(listSelectB);
      setSelectTopping(listSelectB.filter(x => x.checked));
    } else {
      const listSelect = listTemp?.map((val: IToppingType) => {
        return {...val, checked: false};
      }) as ISelectToppingType[];
      setListTopping(listSelect);
      setSelectTopping([]);
    }
  };
  useEffect(() => {
    if (!updateItem) {
      // getTopping(chooseProduct?.iD_TypeTopping ?? [], chooseProduct);
      setCheckSize(
        Helper.getFirstSize(
          chooseProduct?.smallPrice ?? 0,
          chooseProduct?.mediumPrice ?? 0,
        ),
      );
      setAddSelectProduct(oldValue => ({
        ...oldValue,
        size: checkSize,
      }));
    }
  }, [chooseProduct]);
  useEffect(() => {
    if (showBottomSheet) {
      if (!Helper.isNullOrUndefined(chooseProduct)) {
        getTopping(chooseProduct?.iD_TypeTopping ?? [], chooseProduct);
        if (updateItem) {
          setCheckSize(addSelectProduct.size);
        }
      }
    }
  }, [showBottomSheet]);
  useEffect(() => {
    if (
      !Helper.isNullOrUndefined(chooseProduct) &&
      !Helper.isNullOrUndefined(listTopping)
    ) {
      setAddSelectProduct(oldValue => ({
        ...oldValue,
        productId: chooseProduct?.productId ?? 0,
        productName: chooseProduct?.productName ?? '',
        iD_Cate: chooseProduct?.iD_Cate ?? 0,
        size: checkSize,
        totalPrice:
          (Helper.getPriceSize(checkSize, chooseProduct) +
            Helper.getPriceCheckTopping(listTopping)) *
          oldValue.quantity,
        listTopping: selectTopping,
      }));
    }
  }, [checkSize, selectTopping]);
  return (
    <ScrollView scrollEnabled style={{flex: 1}}>
      {!Helper.checkLessThanOneSize([
        chooseProduct?.bigPrice ?? 0,
        chooseProduct?.mediumPrice ?? 0,
        chooseProduct?.smallPrice ?? 0,
      ]) && (
        <View style={styles.containerSize}>
          <AppText text="Size" textFont="bold" textSize={15} />
          {!Helper.checkZeroPrice(chooseProduct?.bigPrice ?? 0) && (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.areaTopping}
              onPress={() => setCheckSize('bigPrice')}>
              <View style={styles.boxRadioSize}>
                <RadioButton
                  value="bigPrice"
                  onPress={() => setCheckSize('bigPrice')}
                  status={checkSize === 'bigPrice' ? 'checked' : 'unchecked'}
                  color={COLORS.PRIMARY_COLOR}
                />
                <AppText text="Lớn" />
              </View>
              <AppText
                text={Helper.formatPrice(chooseProduct?.bigPrice ?? 0)}
              />
            </TouchableOpacity>
          )}
          {!Helper.checkZeroPrice(chooseProduct?.mediumPrice ?? 0) && (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.areaTopping}
              onPress={() => setCheckSize('mediumPrice')}>
              <View style={styles.boxRadioSize}>
                <RadioButton
                  value="mediumPrice"
                  onPress={() => setCheckSize('mediumPrice')}
                  status={checkSize === 'mediumPrice' ? 'checked' : 'unchecked'}
                  color={COLORS.PRIMARY_COLOR}
                />
                <AppText text="Vừa" />
              </View>
              <AppText
                text={Helper.formatPrice(chooseProduct?.mediumPrice ?? 0)}
              />
            </TouchableOpacity>
          )}
          {!Helper.checkZeroPrice(chooseProduct?.smallPrice ?? 0) && (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.areaTopping}
              onPress={() => setCheckSize('smallPrice')}>
              <View style={styles.boxRadioSize}>
                <RadioButton
                  value="smallPrice"
                  onPress={() => setCheckSize('smallPrice')}
                  status={checkSize === 'smallPrice' ? 'checked' : 'unchecked'}
                  color={COLORS.PRIMARY_COLOR}
                />
                <AppText text="Nhỏ" />
              </View>
              <AppText
                text={Helper.formatPrice(chooseProduct?.smallPrice ?? 0)}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
      {(chooseProduct?.iD_TypeTopping.length ?? 0) > 0 && (
        <View style={styles.containerTopping}>
          <AppText text="Topping" textFont="bold" textSize={15} />
          {(chooseProduct?.iD_TypeTopping.length ?? 0) > 0 && (
            <AppText text="Chọn tối đa 2 loại" textColor={COLORS.GRAY_COLOR} />
          )}
          {listTopping?.map((val, index) => {
            return (
              <TouchableOpacity
                style={styles.areaTopping}
                key={`listTopping-${index}`}
                activeOpacity={1}
                onPress={() => {
                  const indexFind = listTopping.findIndex(
                    x => x.toppingId === val.toppingId,
                  );
                  if (listTopping.filter(x => x.checked === true).length < 2) {
                    listTopping[indexFind].checked =
                      !listTopping[indexFind].checked;
                    setSelectTopping(listTopping.filter(x => x.checked));
                    setListTopping(listTopping);
                  } else {
                    if (val.checked) {
                      listTopping[indexFind].checked =
                        !listTopping[indexFind].checked;
                      setSelectTopping(listTopping.filter(x => x.checked));
                      setListTopping(listTopping);
                    } else {
                      Alert.alert('Thông báo', 'Chọn tối đa 2 loại');
                    }
                  }
                  console.log(
                    'CHECK',
                    listTopping.filter(x => x.checked === true).length,
                    val.checked,
                  );
                }}>
                <View style={styles.boxRadioSize}>
                  <Checkbox
                    status={val.checked ? 'checked' : 'unchecked'}
                    color={COLORS.PRIMARY_COLOR}
                  />
                  <AppText text={val.toppingName} />
                </View>
                <AppText text={Helper.formatPrice(val.price)} />
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

export default BodyOptionBuy;
