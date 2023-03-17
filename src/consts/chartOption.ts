export const fill = {
  gradient: {
    type: 'vertical',
    shadeIntensity: 1,
    opacityFrom: 0.1,
    opacityTo: 1,
    stops: [0, 100],
  },
};
export const areaYaxis = {
  seriesName: 'area',

  axisTicks: {
    show: true,
  },
  axisBorder: {
    show: true,
  },
  title: {
    text: 'area',
  },
};

export const barYaxis = {
  opposite: true,
  seriesName: 'bar',
  axisTicks: {
    show: true,
  },
  axisBorder: {
    show: true,
  },
  title: {
    text: 'bar',
  },
};

export const stroke = {
  width: [2, 1],
};
