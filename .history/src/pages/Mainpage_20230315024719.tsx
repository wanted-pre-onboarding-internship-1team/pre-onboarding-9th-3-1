import Chart from '../components/Chart';
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
