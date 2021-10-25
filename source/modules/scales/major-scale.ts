// Defaults

// TODO: Hardcoding these numbers for now
export const majorScaleUnit: number = 11;

// Major Scale
export const majorScale = (n: number = 1, unit: string = 'px') => {
  if (unit) {
    return `${majorScaleUnit * n}${unit}`;
  }

  return majorScaleUnit * n;
};

// Exports
export default majorScale;
