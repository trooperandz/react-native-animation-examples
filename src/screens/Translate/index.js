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
  const [animation] = useState(new Animated.Value(0));

  // This also works; not from Udemy
  // const animation = new Animated.Value(0);

  const animatedStyles = {
    transform: [{ translateY: animation }, { translateX: animation }],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 250,
      duration: 700,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 700,
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
  text: {
    color: '#fff',
    fontSize: 20,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    backgroundColor: COLOR_PRIMARY,
  },
});
