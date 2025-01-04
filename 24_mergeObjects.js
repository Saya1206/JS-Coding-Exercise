//Merge two objects

let obj1 = {
  id: 1,
  name: "rahul",
  salary: 40000,
};

let obj2 = {
  id: 2,
  city: "Nagpur",
  age: 23,
};

let mergedObject = { ...obj1, ...obj2 }; //When keys are the same, the value from the last object overwrites earlier values
console.log(mergedObject);
