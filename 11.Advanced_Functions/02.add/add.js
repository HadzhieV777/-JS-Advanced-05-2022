function solution(initialValue) {
  let num = initialValue;

  return function (addNum) {
    let result = num + addNum;
    return result;
  };
}

let add5 = solution(5);
console.log(add5(2)); // 7
console.log(add5(3)); // 8
console.log(add5(5)); //10
