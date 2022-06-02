function attachEventsListeners() {
  let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let converter = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  Array.from(document.querySelectorAll('input[type="button"]')).forEach(
    (btn) => {
      btn.addEventListener("click", onConvert);
    }
  );

  function convert(value, unit) {
    let days = value / converter[unit];

    return {
      days: days,
      hours: days * converter.hours,
      minutes: days * converter.minutes,
      seconds: days * converter.seconds,
    };
  }

  function onConvert(event) {
    let input = event.target.previousElementSibling;
    let inputName = input.previousElementSibling.textContent;
    inputName = inputName.substring(0, inputName.length - 2);
    let value = Number(input.value);

    let time = convert(value, inputName.toLowerCase());

    days.value = time.days;
    hours.value = time.hours;
    minutes.value = time.minutes;
    seconds.value = time.seconds;
  }
}
