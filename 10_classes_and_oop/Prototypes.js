// let myName = "Rohit     ";
// let mychannel = "chai    ";

// // console.log(myName.trim().length);

// console.log(myName.truelength);

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.rohit = function () {
  console.log(`rohit is present all objects`);
};

Array.prototype.heyRohit = function () {
  console.log(` Rohit says hello`);
};

// heroPower.rohit();
// myHero.rohit();
// myHero.heyRohit();
// heroPower.heyRohit();

//+++++++++++ inheritance +++++++++++++++

const user = {
  name: "chai",
  Email: "chaiaurcode@gmail.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssingment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = user;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "chaiAurCode";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"rohit".trueLength();
"icetea".trueLength();
