import { chartOption } from '../../const/chart';
import useDataList from '../../hooks/useDataList';
import { createData } from '../../utils/chart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export default function MultiChart() {
  const { dataList, isLoading } = useDataList();

  if (isLoading) {
    return <div>로딩중</div>;
  }

  const data = createData(dataList);

  return <Chart type='bar' options={chartOption} data={data} />;
}
