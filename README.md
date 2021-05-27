## Highest Prime Number Less Than a Number ✔️

A simple prime checker system that allows users to get the highest prime number lower than a certain number
---

## Table Of Contents

- [Frontend](https://prime-checker-frontend.herokuapp.com/) 
- [Design Decisions](nfdjfj) 
- [Learning](goog)

## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node

-   #### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

-   #### Node installation on Ubuntu

    You can install nodejs and npm easily with apt install, just run the following commands.

        $ sudo apt install nodejs
        $ sudo apt install npm

-   #### Other Operating Systems
    You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.1.0

    $ npm --version
    7.11.2

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

## Install

    $ git clone https://github.com/donkizzy/Stably-s-Test.git
    $ cd Stably-s-Test
    $ npm install


## Running the project - development

    $ npm run dev 

## Running the project - production

    $ npm run start 
     

## Running Tests


Run the tests
    
    $ npm test 



## Libraries Used

- [Express](http://expressjs.com/) - Web framework

## Desgin Decision
The problem was to find the highest prime number less than the  number itself ,the first step was to be able to identify prime numbers then  be able to decrease the numbers gradually and check if they were preime numbers and the first prime number that we seek 

# But What is a Prime Number  ?
It is a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).

we could do something like this 

                        const isPrime = (num: number): boolean => {
                            if (num < 2) return false;
                            for (let i = 2; i <= num; i++) {
                            if (num % i === 0) return false;
                            }
                        return num > 1;
  };

Since 0 and 1 aren't prime numbers so we start our loop from 2  and find the  modulus of the number  with the current loop index  and whenever it is greater than 0  it means it is a divisible number and doesn't match the definition of a prime number 

The time complexity of the above algorithm is O(n)  ,the down side to this approach is that if we have 100,000 that means we have to loop 998000 times, thats a lot of looping  so i looked for a way to cut down the loop time and  found a solution 

if we find the square root of the input and loop to that point alone we can achive the same result of getting the prime number and at the same time cutting down the loop time of the number to just its a square root which is waaayy shorter thus more efficient  ,lets look  at this in code

                const isPrime = (num: number): boolean => {
                    if (num < 2) return false;
                    const numsQrt = Math.sqrt(num);
                    for (let i = 2; i <= numsQrt; i++) {
                    if (num % i === 0) return false;
                    }
                return num > 1;
                };

 The time complexity of the above algorithm is O(sqrt(n))

 The next part of the  code is decreaing to check for the highest prime number , for this part i chose a decreasing for loop since we are looking for the highest possble number after the number

            const highestPrimeNumber = (num: number): number => {
                for (let i = num - 1; i >= 0; i--) {
                    if (isPrime(i)) {
                    return i;
                }
            }
            return 0;
            };

            
