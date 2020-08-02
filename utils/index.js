export const handlePixels = value => {
  if (typeof value === 'number') return `${value}px`;
  return value;
};
