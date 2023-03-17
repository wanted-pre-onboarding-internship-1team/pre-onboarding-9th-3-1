import { useDataValueContext } from '../contexts/DataContext';

export default function useSeries() {
  const { barValueList, areaValueList } = useDataValueContext();
  const series = [
    {
      name: 'area',
      type: 'area',
      data: areaValueList,
    },
    {
      name: 'bar',
      type: 'column',
      data: barValueList,
    },
  ];

  return series;
}
