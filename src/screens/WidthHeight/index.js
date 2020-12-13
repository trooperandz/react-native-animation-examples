import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';

import Container from '../../components/Container';
import { COLOR_PRIMARY } from '../../utils';

export default () => {
  const animation = new Animated.Value(150);

  const animatedStyles = {
    height: animation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 250,
      duration: 700,
    }).start();
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, styles.box1, animatedStyles]}>
          <Text style={styles.text}>Click me</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <View style={[styles.box, styles.box2]} />
    </Container>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
  },
  box1: {
    backgroundColor: COLOR_PRIMARY,
  },
  box2: {
    backgroundColor: 'gray',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
