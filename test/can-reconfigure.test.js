import { describe, expect, it } from 'vitest';
import canReConfigure from '../src/can-reconfigure';

describe('can-reconfigure', () => {
  it('should be a function', () => {
    expect(canReConfigure).toBeTypeOf('function');
  });

  it('should throw if either of the two parameters are missing', () => {
    expect(() => canReConfigure()).toThrow();
  });

  it('should throw if first parameter is not a string', () => {
    expect(() => canReConfigure(2)).toThrow();
  });

  it('should throw if second parameter is not a string', () => {
    expect(() => canReConfigure('a')).toThrow();
  });

  it('should return a boolean', () => {
    expect(canReConfigure('a', 'b')).toBeTypeOf('boolean');
  });

  it('should return false if strings provided have different leghts', () => {
    expect(canReConfigure('abc', 'ed')).toBe(false);
    expect(canReConfigure('aab', 'ab')).toBe(false);
  });

  it('should return false if strings provided have different number of unique letters', () => {
    expect(canReConfigure('abc', 'dde')).toBe(false);
    expect(canReConfigure('abc', 'ddd')).toBe(false);
    expect(canReConfigure('abb', 'ddd')).toBe(false);
  });

  it('should return false if strings has different order of trasnformation', () => {
    expect(canReConfigure('XBOX', 'XXBO')).toBe(false);
  });
});
