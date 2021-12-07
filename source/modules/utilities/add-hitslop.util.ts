// Add Hit Slop Params
interface IAddHitSlopParams {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

/**
 * @method addHitSlop
 * Returns an object to be used as a value for hitslop
 * */
export const addHitSlop: Function = (
  top,
  right = top,
  bottom = top,
  left = right,
  // eslint-disable-next-line max-params
): IAddHitSlopParams => {
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
