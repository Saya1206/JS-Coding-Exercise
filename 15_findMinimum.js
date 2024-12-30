/*
let arr = [23, 45, 67, 10, 34];

let min = arr[0];

for (let num of arr) {
  if (num < min) {
   min = num;
  }
}

console.log(`Minimum element in the array: ${min}`);
*/

function findMin(arr) {
  let min = Math.min(...arr); // Use spread operator to pass array elementsinto individual arguments
  console.log(`Minimum element in the array: ${min}`);
}

findMin([23, 45, 67, 10, 34]);
