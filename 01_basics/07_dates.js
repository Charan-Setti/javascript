// dates

let myDate = new Date()
console.log(myDate.toString()); // Thu Nov 14 2024 04:04:07 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Thu Nov 14 2024
console.log(myDate.toISOString()); // 2024-11-14T04:04:07.519Z
console.log(myDate.toJSON()); // 2024-11-14T04:04:07.519Z
console.log(myDate.toLocaleDateString()); // 11/14/2024
console.log(myDate.toLocaleString()); // 11/14/2024, 4:04:07 AM
console.log(myDate.toTimeString()); // 04:04:07 GMT+0000 (Coordinated Universal Time)

console.log(typeof myDate);

let createOwnDate1 = new Date(2022, 11, 6)
let createOwnDate2 = new Date(2022, 11, 6, 5, 34)
let createOwnDate3 = new Date("2022-12-6")
let createOwnDate4 = new Date("12-06-2022")
console.log(createOwnDate1.toString());
console.log(createOwnDate2.toString());
console.log(createOwnDate3.toString());
console.log(createOwnDate4.toString());

 let myTimeStamp = Date.now()

 console.log(myTimeStamp);
 console.log(createOwnDate1.getTime());
 console.log(Math.floor(Date.now()/1000));
 
 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth() + 1);
 console.log(newDate.getDay());
 
 newDate.toLocaleString('default',{
    weekday: "long"
 })
 