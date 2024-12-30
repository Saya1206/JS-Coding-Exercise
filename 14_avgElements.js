/*
let arr = [10, 20, 30, 40, 50];

let sum = 0;
for (let num of arr) {
  sum = sum + num;
}

let avg = sum / arr.length;
console.log(`Average of elements in an array: ${avg}`);
*/

function average(arr) {
  let sum = 0;

  for (let num of arr) {
    sum = sum + num;
  }

  return sum / arr.length;
}

console.log(average([10, 20, 30, 40, 50]));
console.log(average([23, 45, 78]));
