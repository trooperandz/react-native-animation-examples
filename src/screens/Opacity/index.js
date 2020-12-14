import React, { useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import Container from '../../components/Container';
import { BACKGROUND_PRIMARY } from '../../utils';

export default () => {
  const [animation] = useState(new Animated.Value(1));

  const animatedStyles = {
    opacity: animation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 350,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
      }).start();
    });
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    backgroundColor: BACKGROUND_PRIMARY,
  },
});
