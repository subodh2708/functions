'use strict';

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
