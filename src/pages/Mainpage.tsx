import { Chart } from '../common/Chart';
import ChartProvider from '../contexts/ChartContext';

const Mainpage = () => {
  return (
    <ChartProvider>
      <Chart />
    </ChartProvider>
  );
};

export default Mainpage;
