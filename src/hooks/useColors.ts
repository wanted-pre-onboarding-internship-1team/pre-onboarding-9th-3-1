import { BLUE, LIGHT_GREEN, RED } from '../consts/colors';
import { useDataValueContext, useDataIDContext } from '../contexts/DataContext';

export default function useColors() {
  const { idList } = useDataValueContext();
  const { selectedID } = useDataIDContext();
  return [
    BLUE,
    function ({ dataPointIndex }: { dataPointIndex: number }) {
      if (idList[dataPointIndex] === selectedID) {
        return RED;
      }
      return LIGHT_GREEN;
    },
  ];
}
