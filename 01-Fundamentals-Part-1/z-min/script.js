/*
let country = "Egypt";
let continent = "Africa";
let population = "102,000,000";

console.log(country);
console.log(continent);
console.log(population);

true;
let myName = 20;
console.log(true);

console.log(typeof myName);

myName = "Kareem";
console.log(typeof myName);

let can be re-assigned with a new value

let age = 30;
age = 31;

const cannot be re-assigned later on the program
const birthYear = 1991;

//we shouldn't use var
var job = "programmer";
jon = "teacher";

const now = 2037;
const ageKarem = now - 1999;
const ageSara = now - 1980;
console.log(ageKarem, ageSara);

console.log(ageKarem - ageSara, 2 ** 3);

const firstName = "Karem";
const lastName = "Darwesh";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
console.log(x);
console.log(ageSara == ageKarem);
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀


//mark Version 1
const markWeightsV1 = 78;
const markHeightV1 = 1.69;

//John Version 1
const johnWeightsV1 = 92;
const johnHeightV1 = 1.95;

//mark Version 2
const markWeightsV2 = 95;
const markHeightV2 = 1.88;

//John Version 2
const johnWeightsV2 = 85;
const johnHeightV2 = 1.76;

//mark BMI V1
let markBMIv1 = markWeightsV1 / markHeightV1 ** 2;

// john BMI V1
let johnBMIv1 = johnWeightsV1 / johnHeightV1 ** 2;

//comparing their BMI v1
const markHigherBMIv1 = markBMIv1 > johnBMIv1;

//mark BMI V2
let markBMIv2 = markWeightsV2 / markHeightV2 ** 2;

// john BMI V2
let johnBMIv2 = johnWeightsV2 / johnHeightV2 ** 2;

//comparing their BMI v2
const markHigherBMIv2 = markBMIv2 > johnBMIv2;

console.log("Mark weight = " + markWeightsV1);
console.log("Mark heigh = " + markHeightV1);

console.log("John weight = " + johnWeightsV1);
console.log("John height = " + johnHeightV1);

console.log("Mark BMI = " + markBMIv1);
console.log("John BMI = " + johnBMIv1);

console.log("is mark BMI higher ? " + markHigherBMIv1);

console.log("Mark weight = " + markWeightsV2);
console.log("Mark height = " + markHeightV2);

console.log("John weight = " + johnWeightsV2);
console.log("John height = " + johnHeightV2);

console.log("Mark BMI = " + markBMIv2);
console.log("John BMI = " + johnBMIv2);

console.log("is mark BMI higher ? " + markHigherBMIv2);

const firstName = "Karem";
const job = "Rich";
const birthYear = 1991;
const year = 2037;
const age = year - birthYear;

const Karem = `I am ${firstName}a ${age} years old , and I'am ${job}`;
console.log(Karem);


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sara Still need to wait ${yearsLeft} years until she gets her license , she is ${age} years old`
  );
}
const birthYear = 19901;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);




const inputYear = "1999";
console.log(Number(inputYear), inputYear);

console.log(inputYear + 19);

console.log(String(23), 12);
let n = "1" + 1;
n = n - 1;
console.log(n);


console.log(Boolean());
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(1));
console.log(Boolean(-50));
console.log(Boolean("karem"));
console.log(Boolean("j"));

const money = 5;
if (money) {
  console.log("don't spend it all");
} else {
  console.log("you should get a job");
}
const karemOldEnough = false;
const karemIsSmart = false;

if (karemIsSmart || karemOldEnough) {
  console.log("Karem Is Awesome");
} else {
  console.log("Karem is not Awesome");
}



//CHALLENGE #3

let dolphins;
let koalas;
const minimumScore = 100;

//data1
dScore1 = 97;
dScore2 = 112;
dScore3 = 101;

kScore1 = 109;
kScore2 = 95;
kScore3 = 106;

dAverageScore = (dScore1 + dScore2 + dScore3) / 3;
kAverageScore = (kScore1 + kScore2 + kScore3) / 3;

//Compare the team's average scores to determine the winner

//both under 100 , both loses
if (dAverageScore < minimumScore && kAverageScore < minimumScore) {
  console.log("no team wins , 'both teams score under 100'");
}
//if dolphins > koalas , dolphins wins
else if (dAverageScore > kAverageScore) {
  console.log(
    `dolphins wins with a score of ${dAverageScore} vs koalas with a score of ${kAverageScore}`
  );
}
//if koalas > dolphins , koalas wins
else if (kAverageScore > dAverageScore) {
  console.log(
    `koalas wins with a score of ${kAverageScore} vs koalas with a score of ${dAverageScore}`
  );
} else {
  console.log("Draw");
}


data1

dScore1 = 96;
dScore2 = 108;
dScore3 = 89;

kScore1 = 88;
kScore2 = 91;
kScore3 = 110;


data2

dScore1 = 97;
dScore2 = 112;
dScore3 = 101;

kScore1 = 109;
kScore2 = 95;
kScore3 = 123;


data 3

dScore1 = 97;
dScore2 = 112;
dScore3 = 101;

kScore1 = 109;
kScore2 = 95;
kScore3 = 106;
const day = "sunday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("not a valid day!");
}

const day = "sunday";

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("not a valid day!");
}

const age = 15;
age >= 10 ? console.log("karem is a geek!") : console.log("karem is a ner!");

// Data 1: Test for bill values 275, 40 and 430

//CHALLENGE 4

let bill = 430;
let tip;

tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `the bill was ${bill} ,the tip was ${tip}, and the total value was ${
    tip + bill
  }`
);
*/
