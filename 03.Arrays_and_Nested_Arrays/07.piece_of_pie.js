function cutPie(piesArr, startFlavour, endFlavour) {
  const start = piesArr.indexOf(startFlavour);
  const end = piesArr.indexOf(endFlavour) + 1;

  const result = piesArr.slice(start, end);
  return result;
}

console.log(
  cutPie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);

//['Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie']
