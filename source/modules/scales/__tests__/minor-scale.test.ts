// npx jest ./source/modules/scales/__tests__/minor-scale.test.js

import minorScale, {minorScaleUnit} from '../minor-scale';

describe('minorScale()', () => {
  it('should return the minor scale unit when nothing is passed', () => {
    expect(minorScale()).toBe(minorScaleUnit);
  });

  it('should return the value of "n" multiplied with minor scale unit', () => {
    expect(minorScale(2)).toBe(minorScaleUnit * 2);
  });

  it('should return the minor scale unit with the unit type', () => {
    expect(minorScale(1, 'px')).toBe(`${minorScaleUnit}px`);
  });
});
