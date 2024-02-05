class User {
  constructor(username) {
    this.username = username;
  }

  logeMe() {
    console.log(`Username: ${this.username}`);
  }

  static creatId() {
    return "123";
  }
}

const rohit = new User("rohit");
// console.log(rohit.creatId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logeMe();
console.log(iphone.creatId()); // iphone.creatId is not a function
