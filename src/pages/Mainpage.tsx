import { ChartView } from '../common/Chart';
import { ChartProvider } from '../contexts/ChartContext';

const Mainpage = () => {
  return (
    <ChartProvider>
      <ChartView />
    </ChartProvider>
  );
};

export default Mainpage;
