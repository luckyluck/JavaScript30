// Strings and numbers values will be copied
// That means that there won't be any connection between variables values
let age = 100;
let age2 = age;
// console.log(age, age2);
age = 200;
// console.log(age, age2);

let name = 'Bob';
let name2 = name;
// console.log(name, name2);
name = 'Bobby';
// console.log(name, name2);

// In the case of arrays only reference will be copied instead of value
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

// now when we update it, the original one isn't changed
team4[3] = 'Updated name';

// or create an array from existed one via built-in method
const team5 = Array.from(players);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const captain = person; // the reference will be passed instead of value

// how do we take a copy instead?
// works only for the first level, doesn't work deeper
const cap2 = Object.assign({}, person, { number: 99 });

// We will hopefully soon see the object ...spread in all browsers except IE (Stage 4)
const cap3 = { ...person };

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const obj = {
    name: 'Name',
    age: 100,
    address: {
        state: 'State',
        city: 'City',
        street: 'Street'
    }
};
// It's not a good practice, but
const obj2 = JSON.parse(JSON.stringify(obj));
