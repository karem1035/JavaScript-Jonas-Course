'use strict';
/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const outPut = `You are ${age}, born in ${birthYear}`;
    console.log(outPut);

    if (birthYear >= 1990 && birthYear <= 2000) {
      const str = `Ohm you are a milanial, ${firstName}`;
      console.log(str);

      function printFullName(firstName) {
        const LastName = 'Darwesh';
        return `My name is ${firstName} ${LastName}`;
      }
      console.log(printFullName(firstName));
    }
    // console.log(printFullName(firstName));

    // console.log(str);
  }
  printAge();
  return age;
}

const firstName = 'Karem';
calcAge(1999);
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Karem'; // Undefined
let job = 'developer'; // TDZ
const year = 1999; // TDZ

// Functions

console.log(addDecl(1, 2));
console.log(addExpr(3, 4));
console.log(addArrow(5, 6));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
if (!numProducts) deleteShoppingCart();
console.log(numProducts);

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
const karem = {
  name: 'karem',
  age: 1999,
  calcAge: function () {
    console.log(2023 - this.age);
    console.log('This Value');
    console.log(this);
  },
};
karem.calcAge(karem.age);

const she = {
  name: 'girl',
  age: 2000,
};

she.calcAge = karem.calcAge;
she.calcAge(she.age);

const f = karem.calcAge;
console.log(f());


const karem = {
  firstName: 'karem',
  age: 1999,
  calcAge: function () {
    console.log(2023 - this.age);
    
    // Solution 1

    // const self = this;
    // const isMillennial = function () {
    //   console.log(self);
    //   console.log(self.age >= 1990 && self.age <= 2000);
    // };
    // isMillennial();
    
    // Solution 2

    const isMillennial = () => console.log(this);
    console.log(this.age >= 1990 && this.age <= 2000);

    isMillennial();
  },
  greet: () => console.log(`Hello ${firstName}`),
};

karem.calcAge();

// Arguments Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => a + b;
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Karem',
  age: 24,
};
const friend = me;
friend.age = 27;
friend.name = 'Mohamed';

console.log('Me : ', me);
console.log('Friend : ', friend);

// Primitive Types
let LastName = 'Williams';
let oldLastName = LastName;
LastName = 'Karem';

// Reference Types
const me = {
  age: 23,
  name: 'Karem',
};

const newMe = me;
newMe.age = me.age + 1;

// Copying Objects

const me3 = me;
me3.age = 27;
console.log('First Me : ', me);
console.log('New me : ', newMe);
console.log('Me : 3 1st', me3);
// const meCopy = Object.assign({}, me3);
console.log('Me : 3 2nd', me3);
// console.log('Me Copy : ', meCopy);
*/

const num = {
  num1: 1,
  num2: 2,
  num3: 3,
  letters: {
    first: 'A',
    Second: 'B',
    Third: 'C',
  },
};

const num0 = num;
num0.num4 = 4;
const num1 = Object.assign({}, num);
num1.num5 = 5;
num1.letters.Forth = 'D';
console.log('num', num);
console.log('num1', num1);

// console.log('num0', num0);
// console.log('num0', num0);
