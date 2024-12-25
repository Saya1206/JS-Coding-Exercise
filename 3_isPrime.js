function isPrime(num) {
  if (num == 2) {
    return `Number ${num} is Prime`;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % 2 == 0) {
      return `Number ${num} is not Prime`;
    }
    return `Number ${num} is Prime`;
  }
}

console.log(isPrime(40));
console.log(isPrime(17));
