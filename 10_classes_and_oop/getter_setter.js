class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password} Rohit`;
  }

  set password(value) {
    this._password = value;
  }
}

const Rohit = new User("malvirohit@.ai", "abc");
console.log(Rohit.password);
console.log(Rohit.email);
