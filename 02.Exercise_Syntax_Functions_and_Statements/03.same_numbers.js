function sameNumsChecker(n) {
  let number = n.toString();
  let lenOfNumber = number.length;

  let isEqual = true;
  let sumOfAllDigits = 0;
  let digitToCompare = Number(number[0]);

  for (let index = 0; index < lenOfNumber; index++) {
    currentDigit = Number(number[index]);
    sumOfAllDigits += currentDigit;

    if (digitToCompare !== currentDigit) {
      isEqual = false;
    }
  }
  console.log(isEqual);
  console.log(sumOfAllDigits);
}

sameNumsChecker(2222222);
sameNumsChecker(1234);
