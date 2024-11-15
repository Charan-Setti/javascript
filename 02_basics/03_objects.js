// singleton
// Object.create

// object literals

/*

Object Literal: Naturally supports Singleton pattern by creating a single instance and providing global access through a closure. It’s a straightforward approach for ensuring only one instance.

Constructor: By default, allows the creation of multiple instances. To implement Singleton behavior with a constructor, additional logic is needed to ensure only one instance is created and managed.

Thus, while object literals inherently create a single instance, constructors require extra steps to achieve the same Singleton behavior

*/

const sym = Symbol("one")
const sym2 = Symbol("hi")

const user = {
    name: "Charan",
    "full name": "Charan Setti",
    age: 18,
    sym: "one", // if we use sym here it cosidered as string
    [sym2]: "two", // and here it is used as symbol because of "[]"
    location: "Hyderabad",
    email: "c@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Wednesday","Friday"]
}

console.log(user.name);
console.log(user["name"]); // preferable to use this syntax
// console.log(user."full name"); // error
// console.log(user.full name); // error
console.log(user["full name"]);
console.log(user.sym);
console.log(typeof user.sym);
console.log(user[sym2]);
console.log(typeof user.sym2);

user.email = "cha@gmail.com"
// Object.freeze(user)
user.email = "setti@gmail.com"
console.log(user);

user.greeting = function(){
    console.log("Hello user");
    
}
user.greeting2 = function(){
    console.log(`Hello user, ${this.name}`);
    
}

console.log(user.greeting());
console.log(user.greeting2());
