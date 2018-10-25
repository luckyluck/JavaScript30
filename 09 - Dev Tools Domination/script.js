const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s string!', 'value');
console.log(`Hello I am a ${'value'} string!`);

// Styled
console.log('%c I am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 10px;');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Sh#$!t!');

// Info
console.info('Some information');

// Testing
const p = document.querySelector('p');
console.info(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);
console.clear();

// Grouping together
dogs.forEach(dog => {
    // console.group(dog.name);
    console.groupCollapsed(dog.name);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(dog.name);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/luckyluck')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
    });


console.table(dogs);