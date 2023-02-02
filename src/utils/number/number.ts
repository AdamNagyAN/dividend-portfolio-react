export const numberToPercent = (number?: number): string => {
  if (!number) {
    return 'NaN';
  }
  const percentFormatter = new Intl.NumberFormat('us-US', {
    style: 'percent',
    maximumFractionDigits: 2,
  });
  return percentFormatter.format(number);
};
