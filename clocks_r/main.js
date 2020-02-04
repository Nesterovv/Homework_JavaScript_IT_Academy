
let timerId = setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');

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
    clearInterval(time);
    resetting();
    onIntervalNextTick();
    htmlElements.timer.onblur = function() {
        htmlElements.timer.classList.remove("selected");
    };
};

htmlElements.clock.onfocus = function() {
    htmlElements.clock.classList.add("selected");
    htmlElements.startBtn.classList.add("hidden");
    htmlElements.stopBtn.classList.add("hidden");
    htmlElements.resetBtn.classList.add("hidden");
    htmlElements.output.classList.remove("hidden");
    clearInterval(time);
    resetting();
    onIntervalNextTick();
    
};

function showTimer() {
    clearInterval(timerId);
    htmlElements.output.innerText = '00:00:00.0';
}

let time;
let difference;
let currentDifference = 0;

function startTimer() {
    let start = Date.now();
    time = setInterval(Starter, 100, start);
}

function Starter(start) {
    let end = Date.now();
    difference = end - start + currentDifference;
    let mil = parseInt((difference % 1000) / 100);
    let sec = parseInt((difference / 1000) % 60);
    let min = parseInt(((difference / 1000) / 60) % 60);
    let hou = parseInt(((difference / 1000) / 3600) % 60);
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (hou < 10) {
        hou = '0' + hou;
    }
    htmlElements.output.innerText = `${hou}:${min}:${sec}.${mil}`;
}

function stopping() {
    clearInterval(time);
        currentDifference = difference;
    }

 function resetting() {
    clearInterval(time);
    currentDifference = 0;
     htmlElements.output.innerText = '00:00:00.0';
}
