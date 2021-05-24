import { isPrime } from '../src/utils/HighestPrimeNumber';

test('Test for prime number',() => {
    expect(isPrime(7)).toBeTruthy();
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(2)).toBeTruthy();
});