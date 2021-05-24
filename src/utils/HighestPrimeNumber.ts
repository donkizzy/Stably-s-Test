

const highestPrimeNumber = (num: number): number => {
    for (let i = num - 1; i >= 0; i--) {
      if (isPrime(i)) {
        return i;
      }
    }
    return 0;
  };
  
  const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    const numsQrt = Math.sqrt(num);
    for (let i = 2; i <= numsQrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  
  export   {highestPrimeNumber, isPrime} ;