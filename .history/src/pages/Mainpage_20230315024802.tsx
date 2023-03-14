import Chart from '../components/Chart';
import styled from 'styled-components';

export default function Mainpage() {
  return (
    <Container>
      <Chart />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vh;
`;
