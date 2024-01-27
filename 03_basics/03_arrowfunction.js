const user = {
    username: "Rohit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Aarya"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Rohit"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//          let username = "Rohit"
//         console.log(this);
//     }
    
//     chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(4, 5));

// const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) =>  ({username: "Rohit"})


console.log(addTwo(4, 5));