import React, { useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import Container from '../../components/Container';
import { COLOR_PRIMARY } from '../../utils';

export default () => {
  const animation = new Animated.Value(1);

  const animatedStyles = {
    transform: [{ scale: animation }],
    // transform: [
    //   {
    //     scaleY: animation,
    //   },
    // ],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: -1.5,
      duration: 700,
    }).start();
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text style={styles.text}>Click me</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 20,
  },
  box: {
    width: 150,
    height: 150,
    padding: 24,
    backgroundColor: COLOR_PRIMARY,
  },
});
