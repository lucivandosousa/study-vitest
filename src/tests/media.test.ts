import { media } from "../functions/media";
import { describe, expect, it } from 'vitest';

describe('function media', () => {
  it('should return 5.5', () => {
    expect(media(5, 6)).toBe(5.5);
  });

  it('should return 6.5', () => {
    expect(media(6, 7)).toBe(6.5);
  });

  it('should not return 7.5', () => {
    expect(media(8, 8)).not.toBe(7.5);
  });
})