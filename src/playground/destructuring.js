// ES6 Destructuring

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

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher ;

console.log(`The publisher of this book is ${publisherName}.`);