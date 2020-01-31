setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');
htmlElements.secondsTimerClock = document.querySelector('.SecondsTimer');

function onIntervalNextTick() {
    const d = new Date();
    let hours = d.getHours().toString();
    if (hours < 10) {
        hours = '0' + hours;
    }
    let minutes = d.getMinutes().toString();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    let seconds = d.getSeconds().toString();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    let clockString = hours + ':' + minutes + ':' + seconds;
    htmlElements.output.innerText = clockString;
};

function linkStopWatch() {
    htmlElements.stopwatch.classList.add("selected");
    htmlElements.clock.classList.remove("selected");
    htmlElements.startBtn.classList.remove("hidden");
    htmlElements.stopBtn.classList.remove("hidden");
    htmlElements.resetBtn.classList.remove("hidden");
    htmlElements.output.classList.add("hidden");
    htmlElements.secondsTimerClock.classList.remove("hidden")
    htmlElements.stopwatch.onblur = function() {
        htmlElements.stopwatch.classList.remove("selected");

    };

};

function linkTimer() {
    htmlElements.timer.classList.add("selected");
    htmlElements.startBtn.classList.add("hidden");
    htmlElements.stopBtn.classList.add("hidden");
    htmlElements.resetBtn.classList.add("hidden");
    htmlElements.clock.classList.remove("selected");
    htmlElements.output.classList.remove("hidden");
    htmlElements.secondsTimerClock.classList.add("hidden");
    htmlElements.timer.onblur = function() {
        htmlElements.timer.classList.remove("selected");
    };
};

htmlElements.clock.onfocus = function() {
    htmlElements.clock.classList.add("selected");
    htmlElements.startBtn.classList.add("hidden");
    htmlElements.stopBtn.classList.add("hidden");
    htmlElements.resetBtn.classList.add("hidden");
    htmlElements.secondsTimerClock.classList.add("hidden")
    htmlElements.output.classList.remove("hidden");
};

function resetting() {
    htmlElements.secondsTimerClock.innerText = '0:00:00';
}