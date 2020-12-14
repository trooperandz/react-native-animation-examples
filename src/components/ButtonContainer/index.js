import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  position: absolute;
  bottom: 0;
`;

export default (props) => {
  return <Container>{props.children}</Container>;
};
