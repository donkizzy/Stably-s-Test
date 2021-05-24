import { highestPrimeNumber,isPrime } from '../src/utils/HighestPrimeNumber';

test('Test for prime number',() => {
    expect(isPrime(7)).toBeTruthy();
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(-1)).toBeFalsy();
    expect(isPrime(2)).toBeTruthy();
});

test('Tests for Highest Prime Number lesser than a number',() => {
    expect(highestPrimeNumber(55)).toBe(53);
    expect(highestPrimeNumber(1)).toBe(0);
    expect(highestPrimeNumber(0)).toBe(0);
    expect(highestPrimeNumber(-5)).toBe(0);
    expect(highestPrimeNumber(7)).toBe(5);
});