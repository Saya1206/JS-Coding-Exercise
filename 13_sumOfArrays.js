/*
let arr = [10, 20, 30, 40, 50];

let sum = 0;
for (let num of arr) {
  sum = sum + num;
}
console.log(`Sum of array elements: ${sum}`);
*/

function arrSum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum = sum + num;
  }
  return sum;
}

console.log(arrSum([10, 20, 30, 40, 50]));
console.log(arrSum([10, 20, 30]));
