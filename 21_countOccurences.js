/*
let arr = [5, 7, 2, 6, 3, 7, 2, 5, 6, 2, 4];

let find = 2;

let count = 0;

for (let e of arr) {
  if (e == find) {
    count++;
  }
}
console.log(count); 
*/

function countOccurence(array, valueToFind) {
  let count = 0;

  for (let elemet of array) {
    if (elemet == valueToFind) {
      count++;
    }
  }
  console.log(`Occurence of ${valueToFind} is ${count}`);
}

countOccurence([5, 7, 2, 6, 3, 7, 2, 5, 6, 2, 4], 2);
