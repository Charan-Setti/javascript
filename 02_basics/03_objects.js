// singleton
// Object.create

// object literals

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
