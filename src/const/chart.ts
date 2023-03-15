export const chartOption = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Flexsys',
    },
    tooltip: {
      callbacks: {
        title: (xDatapoint: any) => {
          return xDatapoint.raw;
        },
        label: (yDatapoint: any) => {
          if (yDatapoint.dataset.label === 'Area') {
            return yDatapoint.raw / AREA_NORMALIZE_VALUE;
          }
          return yDatapoint.raw;
        },
      },
    },
  },
};

export const AREA_NORMALIZE_VALUE = 100;
