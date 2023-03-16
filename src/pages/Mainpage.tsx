import Chart from '../components/Chart';
import { ChartFilter } from '../components/ChartFilter';
import ChartHeader from '../components/ChartHeader';
import styled from 'styled-components';

export default function Mainpage() {
  return (
    <Container>
      <ChartHeader />
      <Chart />
      <ChartFilter />
    </Container>
  );
}

const Container = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
