function walking(steps, footprint, speed) {
  let distanceInMeters = steps * footprint;
  let speedPerMeter = speed / 3.6;
  let time = distanceInMeters / speedPerMeter;
  let rest = Math.floor(distanceInMeters / 500);

  let timeMinutes = Math.floor(time / 60);
  let timeSeconds = Math.round(time - timeMinutes * 60);
  let timeHours = Math.floor(time / 3600);

  console.log(
    (timeHours < 10 ? "0" : "") +
      timeHours +
      ":" +
      (timeMinutes + rest < 10 ? "0" : "") +
      (timeMinutes + rest) +
      ":" +
      (timeSeconds < 10 ? "0" : "") +
      timeSeconds
  );
}

walking(4000, 0.6, 5);
