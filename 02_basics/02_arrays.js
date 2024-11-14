const mravel_heros = ['spiderman', 'ironman', 'hulk']
const dc_heros = ['superman', 'flash', 'batman']

// mravel_heros.push(dc_heros)

// console.log(mravel_heros);
// console.log(mravel_heros[3][2]);

// const all_heros = mravel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...mravel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1,2,3,4,5,6,7,[4,7,[4,9]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Charan"));
console.log(Array.from("Charan"));
console.log(Array.from({name: "Charan"})); // note!!!

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
/*

1. push() method in array simply add the array as an new single entity in the existing array.
2. concat() method help us achieving a desisered output, like merging the two array, but the problems with concat are, It complicated to concat more then one array simultaneously and also It takes extra space and do the merging operation.
3. Despite push and concat we should use spread operator.
--> Intresting methods, isArray(), from() and of()

*/

const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
const Array4 = [1,3,9,19];
const concatAll = Array1.concat(Array2, Array3,Array4)
console.log(concatAll)