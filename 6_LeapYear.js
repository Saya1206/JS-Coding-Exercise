let year = 1200;

if (year % 4 === 0 && year % 100 !== 0) {
  console.log(`Leap year and year ${year}`);
} else if (year % 400 === 0) {
  console.log(`Leap year and year ${year}`);
} else {
  console.log(`Not leap year and year ${year}`);
}
