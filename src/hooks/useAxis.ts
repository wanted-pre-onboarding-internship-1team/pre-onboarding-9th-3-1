import { areaYaxis, barYaxis } from '../consts/chartOption';
import { useDataValueContext } from '../contexts/DataContext';

export default function useAxis() {
  const { timeList } = useDataValueContext();

  const yaxis = [areaYaxis, barYaxis];

  const xaxis = {
    categories: timeList,
    tickAmount: 6,
    labels: {
      rotate: 0,
    },
  };
  return { yaxis, xaxis };
}
