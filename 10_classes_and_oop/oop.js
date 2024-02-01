// object literal

const user = {
  username: "Rohit",
  loginCount: 8,
  signdIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

//+++++++++++ constructer function +++++++++++++++

// const promiseOne = new promise();
// const date = new Date();

function User(username, logintCount, isLoggedIn) {
  this.username = username;
  this.loginCount = logintCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const userOne = new User("Rohit", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);
