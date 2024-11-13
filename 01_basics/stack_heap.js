// Stack (Primitive), Heap (Non-Primitive)

let myName = "charan"
let anotherName = "Setti"

console.log(myName);
console.log(anotherName);

let user1 = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

console.log(user1);

let user2 = user1

user2.email = "charan@gmail.com"

console.log(user1);
console.log(user2);

/*

datatypes are based on memory allocation:
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

*/


