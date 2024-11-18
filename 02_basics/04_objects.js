// const user = new Object()
const user = {}

user.id = "abc123"
user.name = "Charan"
user.isLoggedIn = false

const regularUser = {
    email: 'cha@gmail.com',
    fullname: {
        userfullname: {
            firstname: "Charan",
            lastname: "Setti"
        }
    }
}

console.log(user);
console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign( obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1,...obj2}

console.log(obj3);


const users = [
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "cr@gmail.com"
    },
    {
        id: 1,
        email: "cn@gmail.com"
    }
]

users[1].email
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "Js",
    price: "499",
    coursementor: "John"
}

// course.mentor 
const {coursementor: mentor} = course 
// console.log(coursementor);
console.log(mentor);

/*

1. To extract value from object => const {keyname} = object name;
2. To rename keyname for using more times => const {keyname: new name } = object name;
3. JSON is a collection of key-value pairs just like object and a JSON array is an ordered list of value.

*/

// {
//     "name": "Charan",
//     "coursename": "Js",
//     "price": "349"
// }

[
    {},
    {},
    {}
]




