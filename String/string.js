// Strings are texts, which are under single , double, back-tick quote. To declare a string,
//  we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote.

let space = " ";
let firstName = "Jyoti";
let lastName = "Tripathi"
let age = "17"
let country = "Bharat";
let city = "Delhi";
let language = "Javascript";
let job = "teacher";
let quote = " The saying is believing is not correct in 2020";
let quotWithBackTick = `The saying, 'Seeing is Believing ' is not correct in 2020`;


// String Concatenation

// Connecting two or more strings together is called concatenation. Using the strings declared in the previous String section:

     /*let fullName = firstName + lastName; // concatenation, merging two sting together
     console.log(fullName);
       */

    //  We can concatenate strings in different ways.



let fullName = firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' +  country;
console.log(personInfoOne);




const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)


let line = " I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"

console.log(line);


let name = "tera bhai \nseedhe "
console.log('Days\tTopics\tExercises')

console.log(name);


// Template Literals (Template Strings)



// `String literal text`
// `String literal text ${expression}`


console.log(`The sum of 2 and 3 is 5`);       //   // statically writing the data
let a = 2;
let b = 3;

console.log(`The sum of ${a} and ${b} is ${a+b}`);   // injecting the data dynamically



// example 2


/*let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)   */


//    let c= 2
//    let d = 3

//    console.log(`${c} is greater than ${b}: ${a > b}`);
   


// String Methods

let js = "Javascript"
console.log(js.length);   // used to find length of string 


// console.log(js[3]);  used for accessing elements of string 


console.log(js.toUpperCase());
console.log(js.toLowerCase());

console.log(js.substring(4,10));  // kaha se kaha tak print karne ke liye use kar sakte hai

console.log(js.substr(4,5));

let ash = "1,3,4,5,5,4,3,3"
console.log(ash.split());

// split(",")   // comma par split
// split(" ")   // space par split
// split("")    // har character par split
// split()      // separator nahi diya → poori string ek element


// let string = '   30 Days Of JavaScript  '

// console.log(string.trim(' ')); // remove space at begiing and end

let string = '30 Days Of JavaScript'


console.log(string.includes('Days'));


console.log(string.replace('Javascript','Python'));

// 1. indexOf()
// Kisi character ya word ki FIRST occurrence ka index batata hai.

let str = "hello";

console.log(str.indexOf("l")); 
// Output: 2
// "l" pehli baar index 2 par mila.
// h = 0, e = 1, l = 2


// 2. lastIndexOf()
// Kisi character ya word ki LAST occurrence ka index batata hai.

console.log(str.lastIndexOf("l"));
// Output: 3
// "l" last baar index 3 par mila.
// hello → h(0) e(1) l(2) l(3) o(4)

// let hello= "Ind"

// console.log(hello.concat("ia", " is"," beutyful"));


// let string = '30'
// console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

// let country = 'Fin'
// console.log(country.concat("land")) // Finland


// String to Int   data type convertion


// Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.



let stringNumber = '10'
// let Number =  parseInt(stringNumber) 

let numInt = Number(stringNumber)


console.log(numInt);


// let num = '10'
// let numInt = +num

console.log(numInt) // 10



// let num = '9.81'
// let numFloat = parseFloat(num)

// console.log(numFloat) // 9.81



// let num = '9.81'
// let numFloat = Number(num)

// console.log(numFloat) // 9.81


// let num = 9.81
// let numInt = parseInt(num)

// console.log(numInt) // 9



let count = "'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence."


console.log(count.match(/Love/g).length);


let findWord = 'You cannot end a sentence with because because because is a conjunction'

console.log(findWord.match(/because/gi).length);

