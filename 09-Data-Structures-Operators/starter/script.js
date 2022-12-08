'use strict';

const briefIntroduction = function ({
  name = 'your name',
  age = '20s',
  job = 'Developer',
  address = 'Cairo Egypt',
}) {
  console.log(
    `Hello , my name is ${name} , I am ${age} I am ${job} I live in ${address}`
  );
};

const infos = {
  name: 'Karem',
  age: 23,
  job: 'Web Developer',
};

briefIntroduction(infos);

/*

const arr = [0, 2, 1];
let [, one, two] = arr;
console.log(one, two);
[one, two] = [two, one];
console.log(one, two);

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, menuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
  },
};

const [pizza1, pizza2] = restaurant.order(1, 2);
// console.log(pizza1, pizza2);

const oddNumbers = [1, 3, 5, [7, 9, 11]];
const [i, j, , f] = oddNumbers;
const [a, b, , [c, d]] = oddNumbers;
console.log(i, j, f);
console.log(a, b, c, d);

*/
