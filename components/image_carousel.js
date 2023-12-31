import React, { useState, useRef } from 'react';
import { FlatList, View, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import slides from '../slides';
import ImageItem from './image_item';
import Paginator from './paginator';
import NavigationButton from './nav_button';
import NextButton from './next_button';

export default ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log('Last Item.');
    }
  };
  const scrollBack = () => {
    if (currentIndex > 0) {
      slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
    } else {
      console.log('First Item.');
    }
  };
  return (
    <View style={[styles.container]}>
      <View style={[StyleSheet.absoluteFillObject]} >
        {slides.map((slide, i) => {
          const { width } = useWindowDimensions();
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image 
              source={slide.image}
              key={i}
              style={[StyleSheet.absoluteFillObject, {opacity, height: '100%'}]}
              blurRadius={30}
            />
          );
        })}
      </View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item, index }) => <ImageItem item={item} lastIndex={index === slides.length - 1} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={0}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      {/* <NextButton
        scrollTo={scrollTo}
        scrollBack={scrollBack}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      /> */}
      <Paginator data={slides} scrollX={scrollX} />
      <NavigationButton headOrTail={currentIndex / (slides.length - 1)} scrollTo={scrollTo} scrollBack={scrollBack} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    backgroundColor: '#f4338f',
    borderRadius: 100,
    padding: 20,
    top: '20%'
  },
});
