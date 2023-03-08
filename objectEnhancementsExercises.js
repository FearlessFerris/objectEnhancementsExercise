// 1.) Refactor some ES5 code into ES2015

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
};


// 2.) Computed Property Names ES2015

let favoriteNumber = 42;

const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite number!'
}


// 3.) Object Methods ES2015

var instructors = {
    firstName: 'JavarisJamar',
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + 'Bye bro!';
    }
};


// 4.) createAnimalFunction

const dog = makeAnimal('dog', 'bark', 'wooof!')
dog.bark()

const pig = makeAnimal('pig', 'oink', 'reeeeeeh')
pig.oink()


    function makeAnimal(species, verb, noise) {
    return {
        species,
        [verb](){
            return noise;
        }

    };
};