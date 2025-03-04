// Check if two objects have the same set of keys

function haveSameKeys(obj1, obj2) {
  let keys1 = Object.keys(obj1).sort();
  let keys2 = Object.keys(obj2).sort();

  return JSON.stringify(keys1) === JSON.stringify(keys2);
}

console.log(haveSameKeys({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }));
console.log(haveSameKeys({ a: 10, c: 20 }, { a: 10, b: 30 }));
