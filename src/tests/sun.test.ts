import { sun } from "../functions/sun";
import { describe, expect, it } from 'vitest';

describe('function sun', () => {
  it('should return 3', () => {
    expect(sun(1, 2)).toBe(3);
  });

  it('should return 5', () => {
    expect(sun(2, 3)).toBe(5);
  });

  it('should not return 7', () => {
    expect(sun(3, 5)).not.toBe(7);
  });
});
