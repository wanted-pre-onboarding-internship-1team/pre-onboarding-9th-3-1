type TooltipPrams = {
  series: any;
  seriesIndex: number;
  dataPointIndex: number;
  w: any;
};

const createToolTip = ({
  options,
  id,
}: {
  options: TooltipPrams;
  id: string[];
}) => {
  const { series, dataPointIndex, w } = options;
  const barColor = w.globals.colors[0];
  const areaColor = w.globals.colors[1];
  const barValue = series[0][dataPointIndex].toLocaleString();
  const areaValue = series[1][dataPointIndex].toLocaleString();
  const idValue = id[dataPointIndex];
  const time = w.config.xaxis.categories[dataPointIndex];

  return `
  <div style="border-radius: 5px; box-shadow: 2px 2px 6px -4px #999; cursor: default; font-size: 14px; border: 1px solid #e3e3e3; background: #fff; overflow: hidden; white-space: nowrap;">
    <div style="padding: 6px; margin-bottom: 4px; background: #eceff1; border-bottom: 1px solid #ddd;">
      <span>${idValue}</span> / 
      <span style="font-size: 12px; opacity: 0.8;">${time}</span>
    </div>
    <ul>
      <li style="display: flex; align-items: center; justify-content: left; padding: 6px 10px 5px;">
        <span style="width: 12px; height: 12px; position: relative; top: 0px; margin-right: 10px; border-radius: 50%; background-color: ${barColor};" aria-hidden="true"></span>
        <span>Bar: </span>
        <strong style="display: inline-block; font-weight: 600; margin-left: 5px;">${barValue}</strong>
      </li>
      <li style="display: flex; align-items: center; justify-content: left; padding: 6px 10px 5px;">
        <span style="width: 12px; height: 12px; position: relative; top: 0px; margin-right: 10px; border-radius: 50%; background-color: ${areaColor};" aria-hidden="true"></span>
        <span>Area: </span>
        <strong style="display: inline-block; font-weight: 600; margin-left: 5px;">${areaValue}</strong>
      </li>
    </ul>
  </div>
  `;
};

export default createToolTip;
