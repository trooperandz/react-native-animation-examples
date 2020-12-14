import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import Container from '../../components/Container';

export default () => {
  const animation = new Animated.Value(0);

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#4aa', '#aa4444'],
  });

  const textInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#aa4444', '#4aa'],
  });

  const boxAnimatedStyle = {
    backgroundColor: boxInterpolation,
  };

  const textAnimatedStyle = {
    color: textInterpolation,
  };

  const startAnimation = () =>
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
      }).start();
    });

  return (
    <Container>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyle]}>
          <Animated.Text style={[styles.text, textAnimatedStyle]}>
            Click me
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
  },
});
