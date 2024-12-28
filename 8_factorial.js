function factorial(num) {
  let fact = 1;
  while (num > 0) {
    fact = fact * num;
    num--;
  }
  console.log(`Factorial Value ${fact}`);
}

factorial(5);
factorial(3);
