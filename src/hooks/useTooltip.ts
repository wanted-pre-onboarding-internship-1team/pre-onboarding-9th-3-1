import { useDataValueContext } from '../contexts/DataContext';
import { createCustomTooltip } from '../utils/chartUtils';

export default function useTooltip() {
  const { timeList, idList, barValueList, areaValueList } =
    useDataValueContext();
  const tooltip = {
    custom: (opt: any) =>
      createCustomTooltip({
        opt,
        timeList,
        barValueList,
        areaValueList,
        idList,
      }),
  };
  return tooltip;
}
