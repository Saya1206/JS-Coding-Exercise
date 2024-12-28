/*
function power(base, exponent) {
  let powerValue = Math.pow(base, exponent);
  console.log(`Power is ${powerValue}`);
}

power(2, 3);

*/

// let power = Math.pow(2, 3);
// console.log(`Power is ${power}`);

function power(base, exponent) {
  let result = 1;

  for (let i = 1; i <= exponent; i++) {
    result = result * base;
  }

  console.log(`Power of a given number: ${result}`);
}

power(2, 3);
