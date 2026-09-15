// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// console.log('Number:', numbers)
// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)

// const arr = [
//     'Ram',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki'},
//     {skills: ['Html', 'Css', 'Js', 'React', 'Python'
//     ]}
// ] // arr containing different data types

// console.log(arr);

// create an array using split

let js = "JavaScript";
const charsINJavaScript = js.split("");

console.log(charsINJavaScript);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

const companies = companiesString.split(",");
console.log(companies);

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

const fruits = ["banana", "orange", "mango", "lemon"];

let firstFruit = fruits[0];
console.log(firstFruit);

secondFruit = fruits[1];
console.log(secondFruit); // orange

let lastFruit = fruits[3];
console.log(lastFruit); // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies

// console.log(webTechs)        // all the array items
// console.log(webTechs.length) // => to know the size of the array, which is 7
// console.log(webTechs[0])     //  -> HTML
// console.log(webTechs[6])     //  -> MongoDB

// let lasthuIndex = webTechs.length - 1
// console.log(webTechs[lasthuIndex]) // -> MongoDB

const webTechs = ["HTML", "JavaScript", "React", "Redux", "Node", "MongoDB"]; // list of web technologies

console.log(webTechs);
console.log(webTechs.length);
console.log(webTechs[0]);
console.log(webTechs[5]);

let lastIndex1 = webTechs.length - 1;
console.log(webTechs[lastIndex1]);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethipia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];


console.log(countries);
console.log(countries[0]);
console.log(countries[10]);


let lastIndex2 = countries.length-1;
console.log(countries [lastIndex2]);  // ese karenge tabhi hoga 






// An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.


const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers[0] = 0
numbers[1] = 1

console.log(numbers);



const countries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]


countries2[1] = "Japan"
countries2[0] = "India"


console.log(countries2);




const arr = Array()   // arr create emty one 

console.log(arr);

// const eightValueArr = Array(8)
// console.log(eightValueArr);


const eightValueArr = Array(8).fill('X')
// console.log(eightValueArr); 



const hello= Array()
console.log(hello);

const fiveValue = Array(5).fill('Y')
console.log(fiveValue);


const firstList = [1,2,3,4,5]
const secondList = [4,5,6]

const thirdList = firstList.concat(secondList)

console.log(thirdList) // 


const fruits2 = ['banana', 'orange', 'mango','lemon']
const Vegetables2 = ['tomato', 'Potato', 'Cabbage']

const fruitsAndvegetabls = fruits2.concat(Vegetables2)

console.log(fruitsAndvegetabls);


// let us check if a banana exists in the array

const fruits3 = ['banana', 'orange', 'mango', 'lemon']


let index = fruits3.indexOf('banana')

console.log(index);



if (index === -1) {
    console.log('This fruits does not exist in the array')}
     else{
        console.log('This fruits does exist in the array');
        
    }
    



    const number = ['1','2','3','4','5']

    console.log( number.toString());

    console.log(typeof number);
    

    // Joining array elements



    const numbers1 = [1, 2, 3, 4, 5]
console.log(numbers1.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook
    
  


// slice array elements 

const numbers2 = [1,2,3,4,5,6]

console.log(numbers2.slice());

console.log(numbers2.slice(1,4)); // [ 2, 3, 4 ]



// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

const numbers3 = [1,2,3,4,5,6]

numbers3.splice(0,1)
// console.log(numbers3);

// const fruits4 = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes']

// const result4 = fruits4.slice(1, 4)

// console.log(result4)
// console.log(fruits4)


// splice


// splice is used when you want to modify the original array

// array.splice(start, deleteCount)

// we can also add Elements 


// array.splice(start, deleteCount, item1, item2, ...)



const fruits5 = ['apple', 'Banan', 'Mango', 'Orange', 'grapes']

fruits5.splice(1,2)
console.log(fruits5); // [ 'apple', 'Orange', 'grapes' ]

const fruits6 = ['Apple', 'Banana', 'Orange']

fruits.splice(1, 0, 'Lichi')



// syntax
const arr2  = ['item1', 'item2','item3']
arr2.push('new item')
console.log(arr2)
// ['item1', 'item2','item3','new item']


const numbers7 = [1, 2, 3, 4, 5]
numbers7.pop() // -> remove one item from the end
console.log(numbers7) // -> [1,2,3,4]


const numbers8 = [1, 2, 3, 4, 5]
numbers8.shift() // -> remove one item from the beginning
console.log(numbers8) // -> [2,3,4,5]

const numbers5 = [1, 2, 3, 4, 5]
numbers5.unshift(0) // -> add one item from the beginning
console.log(numbers5) // -> [0,1,2,3,4,5]


const numbers6 = [1, 2, 3, 4, 5]
numbers6.reverse() // -> reverse array order
console.log(numbers6) // [5, 4, 3, 2, 1]

numbers6.reverse()
console.log(numbers6) // [1, 2, 3, 4, 5]




const webTechs2 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs2.sort()
console.log(webTechs2) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs2.reverse() // after sorting we can reverse it
console.log(webTechs2) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]



const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]