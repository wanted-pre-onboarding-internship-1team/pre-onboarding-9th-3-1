import { CharUtilProps } from '../interface/CharUtil';

export function createCustomTooltip({
  timestamp,
  barValue,
  areaValue,
  id,
  areaColor,
  barColor,
}: CharUtilProps) {
  return `
        <ul class='arrow-box'>
            <li class='arrow-box__item'>
                ${timestamp}
            </li>
            <li class='arrow-box__item'>
                <div style="background:${areaColor}; width:10px; height:10px; border-radius:10px"></div>
                <div>bar: </div>
                <div>${barValue}</div>
            </li>
            <li class='arrow-box__item'>
                <div style="background:${barColor}; width:10px; height:10px; border-radius:10px"></div>
                <div>area: </div>
                <div>${areaValue}</div>
            </li>
            <li class='arrow-box__item'>
                
                <div>지역: </div>
                <div>${id}</div>
            </li>
        </ul>
    `;
}
