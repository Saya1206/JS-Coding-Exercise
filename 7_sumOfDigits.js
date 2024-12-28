function sumOfDigits(num) {
  let sum = 0;
  while (num != 0) {
    let rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }
  console.log(`Sum of digits ${sum}`);
}

sumOfDigits(473);
