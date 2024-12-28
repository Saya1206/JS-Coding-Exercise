let arr = [54, 8, 230, 91, 5, 74, 20, 6];

let ascending = arr.slice().sort((a, b) => a - b);

let descending = arr.slice().sort((a, b) => b - a);

console.log(`Ascending Order: ${ascending}`);
console.log(`Descending Order: ${descending}`);
