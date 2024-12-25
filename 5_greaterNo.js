//greatest number among three variables

/*
let n1 = 10, n2 = 50, n3 = 45;
let greatest = Math.max(n1, n2, n3);
console.log(`${greatest} is greatest number`);
*/

let n1 = 10,
  n2 = 50,
  n3 = 45;

if (n1 > n2) {
  if (n1 > n3) {
    console.log(`${n1} is greatest number`);
  } else {
    console.log(`${n3} is greatest number`);
  }
} else {
  if (n2 > n3) {
    console.log(`${n2} is greatest number`);
  } else {
    console.log(`${n3} is greatest number`);
  }
}
