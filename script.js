const displayTimer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let msecs = 0;
let secs = 0;
let minutes = 0;

let timerStarted = false;

startButton.addEventListener("click", function () {
  if ((timerStarted = true)) {
    clearInterval(timerStarted);
  }
  timerStarted = setInterval(startTimer, 10);
});

stopButton.addEventListener("click", function () {
  clearInterval(timerStarted);
});

resetButton.addEventListener("click", function () {
  clearInterval(timerStarted);
  displayTimer.innerHTML = `00 : 00 : 00`;
  msecs = secs = minutes = 00;
});

function startTimer() {
  msecs++;
  if (msecs == 100) {
    msecs = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      minutes++;
    }
  }

  let msecString = msecs < 10 ? `0${msecs}` : msecs;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = minutes < 10 ? `0${minutes}` : minutes;

  displayTimer.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
