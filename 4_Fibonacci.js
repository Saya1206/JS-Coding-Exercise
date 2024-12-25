let print = (num) => {
  let n1 = 0;
  let n2 = 1;

  for (let i = 1; i <= num; i++) {
    document.write(n1 + " ");
    let n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
};

print(5);
// print(7);
