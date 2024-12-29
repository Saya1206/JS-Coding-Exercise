// To reverse a string, you need to first convert it into an array using .split(''), reverse the array using .reverse(),
// and then join the array back into a string using .join('')

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
