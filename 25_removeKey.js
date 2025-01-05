//Remove a key from an object

let emp = {
  id: 1,
  name: "sakshi",
  salary: 40000,
  city: "pune",
};

let removeKey = delete emp.name;
console.log(removeKey);
console.log(emp);
