const alarmCard = document.getElementById("alarm-card")
const displayClock = document.getElementById("display-clock")
const alarmInput = document.getElementById("alarm-input")
const setBtn = document.getElementById("set-btn")
const message = document.getElementById("message")
const alarmModal = document.getElementById("alarm-modal")
const modalStopBtn = document.getElementById("modal-stop-btn")
const modalTimeText = document.getElementById("modal-time")

let alarmTime = null;
let alarmSound = new Audio("alarm.mp3");
alarmSound.loop = true;
let isAlarmRinging = false;

setInterval(() => {
  let date = new Date();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  displayClock.textContent = `${hours}:${minutes}:${seconds}`;
  let currentTimeShort = `${hours}:${minutes}`;

  if (alarmTime === currentTimeShort && !isAlarmRinging) {
    ringAlarm();
  }
}, 1000);

setBtn.addEventListener("click", () => {
  if (alarmInput.value) {
    alarmTime = alarmInput.value;
    isAlarmRinging = false;
    message.innerText = `Budilnik ${alarmTime} ga o'rnatildi!`;
    message.classList.add("blue")
  } else {
    alert("Vaqtni kiriting!");
  }
});
function ringAlarm() {
  isAlarmRinging = true; 
  alarmModal.classList.remove("hidden");
  modalTimeText.innerText = `${alarmTime}`;
  message.innerText = "";
  alarmSound.play()
}
modalStopBtn.addEventListener("click", () => {
  isAlarmRinging = false; 
  alarmTime = null;
  alarmModal.classList.add("hidden");
  alarmInput.value = "";
  alarmSound.pause();
  alarmSound.currentTime = 0;
});
