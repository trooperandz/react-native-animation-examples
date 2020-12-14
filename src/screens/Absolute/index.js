import React, { useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import Container from '../../components/Container';
import Button from '../../components/Button';
import ButtonContainer from '../../components/ButtonContainer';
import { BACKGROUND_PRIMARY } from '../../utils';

export default () => {
  const animation = new Animated.Value(0);

  const animatedStyles = {
    top: animation,
    left: animation,
    right: animation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 100,
      duration: 700,
    }).start();
  };

  const handlePress = () => animation.setValue(0);

  return (
    <Container>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text style={styles.text}>
            Click me. This is repeating text. This is repeating text. This is
            repeating text. This is repeating text. This is repeating text. This
            is repeating text. This is repeating text.
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <ButtonContainer>
        <Button onPress={handlePress} />
      </ButtonContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 20,
  },
  box: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BACKGROUND_PRIMARY,
  },
});
