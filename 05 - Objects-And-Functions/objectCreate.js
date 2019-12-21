var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth);
  }
};

// 1st sample
var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

// 2nd sample
var jane = Object.create(personProto, {
  name: {
    value: "Jane"
  },
  yearOfBirth: {
    value: 1969
  },
  job: {
    value: "designer"
  }
});

john.calculateAge(); // 26
jane.calculateAge(); // 47

console.log(john);
console.log(jane);