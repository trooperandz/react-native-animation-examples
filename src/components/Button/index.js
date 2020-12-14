import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #51a7f9;
  padding: 10px;
  height: 45px;
  border-radius: 24px;
  margin-bottom: 50px;
  border-color: #51a7f9;
  border-width: 1px;
  min-width: 242px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  border: none;
`;

export default (props) => {
  const { onPress, style } = props;

  return (
    <Button onPress={onPress}>
      <ButtonText>Reset</ButtonText>
    </Button>
  );
};
