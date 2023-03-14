import { api } from '../apis';
import { GetMockResponse } from '../apis/types/mock';
import Chart from '../components/Chart';
import useMockList from '../hooks/useMockList';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';

export default function Mainpage() {
  const test = useMockList();
  console.log(test);
  return (
    <Container>
      <Chart />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vh;
`;
