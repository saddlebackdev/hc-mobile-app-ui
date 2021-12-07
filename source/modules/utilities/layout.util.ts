/**
 * @method addHitSlop
 * Returns an object to be used as a value for hitslop
 * */
export const addHitSlop: Function = (
  top: number,
  right: number = top,
  bottom: number = top,
  left: number = right,
) => {
  return {
    top,
    right,
    bottom,
    left,
  };
};

// Exports
export default {
  addHitSlop,
};
