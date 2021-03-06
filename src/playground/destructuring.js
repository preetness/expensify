// ES6 Object Destructuring

// const person = {
//     name: 'Preet',
//     age: 40,
//     location: {
//         city: 'Seattle',
//         temp: 45
//     }
// };

// const { name: firstName = 'Anonymous', age, } = person;
// const { city, temp:temperature } = person.location;

// console.log(`${firstName} is ${age} years old.`)

// console.log(`It is ${temperature} degrees in ${city} right now.`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher ;

// console.log(`The publisher of this book is ${publisherName}.`);

// ES6 Array Destructuring

// const address = ['1299 S Juniper Street', 'Seattle', 'Washington', '98101'];

// const [ street, city, state, zip ] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$3.50', '$3.75'];

const [beverage, small, medium, large] = item;

console.log(`A medium ${beverage} costs ${medium}.`);