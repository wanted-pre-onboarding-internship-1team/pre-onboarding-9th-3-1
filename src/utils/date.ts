export const createZeroTimeStamp = (date: string) => {
  const timeStamp = new Date(date);
  const zeroSecondDate =
    timeStamp.getFullYear() +
    '-' +
    (timeStamp.getMonth() + 1) +
    '-' +
    timeStamp.getDate() +
    ' ' +
    timeStamp.getHours() +
    ':' +
    timeStamp.getMinutes();
  return new Date(zeroSecondDate);
};
