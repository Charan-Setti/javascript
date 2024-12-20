
// basic comparision

// console.log(4 > 3)
// console.log(4 >= 3)
// console.log(4 < 3)
// console.log(4 == 3)
// console.log(4 != 3)


// comparing number and string it ddirectly converts the string number to number

// console.log("3" < 4);
// console.log(4 < "03");


// console.log(null > 0);
// console.log(null == 0);
// console.log(null < 0);
// console.log(null >= 0);

/*

he reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

null == null; // true
null == undefined; // true
Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero.

*/

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// ===

// comparing with === 

console.log("2" === 2);


