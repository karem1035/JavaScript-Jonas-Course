"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

function logger() {
  console.log("My name is Karem");
}

// calling / running / invoking function
logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 2);
console.log(juice1);
console.log(juice2);

// // Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);
// how old +5 years from now ? karem 1999 ebrahim 2005
console.log("🚀 ~ file: script.js ~ line 42 ~ ebrahim", ebrahim)

const howOld5 = function (birthYear) {
  return 2022 - birthYear + 5;
};

const karem = howOld5(1999);
const ebrahim = howOld5(2005);
console.log("🚀 ~ file: script.js ~ line 49 ~ ebrahim", ebrahim)

console.log(karem, ebrahim);
console.log("🚀 ~ file: script.js ~ line 52 ~ ebrahim", ebrahim)

//the other way

function howOld10(birthYear) {
  return 2022 - birthYear + 10;
}

const karem2 = howOld10(1999);
const ebrahim2 = howOld10(2005);
console.log("🚀 ~ file: script.js ~ line 62 ~ ebrahim", ebrahim)

console.log(karem2);
console.log(ebrahim2);
console.log("🚀 ~ file: script.js ~ line 66 ~ ebrahim", ebrahim)

//arrow function
// const functionName = (functionInput) => function statement / output;
// we need to make a program that calculates how many days the person have lived
// let karemBirth = 1999;
// let ebrahimBirth = 2005;
console.log("🚀 ~ file: script.js ~ line 73 ~ ebrahim", ebrahim)

// let date = 2022;

// const daysLived = (birthYear) => (date - birthYear) * 365;
// const karemLivedDays = daysLived(karemBirth);

// console.log(`the person has lived ${karemLivedDays}`);

//Function Calculates the area of a square with its hight and width

const area = (hight, width) => hight * width;

let square1;
let square2;

console.log((square1 = area(5, 6)));
console.log((square2 = area(56, 6)));

