// Defaults

// TODO: Hardcoding these numbers for now
export const majorScaleUnit: number = 11;

// Major Scale
export const majorScale = (
  /** Number of times the majorScaleUnit should be multipled */
  n: number = 1,

  /** The unit to append. Example 'px' or 'dp' */
  unit?: string,
) => {
  if (unit) {
    return `${majorScaleUnit * n}${unit}`;
  }

  return majorScaleUnit * n;
};

// Exports
export default majorScale;
