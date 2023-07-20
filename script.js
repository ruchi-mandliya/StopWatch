// const displayTimer = document.getElementById("timer");
// const startButton = document.getElementById("start");
// const stopButton = document.getElementById("stop");
// const resetButton = document.getElementById("reset");

// let msecs = 0;
// let secs = 0;
// let minutes = 0;

// let timerStarted = false;

// startButton.addEventListener("click", function () {
//   if ((timerStarted = true)) {
//     clearInterval(timerStarted);
//     startButton.disabled = false;
//     stopButton.disabled = true;
//   }
//   timerStarted = setInterval(startTimer, 10);
//   startButton.disabled = true;
//   stopButton.disabled = false;
// });

// stopButton.addEventListener("click", function () {
//   clearInterval(timerStarted);
//   startButton.disabled = false;
//   stopButton.disabled = true;
// });

// resetButton.addEventListener("click", function () {
//   clearInterval(timerStarted);
//   displayTimer.innerHTML = `00 : 00 : 00`;
//   msecs = secs = minutes = 00;
// });

// function startTimer() {
//   msecs++;
//   if (msecs == 100) {
//     msecs = 0;
//     secs++;
//     if (secs == 60) {
//       secs = 0;
//       minutes++;
//     }
//   }

//   let msecString = msecs < 10 ? `0${msecs}` : msecs;
//   let secsString = secs < 10 ? `0${secs}` : secs;
//   let minsString = minutes < 10 ? `0${minutes}` : minutes;

//   displayTimer.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
// }

const displayTimer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let startTime = 0;
let passedTime = 0;
let runningTime;

function startTimer() {
  startTime = Date.now() - passedTime;

  runningTime = setInterval(() => {
    passedTime = Date.now() - startTime;
    displayTimer.textContent = formatTime(passedTime);
  }, 10);

  startButton.disabled = true;
  stopButton.disabled = false;
}

function formatTime(passedTime) {
  const milliseconds = Math.floor((passedTime % 1000) / 10);
  const seconds = Math.floor((passedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((passedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(passedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}
function stopTimer() {
  clearInterval(runningTime);
  startButton.disabled = false;
  stopButton.disabled = true;
}
function resetTimer() {
  clearInterval(runningTime);

  passedTime = 0;
  displayTimer.textContent = "00:00:00";

  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
