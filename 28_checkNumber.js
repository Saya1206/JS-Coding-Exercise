//Check if all values in an object are numbers

let emp = {
  id: 1,
  name: "sakshi",
  salary: 40000,
  city: "pune",
};

let arrAllNumbers = Object.values(emp).every(
  (value) => typeof value === "number"
);

console.log(arrAllNumbers);

let id = {
  a: 101,
  b: 102,
  c: 103,
};

let arrAllNumbers2 = Object.values(id).every(
  (value) => typeof value === "number"
);

console.log(arrAllNumbers2);
