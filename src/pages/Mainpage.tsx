import Container from '../common/Container';
import Navbar from '../common/Nav';
import Chart from '../components/Chart';

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
