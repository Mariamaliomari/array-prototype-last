function addDigits(num) {
  while (num >= 10) {
    let sum = 0;
    let digits = num.toString().split("");
    for (let i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]);
    }
    num = sum;
  }
  return num;
}

