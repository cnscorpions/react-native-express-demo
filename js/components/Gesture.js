import React from 'react';
import {StyleSheet, View, Text, PanResponder} from 'react-native';

const Gesture = props => {
  const state = {
    dragging: false,
    initialTop: 50,
    initialLeft: 50,
    offsetTop: 0,
    offsetLeft: 0,
  };

  return (
    <Text style={styles.container}>
      <Text style={styles.text}>DRAG ME</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});
