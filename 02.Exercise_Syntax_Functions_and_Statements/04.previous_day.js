function previousDay(year, month, day) {
  let previousDay = new Date(year, month + 1, day - 1);

  let newYear = previousDay.getFullYear();

  let newMonth = previousDay.getMonth();

  let newDate = previousDay.getDate();

  console.log(`${newYear}-${newMonth - 1}-${newDate}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
