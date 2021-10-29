// Defaults

// TODO: Hardcoding these numbers for now
export const minorScaleUnit: number = 5;

// Minor Scale
export const minorScale = (
  /** Number of times the minorScaleUnit should be multipled */
  n: number = 1,

  /** The unit to append. Example 'px' or 'dp' */
  unit?: string,
) => {
  if (unit) {
    return `${minorScaleUnit * n}${unit}`;
  }

  return minorScaleUnit * n;
};

// Exports
export default minorScale;
