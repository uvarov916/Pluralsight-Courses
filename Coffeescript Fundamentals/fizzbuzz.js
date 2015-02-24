function map(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return "fizzbuzz";
  }
  else if (value % 3 === 0) {
    return "fizz";
  }
  else if (value % 5 === 0) {
    return "buzz";
  }
  else {
    return value;
  }
}

for (var i = 1; i <= 100; i++) {
  console.log(map(i));
}