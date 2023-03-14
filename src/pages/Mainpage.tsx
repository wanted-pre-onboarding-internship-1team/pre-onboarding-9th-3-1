import Chart from '../components/chart/Chart';
import React from 'react';
import styled from 'styled-components';

export default function Mainpage() {
  return (
    <Container>
      <Chart />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  text-align: center;
`;
