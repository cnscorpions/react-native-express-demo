import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity,
);

const AnimatedComponent = props => {
  const state = {
    height: new Animated.Value(100),
  };

  const startAnimation = () => {
    const {height} = state;

    height.setValue(100);

    Animated.spring(height, {
      toValue: 300,
      friction: 0.8,
      useNativeDriver: false,
    }).start();
  };

  return (
    <AnimatedTouchableOpacity
      style={[styles.button, {height: state.height}]}
      onPress={startAnimation}>
      <Text style={styles.text}>Tap Me</Text>
    </AnimatedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
  },
});

export default AnimatedComponent;
