import {
  Alert,
  ImageBackground,
  Keyboard,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {styles} from './styles';
import {COLORS, IMAGES} from '../../../constants';
import AppText from '@components/Custom/AppText';
import {TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Helper} from '@common/index';
import AppDraggaleBottomSheet from '@components/Custom/AppDraggaleBottomSheet';
import {useDispatch} from 'react-redux';
import {requestOTP, sendOTP} from '@redux/action/userAction';

const ContainerLogin = () => {
  const navigation = useNavigation();
  const [focusInput, setFocusInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const textRef1 = useRef<TextInput>(null);
  const textRef2 = useRef<TextInput>(null);
  const textRef3 = useRef<TextInput>(null);
  const textRef4 = useRef<TextInput>(null);
  const textRef5 = useRef<TextInput>(null);
  const textRef6 = useRef<TextInput>(null);
  const [textCode, setTextCode] = useState<string[]>([]);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (!focusInput) Keyboard.dismiss();
  }, [focusInput]);
  useEffect(() => {
    setTextCode([]);
  }, [showBottomSheet]);
  const handleLogin = async () => {
    if (Helper.isPhoneNumber(phoneNumber)) {
      const formatPhone = phoneNumber.replace('0', '84');
      console.log('PHONE', formatPhone);
      dispatch(requestOTP(formatPhone));
      Keyboard.dismiss();
      setShowBottomSheet(true);
    } else {
      Alert.alert('Có lỗi', 'Số điện thoại không đúng dịnh dạng');
    }
  };

  const updateTextCode = (index: number, newValue: string) => {
    setTextCode(preVal => {
      const newArr = [...preVal];
      newArr[index] = newValue;
      return newArr;
    });
    if (!Helper.isNullOrUndefined(newValue)) {
      checkInputText(index);
    }
  };

  const checkInputText = (index: number) => {
    switch (index) {
      case 0:
        textRef2.current?.focus();
        break;
      case 1:
        textRef3.current?.focus();
        break;
      case 2:
        textRef4.current?.focus();
        break;
      case 3:
        textRef5.current?.focus();
        break;
      case 4:
        textRef6.current?.focus();
        break;
    }
  };

  useEffect(() => {
    console.log('TEXTCODE', textCode);
    const checkSize = textCode.filter(x => !Helper.isNullOrUndefined(x)).length;
    if (checkSize === 6)
      checkVerifyMess(textCode.join(',').replaceAll(',', ''));
  }, [textCode]);

  const checkVerifyMess = async (code: string) => {
    try {
      console.log('TEXT', code);
      const formatPhone = phoneNumber.replace('0', '84');
      dispatch(sendOTP(formatPhone, code, navigation));
    } catch (error) {
      console.log('Invalid code.');
    }
  };
  const checkDeleteText = (
    nativeEvent: TextInputKeyPressEventData,
    index: number,
  ) => {
    if (nativeEvent.key === 'Backspace') {
      switch (index) {
        case 1:
          textRef1.current?.focus();
          break;
        case 2:
          textRef2.current?.focus();
          break;
        case 3:
          textRef3.current?.focus();
          break;
        case 4:
          textRef4.current?.focus();
          break;
        case 5:
          textRef5.current?.focus();
          break;
      }
    }
  };
  const BodyVerifyScreen = () => {
    return (
      <View style={styles.bodyBottomSheet}>
        <AppText
          text="Vui lòng nhập mã xác thực!"
          textFont="bold"
          textSize={16}
        />
        <View style={styles.contentVerify}>
          <View style={styles.verifyBox}>
            <TextInput
              ref={textRef1}
              numberOfLines={1}
              maxLength={1}
              inputMode="numeric"
              value={textCode[0]}
              style={styles.textInputVerify}
              onChangeText={text => updateTextCode(0, text)}
              autoFocus={showBottomSheet}
              onKeyPress={({nativeEvent}) => checkDeleteText(nativeEvent, 0)}
            />
          </View>
          <View style={styles.verifyBox}>
            <TextInput
              ref={textRef2}
              numberOfLines={1}
              maxLength={1}
              value={textCode[1]}
              inputMode="numeric"
              style={styles.textInputVerify}
              onChangeText={text => updateTextCode(1, text)}
              onKeyPress={({nativeEvent}) => checkDeleteText(nativeEvent, 1)}
            />
          </View>
          <View style={styles.verifyBox}>
            <TextInput
              ref={textRef3}
              numberOfLines={1}
              maxLength={1}
              value={textCode[2]}
              inputMode="numeric"
              style={styles.textInputVerify}
              onChangeText={text => updateTextCode(2, text)}
              onKeyPress={({nativeEvent}) => checkDeleteText(nativeEvent, 2)}
            />
          </View>
          <View style={styles.verifyBox}>
            <TextInput
              ref={textRef4}
              numberOfLines={1}
              maxLength={1}
              value={textCode[3]}
              inputMode="numeric"
              style={styles.textInputVerify}
              onChangeText={text => updateTextCode(3, text)}
              onKeyPress={({nativeEvent}) => checkDeleteText(nativeEvent, 3)}
            />
          </View>
          <View style={styles.verifyBox}>
            <TextInput
              ref={textRef5}
              numberOfLines={1}
              maxLength={1}
              value={textCode[4]}
              inputMode="numeric"
              style={styles.textInputVerify}
              onChangeText={text => updateTextCode(4, text)}
              onKeyPress={({nativeEvent}) => checkDeleteText(nativeEvent, 4)}
            />
          </View>
          <View style={styles.verifyBox}>
            <TextInput
              ref={textRef6}
              numberOfLines={1}
              maxLength={1}
              value={textCode[5]}
              inputMode="numeric"
              style={styles.textInputVerify}
              onChangeText={text => updateTextCode(5, text)}
              onKeyPress={({nativeEvent}) => checkDeleteText(nativeEvent, 5)}
            />
          </View>
        </View>
      </View>
    );
  };
  const HeaderVerifyScreen = () => {
    return (
      <View style={styles.headerBottomSheet}>
        <AppText text="Xác thực OTP" textFont="bold" textSize={20} />
        <TouchableOpacity
          style={styles.btnToggleClose}
          onPress={() => setShowBottomSheet(false)}>
          <Icon name="close" size={25} />
        </TouchableOpacity>
      </View>
    );
  };

  const bottom = useMemo(() => {
    return (
      <AppDraggaleBottomSheet
        maxHeightBottomSheet="100%"
        showBottomSheet={showBottomSheet}
        setShowBottomSheet={setShowBottomSheet}
        HeaderBottomSheetComponent={HeaderVerifyScreen()}
        BodyBottomSheetComponent={BodyVerifyScreen()}
      />
    );
  }, [showBottomSheet]);
  return (
    <View style={styles.containerLogin}>
      <TouchableNativeFeedback
        style={styles.containerLogin}
        onPress={() => setFocusInput(false)}>
        <ImageBackground
          source={IMAGES.BG_LOGIN}
          style={styles.backgroundLogin}
          resizeMode="stretch">
          <View style={styles.viewLogin}>
            <AppText
              text="CHÀO BẠN"
              textFont="bold"
              textSize={25}
              textColor={COLORS.WHITE_COLOR}
            />
            <View
              style={[
                styles.viewTextInput,
                focusInput && {
                  borderColor: COLORS.PRIMARY_COLOR,
                  borderWidth: 1,
                },
              ]}>
              <View style={styles.viewCountry}>
                <AppText text="+84" textSize={17} />
              </View>
              <View style={styles.viewTextBox}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Nhập số điện thoại"
                  numberOfLines={1}
                  maxLength={10}
                  onChangeText={value => setPhoneNumber(value)}
                  cursorColor={COLORS.PRIMARY_COLOR}
                  inputMode="tel"
                  onFocus={() => setFocusInput(true)}
                />
              </View>
            </View>
            <TouchableOpacity
              style={[
                styles.btnLogin,
                phoneNumber.length < 10 ? styles.btnDisable : styles.btnEnable,
              ]}
              disabled={phoneNumber.length < 10}
              onPress={() => handleLogin()}>
              <AppText
                text="Đăng nhập"
                textFont="bold"
                textColor={
                  phoneNumber.length < 10
                    ? COLORS.GRAY_e3e3e3_COLOR
                    : COLORS.WHITE_COLOR
                }
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.btnCloseLogin}
            onPress={() => navigation.goBack()}>
            <Icon name="close" size={20} color={COLORS.WHITE_COLOR} />
          </TouchableOpacity>
        </ImageBackground>
      </TouchableNativeFeedback>
      {bottom}
    </View>
  );
};

export default ContainerLogin;
