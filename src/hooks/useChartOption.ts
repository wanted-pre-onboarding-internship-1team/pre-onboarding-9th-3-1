import { fill, stroke } from '../consts/chartOption';
import useAxis from './useAxis';
import useColors from './useColors';
import useTooltip from './useTooltip';
import { ApexOptions } from 'apexcharts';

export default function useChartOption() {
  const tooltip = useTooltip();
  const colors = useColors();
  const { yaxis, xaxis } = useAxis();

  const chartOptions: ApexOptions = {
    fill,
    yaxis,
    xaxis,
    colors,
    stroke,
    tooltip,
  };

  return { chartOptions };
}
