// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34353452425223254222515n


//  Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
 let myObj = {
    name: "Rohit",
    age: 23,
}

const myFunction  = function() {
    console.log("Hello World");
}

console.log(typeof myObj);


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "RohitMalvidotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rohit@google.com"

console.log(userOne.email);
console.log(userTwo.email);