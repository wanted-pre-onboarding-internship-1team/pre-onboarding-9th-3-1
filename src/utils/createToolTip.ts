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
  const idValue = id[dataPointIndex];
  const time = w.config.xaxis.categories[dataPointIndex];
  const colors = w.globals.colors;
  const configSeries = w.config.series;

  return `
  <div style="border-radius: 5px; box-shadow: 2px 2px 6px -4px #999; cursor: default; font-size: 14px; border: 1px solid #e3e3e3; background: #fff; overflow: hidden; white-space: nowrap;">
    <div style="padding: 6px; margin-bottom: 4px; background: #eceff1; border-bottom: 1px solid #ddd;">
      <span>${idValue}</span> / 
      <span style="font-size: 12px; opacity: 0.8;">${time}</span>
    </div>
    <ul>
      ${series.reduce((acc: string, crr: string, idx: number) => {
        if (!!crr.length) {
          return (acc += `
            <li style="display: flex; align-items: center; justify-content: left; padding: 6px 10px 5px;">
              <span style="width: 12px; height: 12px; position: relative; top: 0px; margin-right: 10px; border-radius: 50%; background-color: ${
                colors[idx]
              };" aria-hidden="true"></span>
              <span>${configSeries[idx].name}: </span>
              <strong style="display: inline-block; font-weight: 600; margin-left: 5px;">${crr[
                dataPointIndex
              ].toLocaleString()}</strong>
            </li>
          `);
        }
        return acc;
      }, '')}

     
    </ul>
  </div>
  `;
};

export default createToolTip;
