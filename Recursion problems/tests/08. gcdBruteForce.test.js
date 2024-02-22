const { gcd } = require('../08. gcdBruteForce');

describe('GCD Brute Force', () => {
  test('gcd of 0 and 1 is 1', () => {
    expect(gcd(0, 1)).toBe(1);
  });

  test('gcd of 7 and 7 is 7', () => {
    expect(gcd(7, 7)).toBe(7);
  });

  test('gcd of 17 and 34 is 17', () => {
    expect(gcd(17, 34)).toBe(17);
  });

  test('gcd of 12 and 18 is 6', () => {
    expect(gcd(12, 18)).toBe(6);
  });

  test('gcd of 15 and 25 is 5', () => {
    expect(gcd(15, 25)).toBe(5);
  });

  test('gcd of 17 and 23 is 1', () => {
    expect(gcd(17, 23)).toBe(1);
  });
});
