/*
let arr = [12, 34, -4, 56, 90];

let allPositive = true;

for (let num of arr) {
  if (num <= 0) {
    allPositive = false;
    break;
  }
}

if (allPositive) {
  console.log(`All elements in the array are positive`);
} else {
  console.log(`Not all elements in the array are positive`);
}
  */

let arr = [12, 34, 4, 56, 90];

let checkPositive = arr.every((num) => num > 0);

if (checkPositive) {
  console.log(`All elements in the array are positive`);
} else {
  console.log(`Not all elements in the array are positive`);
}
