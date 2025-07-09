let arr = [10, 20, 30, 20, 40, 10, 10];

let target = 10;

let count = 0;

for (let e of arr) {
  if (e == target) {
    count++;
  }
}

console.log(count);
