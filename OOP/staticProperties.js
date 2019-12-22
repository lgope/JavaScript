class Meetup {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    start() {
        console.log(this.name + 'Meetup ' + 'is started at ' + this.location);
    }

    static getAddress() {
        console.log('Returned Address');
        /* this.location will return undefined */
        console.log('City: ' + this.location);
    }
}

Meetup.admin = "Adam";
Meetup.getMembers = () => {
    console.log(Meetup.admin + ' Returned Members');
}

let jsMeetup = new Meetup('JS', 'Blr');

console.log(Meetup.admin);   // Adam
console.log(jsMeetup.admin); // undefined

Meetup.getMembers();         // Adam Returned Members

// jsMeetup.getMembers();       // TypeError: jsMeetup.getMembers is not a function

Meetup.getAddress();         // Returned Address

// jsMeetup.getAddress();       // TypeError: jsMeetup.getAddress is not a function