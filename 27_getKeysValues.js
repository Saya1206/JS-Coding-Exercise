//Get Keys

let emp = {
  id: 1,
  name: "sakshi",
  salary: 40000,
  city: "pune",
};

let getKeys = Object.keys(emp);
console.log(getKeys);

//Get Values

let getValues = Object.values(emp);
console.log(getValues);

//Get Both Keys and Values

let entries = Object.entries(emp);
console.log(entries);
