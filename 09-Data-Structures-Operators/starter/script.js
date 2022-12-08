'use strict';

//! Coding Challenge #4
/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):


//! COPY
  underscore_case
    first_name
  Some_Variable
    calculate_AGE
  delayed_departure

Should produce this output (5 separate console.log outputs):

underscoreCase     ✅
firstName         ✅✅
someVariable      ✅✅✅
calculateAge      ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  const trimmed = [];
  for (const trim of lines) {
    let edited = trim.trim().toLocaleLowerCase().split('_');
    trimmed.push(edited);
  }
  const cCases = function (trimmed) {
    const endArray = [];
    for (const split of trimmed) {
      const [firstName, lastName] = split;
      const lastNameC = lastName[0].toUpperCase() + lastName.slice(1);
      const endName = firstName + lastNameC;
      endArray.push(endName);
    }
    // Finding Maximum length
    // console.log(endArray);
    let maximumLength = 0;
    for (const len of endArray) {
      maximumLength < len.length
        ? (maximumLength = len.length)
        : (maximumLength = maximumLength);
    }
    // console.log(maximumLength);

    // padding to the maximum length +2
    const endArrayV2 = [];
    for (const pad of endArray) {
      let paddedNames = pad.padEnd(maximumLength + 2, ' ');
      endArrayV2.push(paddedNames);
    }

    // for (let i = 0; i < endArrayV2.length; i++) {
    //   console.log(endArrayV2[i] + '✅'.repeat(i + 1) + '\n');
    // }
    for (const [i, m] of endArrayV2.entries()) {
      console.log(m + '✅'.repeat(i + 1) + '\n');
    }
  };
  cCases(trimmed);
});
