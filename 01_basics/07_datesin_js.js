// Dates 

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString()); // Output - Tue Jan 09 2024 11:58:30 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Output - Tue Jan 09 2024
// console.log(myDate.toLocaleString()); // Output - 1/9/2024, 11:50:46 AM
// console.log(typeof myDate); // object

// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate.toDateString()); // Output - Mon Jan 23 2023, automatic create day

// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate.toLocaleString()); // Output - 1/23/2023, 5:03:00 AM

// let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toLocaleString()); // Output - 1/14/2023, 12:00:00 AM

let myCreateDate = new Date("1-14-2023")
// console.log(myCreateDate.toLocaleString()); // Output - 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long"
})