import React, { useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Container from '../../components/Container';
import Button from '../../components/Button';
import ButtonContainer from '../../components/ButtonContainer';
import { BACKGROUND_PRIMARY } from '../../utils';

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

  const handlePress = () => animation.setValue(1);

  return (
    <Container>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text style={styles.text}>Click me</Text>
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
    width: 150,
    height: 150,
    padding: 24,
    backgroundColor: BACKGROUND_PRIMARY,
  },
});
