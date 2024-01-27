
function  sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");    
}

// sayMyName()

// function addTowNubers(number1, number2){

//     console.log(number1 + number2);
// }


// addTowNubers(3, "a")

function addTowNubers(number1, number2){

//  let result = number1 + number2
//  return result   
//  console.log("rohit");

return number1 + number2
}
const result = addTowNubers(3, 4)

// console.log("Result: ",result);

function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rohit"));
// console.log(loginUserMessage());

function calculateCreatPrice (val1, val2, ...num1) {
    return num1
}
 
// console.log(calculateCreatPrice(200, 400, 500, 2000));

const user = {
    username: "Rohit",
    price: 199
}

function handlObject(anyobject) { 
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handlObject(user)

handlObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValure(getArray){
    return getArray[1]
}
// console.log(returnSecondValure(myNewArray));
console.log(returnSecondValure([200, 500, 400, 700]));
