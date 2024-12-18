import { it } from '@jest/globals';

import { toRoman } from './roman-numerals';

it('should correctly convert 1 to I', () => {
  expect(toRoman(1)).toBe('I');
});
