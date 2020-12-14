import React from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

import Container from '../../components/Container';
import Button from '../../components/Button';
import ButtonContainer from '../../components/ButtonContainer';
import { BACKGROUND_PRIMARY } from '../../utils';
import * as S from './styles';

export default () => {
  const bounce = new Animated.Value(0);
  const back = new Animated.Value(0);
  const elastic = new Animated.Value(0);
  const ease = new Animated.Value(0);

  const bounceStyles = {
    transform: [{ translateY: bounce }],
  };

  const backStyles = {
    transform: [{ translateY: back }],
  };

  const elasticStyles = {
    transform: [{ translateY: elastic }],
  };

  const easeStyles = {
    transform: [{ translateY: ease }],
  };

  const bounceAnimation = () => {
    Animated.timing(bounce, {
      toValue: 425,
      duration: 700,
      easing: Easing.bounce,
    }).start();
  };

  const backAnimation = () => {
    Animated.timing(back, {
      toValue: 425,
      duration: 700,
      easing: Easing.back(3),
    }).start();
  };

  const elasticAnimation = () => {
    Animated.timing(elastic, {
      toValue: 425,
      duration: 700,
      easing: Easing.elastic(1.5),
    }).start();
  };

  const easeAnimation = () => {
    Animated.timing(ease, {
      toValue: 425,
      duration: 700,
      easing: Easing.ease,
    }).start();
  };

  const handlePress = () => {
    bounce.setValue(0);
    back.setValue(0);
    elastic.setValue(0);
    ease.setValue(0);
  };

  return (
    <Container styles={styles.container}>
      <S.Box onPress={bounceAnimation}>
        <Animated.View style={[styles.box, bounceStyles]}>
          <S.ButtonText style={styles.text}>Bounce</S.ButtonText>
        </Animated.View>
      </S.Box>
      <S.Box onPress={backAnimation}>
        <Animated.View style={[styles.box, backStyles]}>
          <S.ButtonText style={styles.text}>Back</S.ButtonText>
        </Animated.View>
      </S.Box>
      <S.Box onPress={elasticAnimation}>
        <Animated.View style={[styles.box, elasticStyles]}>
          <S.ButtonText style={styles.text}>Elastic</S.ButtonText>
        </Animated.View>
      </S.Box>
      <S.Box onPress={easeAnimation}>
        <Animated.View style={[styles.box, easeStyles]}>
          <S.ButtonText style={styles.text}>Ease</S.ButtonText>
        </Animated.View>
      </S.Box>
      <ButtonContainer>
        <Button onPress={handlePress} />
      </ButtonContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 48,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 8,
    height: 150,
    backgroundColor: BACKGROUND_PRIMARY,
  },
});
