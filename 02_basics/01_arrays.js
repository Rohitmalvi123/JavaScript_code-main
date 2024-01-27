// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagtaj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

//// Array methods

// myArr.push(6) // Add end value
// myArr.push(7) // Add end value
// myArr.pop() // Remove end value

// myArr.unshift(9) // Add start value
// myArr.shift() // Remove Starting  value

// console.log(myArr.includes(9)); // boolean output
// console.log(myArr.indexOf(3)); // index position show

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); // typeof change is string type

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C", myArr);