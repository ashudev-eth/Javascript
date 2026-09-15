// ### Ternary Operators

let age = 17;
let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

let number = 7;

let answer = number % 2 === 0 ? "Even" : "Odd";
console.log(answer);

// Date Object

// const now = new Date();

// console.log(now.getFullYear());

// console.log(now.getMonth());

// console.log(now.getDate());

// console.log(now.getDay());

// const time = new Date(); //
// console.log(time.getTime());

const now = new Date();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56
