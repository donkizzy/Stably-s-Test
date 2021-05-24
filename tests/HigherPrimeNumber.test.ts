import { highestPrimeNumber,isPrime } from '../src/utils/HighestPrimeNumber';

describe('Test for prime number',() =>{
    test('Test for whole numbers',() => {
        expect(isPrime(7)).toBeTruthy();
       
    });
    test('Test for zero',() => {
        expect(isPrime(0)).toBeFalsy();
    });
    test('Test for 1',() => {
        expect(isPrime(1)).toBeFalsy();
    });
    test('Test for numbers less than 0',() => {
        expect(isPrime(-1)).toBeFalsy();
    });
    test('Test for 2 as the first prime number',() => {
        expect(isPrime(2)).toBeTruthy();
    });
});

describe('Tests for Highest Prime Number lesser than a number',() =>{

    test('Tests for Highest Prime Number as a whole number',() => {
        expect(highestPrimeNumber(55)).toBe(53);
    });
    test('Tests for Highest Prime Number for 1',() => {
        expect(highestPrimeNumber(1)).toBe(0);
    });
    test('Tests for Highest Prime Number for 0',() => {
        expect(highestPrimeNumber(0)).toBe(0);
    });
    test('Tests for Highest Prime Number for numbers less than 0',() => {
        expect(highestPrimeNumber(-5)).toBe(0);
    });
    test('Tests for Highest Prime Number lesser than a number',() => {
        expect(highestPrimeNumber(5003)).toBe(4999);        
    });
    test('Tests for Highest Prime Number as a large whole number',() => {
        expect(highestPrimeNumber(273735)).toBe(273727);
        
    });
});
