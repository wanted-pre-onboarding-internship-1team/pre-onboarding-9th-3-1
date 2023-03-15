import Container from '../common/Container';
import Navbar from '../common/Nav';
import Chart from '../components/Chart';
import React from 'react';

export default function Mainpage() {
  return (
    <>
      <Navbar />
      <Container>
        <Chart />
      </Container>
    </>
  );
}
