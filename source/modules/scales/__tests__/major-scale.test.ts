// npx jest ./source/modules/scales/__tests__/major-scale.test.js

import majorScale, {majorScaleUnit} from '../major-scale';

describe('majorScale()', () => {
  it('should return the major scale unit when nothing is passed', () => {
    expect(majorScale()).toBe(majorScaleUnit);
  });

  it('should return the value of "n" multiplied with major scale unit', () => {
    expect(majorScale(2)).toBe(majorScaleUnit * 2);
  });

  it('should return the major scale unit with the unit type', () => {
    expect(majorScale(1, 'px')).toBe(`${majorScaleUnit}px`);
  });
});
