import { RED, LIGHT_GREEN } from '../consts/colors';
import { useDataIDContext, useDataValueContext } from '../contexts/DataContext';
import { OptProps } from '../interface/OptProps';
import { createCustomTooltip } from '../utils/chartUtils';

export default function useTooltip() {
  const { timeList, idList, barValueList, areaValueList } =
    useDataValueContext();
  const { selectedID } = useDataIDContext();

  function selectBarColor({ dataPointIndex }: { dataPointIndex: number }) {
    if (idList[dataPointIndex] === selectedID) {
      return RED;
    }
    return LIGHT_GREEN;
  }
  const tooltip = {
    custom: (opt: OptProps) => {
      const areaColor = opt.w.globals.colors[0];
      const index = opt.dataPointIndex;
      const barColor = selectBarColor({ dataPointIndex: index });
      const timestamp = timeList[index];
      const barValue = barValueList[index];
      const areaValue = areaValueList[index];
      const id = idList[index];
      return createCustomTooltip({
        timestamp,
        barValue,
        areaValue,
        id,
        areaColor,
        barColor,
      });
    },
  };
  return tooltip;
}
