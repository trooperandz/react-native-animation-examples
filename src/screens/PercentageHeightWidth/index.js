import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

import Container from '../../components/Container';
import Button from '../../components/Button';
import ButtonContainer from '../../components/ButtonContainer';
import { BACKGROUND_PRIMARY } from '../../utils';

export default () => {
  const animation = new Animated.Value(0);

  const widthInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '100%'],
  });

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['15%', '70%'],
  });

  const animatedStyles = {
    width: widthInterpolate,
    height: heightInterpolate,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
    }).start();
  };

  const handlePress = () => animation.setValue(0);

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
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    backgroundColor: BACKGROUND_PRIMARY,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
