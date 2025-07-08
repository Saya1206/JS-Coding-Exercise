let str = "rakhi";
let count = 0;

for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase();
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    count++;
  }
}

console.log("Number of vowels:", count);

/*
let name = "rakhi";
let vowels = "aeiou";
let count = 0;

for (let e of name) {
  if (vowels.includes(e)) {
    count++;
  }
}
console.log(count);
*/
