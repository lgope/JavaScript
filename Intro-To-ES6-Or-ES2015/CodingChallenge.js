// CODING CHALLENGE

/*
Challenge Description:

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

// Solution:

/* This Element class has all common properties of Park and Street */
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, parkArea, numberOfTrees) {
        super(name, buildYear);
        this.parkArea = parkArea; //km2
        this.numberOfTrees = numberOfTrees;
    }

    treeDensity() {
        const density = this.numberOfTrees / this.parkArea;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);

    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }


    // Size classification of all streets: tiny/small/normal/big/huge
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);

    }
}



const allParks = [new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];



const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];


function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length]; // Destructuring
}


function reportParks(park) {

    console.log('----PARKS REPORT----');

    // Density

    /*  // ES5
     park.forEach(function (el) {
         el.treeDensity();
     }) */

    // ES6
    park.forEach(el => el.treeDensity());

    // Average age

    /* var avgAge = 0;
    park.forEach(el => avgAge += (2019 - el.buildYear));
    console.log(avgAge/park.length); //74.33333333333333
     */

    const ages = park.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages); // Destructuring
    console.log(`Our ${park.length} parks have an average of ${avgAge} years`);


    // Which park has more than 1000 trees
    const index = park.map(el => el.numberOfTrees).findIndex(el => el >= 1000);
    console.log(`${park[index].name} has more than 1000 trees.`);
}

function reportStreets(street) {

    console.log('----STREETS REPORT----');


    // Total and average length of town's streets
    const [totalLength, avgLength] = calc(street.map(el => el.length));
    console.log(`Our ${street.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);


    // Classify sizes
    street.forEach(el => el.classifyStreet());

}

reportParks(allParks);
reportStreets(allStreets);