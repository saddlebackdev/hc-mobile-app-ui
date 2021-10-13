// Defaults

// TODO: Hardcoding these numbers for now
const majorScaleUnit: number = 11;

// Major Scale
export const majorScale = (n: number = 1, unit?: string) => {
  if (unit) {
    return `${majorScaleUnit * n}${unit}`;
  }

  return majorScaleUnit * n;
};

// Exports
export default majorScale;
