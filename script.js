let timer = null;
let elapsedTime = 0;
let startTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('Start');
const stopBtn = document.getElementById('Stop');
const resetBtn = document.getElementById('Restart');

// Update the timer display
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    display.textContent =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + ":" +
        (milliseconds < 10 ? "0" : "") + milliseconds;
}

// Start button handler
function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; // resume from paused time
        timer = setInterval(update, 10); // update every 10ms
        isRunning = true;
    }
}

// Stop button handler
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset button handler
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = "00:00:00:00";
}

// Attach event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);