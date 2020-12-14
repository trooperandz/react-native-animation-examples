import styled from 'styled-components/native';

import { BACKGROUND_PRIMARY } from '../../utils';

export const Box = styled.TouchableWithoutFeedback`
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 150;
  height: 150;
  background-color: ${BACKGROUND_PRIMARY};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
