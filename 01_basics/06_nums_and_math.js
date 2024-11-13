const score = 430  // JS auto detects it as a number
console.log(score);

const balance = new Number(100) // Using Number Function to explicitly define number in JS
console.log(balance);

// Note: Number has comparatively less prototype properties (methods) than String

console.log(balance.toString().length);
console.log(balance.toFixed(2));

/*

Methods with examples:
1. balance.toString() // This converts a number into string
2. balance.toString().length // Once we convert it to String, all properties / methods of Strings are now open to us, such as length
3. balance.toFixed(2) // Used to reduce or round of to specific decimal values
    - Use Cases 
        a. After calculation of GST
        b. In Ecommerce website

*/

const number = 134.8966

console.log(number.toPrecision(4));

const num1 = 1000000
console.log(num1.toLocaleString('en-IN'));  // By default it converts into US standards "en-IN" Indian Standards

// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // Math.abs() (absolute number)--> converts the negative number to the positive number
console.log(Math.round(4.345));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4,9,7,8));

console.log(Math.random()); // Gives random value between 0 & 1 in decimals
console.log((Math.random()*10) + 1); // This assures that values are atleast 1 & more than 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/*

Formula for generating random number : Math.floor(Math.random() * (total no. in the range)) + min_number

For example : if you want to generate random number between 0 to 10, then min no. is 0, max no. is 10, total no. in the range is 11 ( max - min + 1), now putting to formula : 
Math.floor(Math.random() * (11)) + 0

*/

