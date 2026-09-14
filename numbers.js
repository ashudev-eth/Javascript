const PI = Math.PI;

console.log(PI);
// 3.141592653589793

// Math.PI is a built-in constant that stores the value of π
// const PI = Math.PI

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81));

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(1, 3, 4, 5, 6, 4, 32, -5)); // -5 returns the minimum value

console.log(Math.max(4, 5, 5, 4, 32, 23, 433, 324, 2422, -7)); //return 433

// const randNum = Math.random()        // creates random number between 0 to 0.999999

// console.log(randNum);

// lets us create random number between 0 to 10

const num = Math.floor(Math.random() * 11); // creates rnadom number bwteeen 0 and 10
console.log(num);



// absoute value 

console.log(Math.abs(-10)); //10 

// square root 

console.log(Math.sqrt(100));  //10

console.log(Math.sqrt(2));  // 1.4142135623730951


// Power



console.log(Math.pow(3,4));  // whrer the 3 is base and 4 is exponent matlab 3 ka power 4 

console.log(Math.pow(2,2));


console.log(Math.E);  // 2.718281828459045 euler constent or number like PI


console.log(Math.log(2));   // 0.6931471805599453   means e ko kitna power de ki 2 aa jaye bas yahi hai isska matlah moting more 

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

