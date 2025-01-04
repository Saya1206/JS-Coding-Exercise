let arr = ["Sunil", "Madhavi", "Nira", "Raghav", "Nira"];

let elementCount = {}; // Object to track occurrences of each element
let duplicates = []; // Array to store duplicate elements

for (let i = 0; i < arr.length; i++) {
  let element = arr[i];

  if (elementCount[element]) {
    elementCount[element]++;

    if (elementCount[element] === 2) {
      duplicates.push(element);
    }
  } else {
    elementCount[element] = 1;
  }
}

if (duplicates.length > 0) {
  console.log(`Duplicate Elements: `, duplicates);
} else {
  console.log("No duplicate elements found.");
}
