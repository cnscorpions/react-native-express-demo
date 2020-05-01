import React from 'react';
import * as Animatable from 'react-native-animatable';

const AnimatedText = props => {
  return (
    <>
      <Animatable.Text
        animation="slideInDown"
        iterationCount="infinite"
        direction="alternate">
        Up and down you go
      </Animatable.Text>
    </>
  );
};

export default AnimatedText;
