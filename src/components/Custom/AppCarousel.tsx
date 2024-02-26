import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  PointProp,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleSheet,
  Image,
  ViewToken,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

type dotStyle = 'circle-dot' | 'dash-dot' | 'both-dot' | '';

interface IPropertyCarousel {
  id?: string;
  data: string[];
  showDot: boolean;
  dotColor?: string;
  dotSelectedColor?: string;
  dotStyle?: dotStyle;
  autoPlay?: boolean;
  timeDelay?: number;
  width: number;
  height: number;
  horizontal?: boolean;
  key?: React.Key | null | undefined;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  contentOffset?: PointProp | undefined;
  scrollEnabled?: boolean | undefined;
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  onScrollBeginDrag?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  onScrollEndDrag?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  onScrollToTop?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  onScrollAnimationEnd?: (() => void) | undefined;
}

const showData = (
  index: number,
  item: string,
  _width: number,
  _height: number,
) => {
  return (
    <Image
      key={index}
      source={{uri: item}}
      resizeMode="stretch"
      width={_width}
      height={_height}
      style={{}}
    />
  );
};
const styleDot = (_dotStyle?: dotStyle, _dotColor?: string) => {
  const style = [];
  // set styleDot
  if (_dotStyle === 'both-dot') {
    style.push(styles.dashDotStyle);
  } else if (_dotStyle === 'dash-dot') {
    style.push(styles.dashDotStyle);
  } else {
    style.push(styles.circleDotStyle);
  }
  // set color dot
  style.push({backgroundColor: _dotColor ? _dotColor : '#C0C0C0'});
  return style;
};
const showDotSelected = (
  _data: string[],
  _dotStyle?: dotStyle,
  _dotColor?: string,
  _dotSelectedColor?: string,
  _selectedDot?: number,
) => {
  return (
    <View style={styles.viewDot}>
      {_data.map((val, index) => {
        return (
          <View
            key={index}
            style={[
              styles.dotItem,
              styleDot(_dotStyle, _dotColor),
              _selectedDot === index && {
                backgroundColor: _dotSelectedColor
                  ? _dotSelectedColor
                  : '#F0F0F0',
              },
            ]}
          />
        );
      })}
    </View>
  );
};
const AppCarousel = (props: IPropertyCarousel) => {
  const x = useSharedValue(0);
  const {width} = useWindowDimensions();
  const offset = useSharedValue(0);
  const [dataList, setDataList] = useState(props.data);
  const [paginationIndex, setPaginationIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState(props.autoPlay);
  const interval = useRef<NodeJS.Timeout>();
  const scrollRef = useAnimatedRef<Animated.FlatList<any>>();
  useEffect(() => {
    refresh(); // refresh component when change props
  }, [props]);
  const refresh = () => {
    setDataList(props.data);
    setPaginationIndex(0);
    x.value = 0;
    offset.value = 0;
    scrollRef.current?.scrollToOffset({offset: 0, animated: true});
  };
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0]?.index !== undefined &&
      viewableItems[0]?.index !== null
    ) {
      setPaginationIndex(viewableItems[0]?.index % props.data.length);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: e => {
      x.value = e.contentOffset.x;
    },
    onMomentumEnd: e => {
      offset.value = e.contentOffset.x;
    },
  });
  useEffect(() => {
    if (isAutoPlay === true) {
      interval.current = setInterval(
        () => {
          offset.value = offset.value + props.width;
          scrollRef.current?.scrollToOffset({
            offset: offset.value,
            animated: true,
          });
        },
        props.timeDelay ? props.timeDelay : 3000,
      );
    } else {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [isAutoPlay, offset, width]);

  return (
    <View
      style={[
        styles.container,
        {width: props.width, height: props.height, flexDirection: 'row'},
      ]}>
      <Animated.FlatList
        ref={scrollRef}
        data={dataList}
        contentContainerStyle={props.contentContainerStyle}
        id={props.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={props.scrollEnabled}
        scrollEventThrottle={16}
        horizontal={true}
        pagingEnabled={true}
        bounces={false}
        contentOffset={props.contentOffset}
        onEndReached={() => setDataList([...dataList, ...props.data])}
        onEndReachedThreshold={0.5}
        onScrollBeginDrag={() => {
          setIsAutoPlay(false);
        }}
        onScrollEndDrag={() => {
          setIsAutoPlay(true);
        }}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        key={props.key}
        keyExtractor={(_, index) => `list_item${index}`}
        style={props.style}
        renderItem={({item, index}) =>
          showData(index, item, props.width, props.height)
        }
        onScroll={onScroll}
      />
      {props?.showDot &&
        showDotSelected(
          props?.data,
          props?.dotStyle,
          props?.dotColor,
          props?.dotSelectedColor,
          paginationIndex,
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  viewDot: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  dotItem: {
    zIndex: 999,
    marginHorizontal: 3,
  },
  circleDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 30,
  },
  dashDotStyle: {
    width: 10,
    height: 3,
    borderRadius: 30,
  },
  selectedDotItem: {},
});

export default AppCarousel;