const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirements = (birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

const karemBirth = 1999;
let karemYearsLeft;
console.log(`Karem Has ${yearsUntilRetirements(1999)} years Left`);

// an arrow function that calculates how many years are left until retirement with the name and the year on a str

let year = 2022;

const retirement = (firstName, age) => {
  const yearsLeft = 65 - (year - age);
  const retirementYear = yearsLeft + year;
  return `${firstName} has ${yearsLeft} until retirement, and the retirement year will be ${retirementYear} `;
};

const karem = retirement("karem", 1999);
console.log(karem);

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces`;
  return juice;
}

console.log(fruitProcessor(3, 5));

let str;

//age calculator function
const ageCalculator = function (birthYear) {
  return 2022 - birthYear;
};
//outputs age

//years util retirement calculator
const retirementAgeCalculator = function (age) {
  return 65 - age;
};
//outputs years left until retirement

//main function
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = ageCalculator(birthYear);

  const retirement = retirementAgeCalculator(age);

  return console.log(
    `${firstName} with an age of ${age} and birth year of ${birthYear} will retire after ${retirement}`
  );
};
str = yearsUntilRetirement(1999, "karem");



function calcAge(birthYear, firstName) {
  const age = 2037 - birthYear;
  console.log(`${firstName} is ${age} years old`);
  return age;
}
const age = calcAge(1991, " Jonas ");
console.log(age);
*/

//JavaScript Fundamentals - Part 2
//Challenge 1

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
/*
const dolphinsScore1 = 44;
const dolphinsScore2 = 23;
const dolphinsScore3 = 71;

const koalaScore1 = 65;
const koalaScore2 = 54;
const koalaScore3 = 49;

//§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
const dolphinsScore1 = 85;
const dolphinsScore2 = 54;
const dolphinsScore3 = 41;

const koalaScore1 = 23;
const koalaScore2 = 34;
const koalaScore3 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);

console.log(dolphins);

const koalas = calcAverage(koalaScore1, koalaScore2, koalaScore3);

console.log(koalas);

function checkWinner(avr1, avr2) {
  //A team only wins if it has at least double the average score of the other team.
  if (avr1 >= avr2 * 2) {
    console.log(`Dolphins win (${avr1} vs. ${avr2})`);
  } else if (avr2 >= avr1 * 2) {
    console.log(`Koalas win (${avr2} vs. ${avr1})`);
  }
}

checkWinner(dolphins, koalas);
checkWinner(100, 1553);


// const names = ["me", "Ebrahim", "Ekhtiray", "Mohamed", "Abo Zeid"];
console.log("🚀 ~ file: script.js ~ line 217 ~ Ebrahim", Ebrahim)

// // console.log(names.length);

// const ages = [1999, 2005, 2001, 1998, 1997];

// const lists = ["Jobs", "Skills", names, ages];

// console.log(lists);

//Exercise
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const ages = [1999, 2005, 2001, 1998, 1997];
*/

/*
const names = ["me", "Ebrahim", "Ekhtiray", "Mohamed", "Abo Zeid"];
console.log(names);
names.push("Nobody");
console.log(names);
names.unshift("King ME");
console.log(names);

function checkWinner(avr1, avr2) {
  //A team only wins if it has at least double the average score of the other team.
  if (avr1 >= avr2 * 2) {
    console.log(`Dolphins win (${avr1} vs. ${avr2})`);
  } else if (avr2 >= avr1 * 2) {
    console.log(`Koalas win (${avr2} vs. ${avr1})`);
  }
}

//Function Declaration
function addTen(number) {
  const plusTen = number + 10;
  return plusTen;
}

//Usage
const number = 20;
const newNumber = addTen(number);
console.log(newNumber);

//Function Expression
const calcAge = function (birthYear) {
  const age = 2023 - birthYear;
  return age;
};

//Usage
const birthYear = 1999;
const myAge = calcAge(birthYear);
console.log(myAge);

//Arrow Function
const xTen = (number) => number * 10;

//Usage
const numberX = 15;
console.log(xTen(numberX));



const people = ["karem", "ebrahim", "mohamed"];
console.log(people);
console.log(people[1]);
console.log(people.length);

//Push
let returnValue = people.push("ahmed");
console.log(people);
console.log(returnValue);

//unshift
returnValue = people.unshift("myself");
console.log(people);
console.log(returnValue);
//pop
returnValue = people.pop();
console.log(returnValue);
console.log(people);

//shift
returnValue = people.shift();
console.log(returnValue);
console.log(people);

// function calcTip(billValue) {
//   //   if (billValue >= 50 && billValue <= 300) {
//   //     return billValue * 0.15;
//   //   } else return billValue * 0.2;
//   // }

//   return billValue >= 50 && billValue <= 300
//     ? billValue * 0.15
//     : billValue * 0.2;
// }

const calcTip = (billValue) =>
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

// console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];

console.log(bills);
console.log(tips);
console.log(total);

monday
tuesday
wednesday
thursday
friday
saturday
sunday

let day = "sunday";

switch (day) {
  case "sunday":
    console.log("day 1");
    break;
  case "monday":
    console.log("day 2");
    break;
  case "tuesday":
  case "wednesday":
    console.log("day 3 & 4");
    break;
  case "thursday":
    console.log("day 5");
    break;
  case "friday":
    console.log("day 6");
    console.log("weekend");
    break;
    default:
      console.log("any other day");
    }
    
    
    const karem = [
      "karem",
  "darwesh",
  "developer",
  2023 - 1999,
  ["mohamed", "ebrahim", "mohamed"],
];

console.log(karem);

const arrayTest = ["karem", "darwesh", "abd el-rahman", 23, "developer"];
const objectTest = {
  firstName: "karem",
  lastName: "darwesh",
  middleName: "abd el-rahman",
  age: 23,
  job: "developer",
};

console.log(arrayTest);
console.log(typeof arrayTest);

console.log(objectTest);
console.log(typeof objectTest);

console.log(mySelf["age"]);
console.log(mySelf["first" + name]);
console.log(mySelf["last" + name]);
console.log(mySelf["middlmye" + name]);

const key = prompt("what do you want to know about karem ?");
console.log(key);
console.log(typeof key);
console.log(mySelf[key]);

let mySelf1 = {
  firstName: "karem",
  lastName: "darwesh",
  age: 23,
  job: "developer",
};

console.log("I want " + prompt("what the do you want ?"));
mySelf1 = {
  firstName: "karem",
  lastName: "darwesh",
};

console.log(mySelf1);
//output {firstName: 'karem', lastName: 'darwesh'}

mySelf1.email = "@karem";
console.log(mySelf1);
//output

mySelf1["Phone Number"] = 1011678830;
console.log(mySelf1);

const karem = {
  firstName: "karem",
  lastName: "darwesh",
  birthYear: 1999,
  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
};

console.log(karem.calcAge(1999));
console.log(karem["calcAge"](1999));

const karem = {
  firstName: "Karem",
  lastName: "Darwesh",
  job: "Developer",
  birthYear: 1999,
  hasDriverLicense: true,
  //no need for function input
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
    //output the whole object "this referes to karem object"
  },
  
  getSummary: function () {
    return `${this.firstName} ${this.lastName} is a ${this.calcAge()} ${
      this.job
    } and has ${this.hasDriverLicense ? "a" : "no"} Driver License.`;
  },
};

console.log(karem.getSummary());
// console.log(karem.age);
//outputs 24

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    const BMI = this.mass / this.height ** 2;
    return BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

console.log(mark);
console.log(john);

markBMI > johnBMI
? console.log(
  `mark's BMI (${markBMI.toFixed(
    1
    )}) is higher than Marks (${johnBMI.toFixed(1)})!`
    )
    : console.log(`john`);
    
    const karem = [
      "karem",
      "darwesh",
      "developer",
      2023 - 1999,
      ["mohamed", "ebrahim", "mohamed"],
    ];
const types = [];

for (let i = 0; i < karem.length; i++) {
  console.log(karem[i]);
  types[i] = typeof karem[i];
}

console.log(types);
const years = [];
const ages = [];

for (let i = 0; i < 5; i++) {
  years.push(1990 + i);
}

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(years);
console.log(ages);

const example = ["karem", true, 54, "ahemd", "mohamed", [1, 2, 3, 4]];

for (let i = 0; i < example.length; i++) {
  if (typeof example[i] !== "string") continue;
  console.log(example[i]);
}

for (let i = 0; i < 3; i++) {
  for (let r = 0; r < 5; r++) {
    console.log(`SET ${i + 1} : Rep ${r + 1}`);
  }
}


for (let i = 1; i <= 5; i++) {
  console.log(`Number ${i}`);
}

let i = 1;
while (i <= 5) {
  console.log(`Number ${i}`);
  i++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

// while (dice !== 6) {
// console.log(`you rolled ${dice}`);
// }

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`we got ${dice}`);
  }
}
*/

const bills = [122, 555, 44];
const tips = [];
const totals = [];

function calcTip(billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(tips);
console.log(calcAverage(totals));
