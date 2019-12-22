class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

var poly1 = new Polygon();

console.log(poly1.name);
// expected output: "Polygon"


//   Another Way

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather);
console.log(myFather.firstName);
console.log(myFather.lastName);
console.log(myFather.age + ', ' + myFather.eyeColor);
