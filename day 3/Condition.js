// // Conditions can be implementing using the following ways:

// /*if
// if else
// if else if else
// switch
// ternary operator
// */

// let num = -3;

// if (num > 0) {
//   console.log(`${num} is the positive number`);
// } else {
//   console.log(`${num} is not positive number`);
// }

// let isRaining = true;
// if (isRaining) {
//   console.log("You need a rain coat.");
// } else {
//   console.log("No need for a rain coat.");
// }
// // You need a rain coat.

// isRaining = false;
// if (isRaining) {
//   console.log("You need a rain coat.");
// } else {
//   console.log("No need for a rain coat.");
// }
// // No need for a rain coat.

// let a = 0;

// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a < 0) {
//   console.log(`${a} is a negative number`);
// } else if (a == 0) {
//   console.log(`${a} is zero`);
// } else {
//   console.log(`${a} is not a number`);
// }

// let weather = "sunny";

// if (weather === "rainy") {
//   console.log("You need a rain coat.");
// } else if (weather === "sunny") {
//   console.log('Go out freely.');
// } else if (weather === "cloudy") {
//   console.log("It might be cold, you need a jacket.");
// } else {
//   console.log("No need for rain coat.");
// }

//Switch

/*switch (caseValue){
  case 1: 
  // code
  break 
  case 2:
    // code
    break
    case 3:
      // code
      break
      default:
        // code
}
        */

// Example

// let weather = 'cloudy'

// switch(weather) {
//   case "rainy":
//     console.log('You need a rain coat.')
//     break
//     case "cloudy":
//     console.log('It might be cold, you need a jacket.')
//     break
// case "sunny":
//   console.log('Go our freely')
//   break
//   default:
//     console.log(' No need for rain coat.');

// }

let dayUserInput = prompt("What day is today ?");

switch (dayUserInput) {
  case "monday":
    console.log("Today is Monday");

    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;

  default:
    console.log("It is not a week day.");
}

let age = prompt("Enter your age");

if (age > 18) {
  console.log("You are old enough to drive.");
} else if (age < 18) {
  console.log("You are old enough to drive.");
} else {
  let yearLeft = 18 - age;
  console.log(`You need to wait ${yearLeft} more  years to turn 18.`);
}
