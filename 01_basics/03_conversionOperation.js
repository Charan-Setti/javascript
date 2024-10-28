let score = '45cn'


// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number (score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/* 
Conversion:

String to NUmber:- 
-> In JS if 45 is declared as string "45" it is converted into number as 45 (its type is number and if we try to print we get 45)
    -- "45" => 45
-> and also if we convert this string "45cn" it gets converted into number (its type is number but if we try to print it we get NaN)
    -- "45cn" => NaN

null to Number:-
-> null converts into number (its type is number and if we try to print it gives 0)
    -- null => 0

undefined to Number:
-> undefined converts into number 
    -- undefined => NaN

boolean to Number:
    -- true => 1
    -- false => 0


*/

let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*

Boolean to Other type:

    -- 1 => true; 0 => false
    -- "" => false
    -- "cn" => true
    -- null => false
    -- undefined => false
*/

let number = 45.9

let stringNumber = String(number)
// console.log(stringNumber);
// console.log(typeof(stringNumber));


// **************** Operations **************** //

let value = 4
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " charan"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(3 + 4 * 5 % 3);

// console.log(+true); // 1
// // console.log(true+); // error
// console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
console.log(gameCounter);
gameCounter++;
// ++gameCounter;

console.log(gameCounter);

