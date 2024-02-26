import {Dimensions} from '@common/index';
import AppCarousel from '@components/Custom/AppCarousel';
import {getBannerHome} from '@redux/action/bannerHomeAction';
import {RootState} from '@redux/store';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../constants';

const Banner = () => {
  const dispatch = useDispatch<any>();
  // const getData = useSelector(
  //   (state: RootState) => state.getBannerHomeReducer.data,
  // );
  const isLoading = useSelector(
    (state: RootState) => state.getBannerHomeReducer.isLoading,
  );
  const arrayImage = useSelector(
    (state: RootState) => state.getBannerHomeReducer.arrayImage,
  );

  useEffect(() => {
    dispatch(getBannerHome());
  }, []);
  return (
    !isLoading && (
      <AppCarousel
        data={arrayImage}
        width={Dimensions.width - 30}
        height={150}
        showDot={true}
        dotStyle="dash-dot"
        dotColor={COLORS.BANNER_DOT_COLOR}
        dotSelectedColor={COLORS.BANNER_SELECTED_DOT_COLOR}
        autoPlay={true}
        timeDelay={4000}
      />
    )
  );
};

export default Banner;
