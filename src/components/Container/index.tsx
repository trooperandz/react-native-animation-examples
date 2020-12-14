import React, { ReactChild } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

interface Props {
  children: ReactChild;
  styles: { [key: string]: any };
}

export default (props: Props) => {
  const { children, styles } = props;

  return <Container style={styles}>{children}</Container>;
};
