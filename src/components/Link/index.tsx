import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { navigate } from '../../utils/navigation';

const Title = styled.Text`
  font-size: 20px;
  color: gray;
  margin-bottom: 18px;
`;

interface Props {
  screen: string;
  title: string;
}

export default (props: Props) => {
  const { screen, title } = props;

  return (
    <TouchableOpacity onPress={() => navigate(screen)}>
      <Title>{title}</Title>
    </TouchableOpacity>
  );
};
