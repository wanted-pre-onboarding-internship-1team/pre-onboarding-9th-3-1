import Charts from '../components/Charts';
import React from 'react';
import styled from 'styled-components';

export default function Mainpage() {
  return (
    <Container>
      <Charts />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 10%;
  width: 90vw;
  text-align: center;
`;
