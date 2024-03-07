import {Dimensions} from '@common/index';
import AppCarousel from '@components/Custom/AppCarousel';
import React, {useMemo} from 'react';
import {COLORS} from '../../constants';
import {styles} from './styles';
import {useHome} from '@container/HomeScreen/Provider/HomeProvider';

const Banner = () => {
  const {arrayImage, isLoadingBanner} = useHome();
  return useMemo(() => {
    return (
      !isLoadingBanner && (
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
          style={styles.carousel}
        />
      )
    );
  }, [arrayImage, isLoadingBanner]);
};

export default Banner;
