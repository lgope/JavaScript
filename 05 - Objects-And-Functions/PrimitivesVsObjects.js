// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); // 46
console.log(b); // 23

// Objects
var obj1 = {
    name: 'Lakshman',
    age: 20
};
var obj2 = obj1;
obj1.age = 21;
console.log(obj1.age); // 21
console.log(obj2.age); // 21

// Functions
var age = 21;
var obj = {
    name: 'Lakshman',
    city: 'Bangladesh'
};

function change(a, b) {
    a = 24;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age); // 21
console.log(obj.city); // San Francisco