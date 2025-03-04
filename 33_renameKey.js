// Rename a key in an object

let obj = { id: 1, product: "laptop", city: "pune" };

let newObj = { ...obj, productId: obj.id };

delete newObj.id;
console.log(newObj);
