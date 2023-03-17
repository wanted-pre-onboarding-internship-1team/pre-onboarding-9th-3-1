import { useDataValueContext, useDataIDContext } from '../contexts/DataContext';

export default function useColors() {
  const { idList } = useDataValueContext();
  const { selectedID } = useDataIDContext();
  return [
    '#66C7F4',
    function ({ dataPointIndex }: { dataPointIndex: number }) {
      if (idList[dataPointIndex] === selectedID) {
        return '#FF0000';
      }
      return '#99C2A2';
    },
  ];
}
