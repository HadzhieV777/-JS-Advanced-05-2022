function add(num1) {
  let sum = 0;

  function inner(num2) {
    sum += num2;
    return inner;
  }
  inner.toString = () => {
    return sum;
  };
  return inner(num1);
}

console.log(add(1)); // 1
console.log(add(1)(6)(-3)); // 4
