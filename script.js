'use strict';

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas',
  passport: 234235254643,
};

const checkIn = function (flightNum, passanger) {
  flightNum = 'LH999';

  passanger.name = 'Mr. ' + passanger.name;

  if (passanger.passport === 234235254643) {
    console.log('checkIn');
  } else {
    console.log('Wrong Password');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);

  if (person.passanger === 234235254643) {
    console.log('checkIn');
  } else {
    console.log('Wrong passport');
  }
};

newPassport(jonas);
console.log(jonas);



const oneWord = function (str) {
  return str.replaceAll(' ', '');
};

const firstUpperWord = function (str) {
  const words = str.split(' ');
  const [firstword, ...otherwords] = words;

  return [firstword.toUpperCase(), ...otherwords].join(' ');
};

function transformer(str, fn) {
  console.log(`tranformed : ${fn(str)}`);
}

transformer('javascript is the most popular', oneWord);
transformer('javascript is the most popular', firstUpperWord);



const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('hello!');
greeter('subodh');

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('hey')('banti');

*/

const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightnum, name) {
    console.log(
      `${name} has booked a seat in ${this.airline} flight ${this.iatacode}${flightnum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightnum}`, name });
  },
};

lufthansa.book(234, 'subodh');
console.log(lufthansa);

const eurowings = {
  airline: 'eurowings',
  iatacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
console.log(book);

book.call(eurowings, 999, 'Sonu');
book.call(lufthansa, 270, 'Sanya');

console.log(eurowings);

//Apply Method
const flightData = [152, 'Papa'];
book.apply(eurowings, flightData);
console.log(eurowings);
book.call(lufthansa, ...flightData);
console.log(lufthansa);
