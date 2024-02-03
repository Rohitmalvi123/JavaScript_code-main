const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map( (num) => {
//     return num + 10
// })

// const newNums1 = []
// myNumbers.forEach( (item) => {
//     return newNums1.push(item + 10)
// } )
// console.log(newNums1);
// console.log(newNums);

//  map and filter
const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
