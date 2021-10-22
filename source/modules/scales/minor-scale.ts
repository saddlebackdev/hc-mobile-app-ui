// Defaults

// TODO: Hardcoding these numbers for now
export const minorScaleUnit: number = 5;

// Minor Scale
export const minorScale = (n: number = 1, unit?: string) => {
  if (unit) {
    return `${minorScaleUnit * n}${unit}`;
  }

  return minorScaleUnit * n;
};

// Exports
export default minorScale;
