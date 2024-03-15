/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AppText from '@components/Custom/AppText';
import React, {useMemo} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {Checkbox, RadioButton} from 'react-native-paper';
import {styles} from './styles';
import {Helper} from '@common/index';
import {COLORS} from '../../constants';
import {ScrollView} from 'react-native';
import {useLineCateProduct} from '@components/FeatureLineCateProduct/Provider/LineCateProductProvider';

const BodyOptionBuy = () => {
  const {
    chooseProduct,
    checkSize,
    setCheckSize,
    listSelectTopping,
    setSelectTopping,
  } = useLineCateProduct();

  return useMemo(() => {
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
                    status={
                      checkSize === 'mediumPrice' ? 'checked' : 'unchecked'
                    }
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
                    status={
                      checkSize === 'smallPrice' ? 'checked' : 'unchecked'
                    }
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
              <AppText
                text="Chọn tối đa 2 loại"
                textColor={COLORS.GRAY_COLOR}
              />
            )}
            {listSelectTopping?.map((val, index) => {
              return (
                <TouchableOpacity
                  style={styles.areaTopping}
                  key={`listTopping-${index}`}
                  activeOpacity={1}
                  onPress={() => {
                    const indexFind = listSelectTopping.findIndex(
                      x => x.toppingId === val.toppingId,
                    );
                    if (
                      listSelectTopping.filter(x => x.checked === true).length <
                      2
                    ) {
                      listSelectTopping[indexFind].checked =
                        !listSelectTopping[indexFind].checked;
                      setSelectTopping(listSelectTopping);
                    } else {
                      if (val.checked) {
                        listSelectTopping[indexFind].checked =
                          !listSelectTopping[indexFind].checked;
                        setSelectTopping(listSelectTopping);
                      } else {
                        Alert.alert('Thông báo', 'Chọn tối đa 2 loại');
                      }
                    }
                    console.log(
                      'CHECK',
                      listSelectTopping.filter(x => x.checked === true).length,
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
  }, [
    chooseProduct,
    checkSize,
    setCheckSize,
    listSelectTopping,
    setSelectTopping,
  ]);
};

export default BodyOptionBuy;
