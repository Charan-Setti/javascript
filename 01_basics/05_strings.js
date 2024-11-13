const name = "charan"
const age = 22

// console.log(name + age + " value");

console.log(`Hello my name is ${name} and my age is ${age}`);

const myName = new String('Charan Setti')

console.log(myName);
console.log(myName[5]);
console.log(myName.__proto__);


console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(7));
console.log(myName.indexOf('n'));

const newString = myName.substring(0,6)
console.log(newString);

const anotherString = myName.slice(-8,-4)
console.log(anotherString);

const newString1 = "            charan        "
console.log(newString1);
console.log(newString1.trim());

const url = 'https://charan.com/charan%20setti'

console.log(url.replace('%20','_'));

console.log(url.includes('sai'));

const newString2 = "charan-sai-setti"

console.log(newString2.split('-'));
