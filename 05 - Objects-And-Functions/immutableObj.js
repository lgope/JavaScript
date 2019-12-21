let person = {
  name: "Lakshman Gope",
  age: 21,
  skills: ["js", "node", "reat"],
  subjects: {
    swe114: "TOC",
    swe424: "BOD"
  }
};

let person1 = JSON.parse(JSON.stringify(person));

person1.name = "A. Rahman";
person1.age = 26;
person1.subjects = {
  swe188: "C Programming",
  swe429: "Web programming"
};

console.log(person);
console.log(person1);
