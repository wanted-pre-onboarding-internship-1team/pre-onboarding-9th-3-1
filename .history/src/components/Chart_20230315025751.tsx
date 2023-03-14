import useMockList from '../hooks/useMockList';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';

export default function Chart() {
  const test = useMockList();
  return <Container></Container>;
}

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;
