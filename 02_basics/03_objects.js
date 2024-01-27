// singleton
// Object.create


////// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Rohit",
    "full name": "Rohit Haribhau Malvi",
    [mySym]: "mykey1",
    age: 23,
    location: "virar",
    email: "malvirohitabcd@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Rohitmalvi@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "Rohitmalvi@gmail.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());