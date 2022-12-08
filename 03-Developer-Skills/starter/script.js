/*
const numbers = [6, 64, 34, 6, 16, "karem", true, 16, 68, 46, 131];

let max = numbers[0];
let min = numbers[0];

function average(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(max - min);
}

average(numbers);
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius: ")),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

*/
const data1 = [17, 21, 23];

const printForecast = function (arr) {
  let printArr = [];
  let finalStr = " ";

  for (let i = 0; i < arr.length; i++) {
    printArr.push(`${arr[i]}ºC in ${i + 1} days ... `);
  }
  for (let i = 0; i < data1.length; i++) {
    finalStr = finalStr + printArr[i];
  }
  console.log(finalStr);
};

printForecast(data1);

//Problem
//we need to store each output in a new array
//we need to define new variable which holds all the value
//print the final output
