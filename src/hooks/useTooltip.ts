import Tooltip from '../components/Tooltip';
import { TooltipProps } from '../interface/Tooltip';

export default function useTooltip() {
  const tooltip = {
    custom: (opt: TooltipProps) => Tooltip(opt),
  };
  return tooltip;
}
