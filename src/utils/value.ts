export const createValueData = (
  minValue: number,
  maxValue: number,
  splitAmount: number
) => {
  const values = [];
  const gap = (maxValue - minValue) / splitAmount;
  for (let i = 0; i <= splitAmount; i++) {
    values.push(Math.round(minValue + i * gap));
  }
  return values;
};

export const calcBottom = (idx: number, splitAmount: number) => {
  return `${(idx / splitAmount) * 100}%`;
};
