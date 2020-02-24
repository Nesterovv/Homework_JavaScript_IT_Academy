import { clock } from "./main.js";

const htmlElements = {
    startBtn: document.querySelector('.container .buttons button.start'),
    stopBtn: document.querySelector('.container .buttons button.stop'),
    resetBtn: document.querySelector('.container .buttons button.reset'),
    output: document.querySelector('.container .output'),
};

function Stopwatch() {
    this.difference = 0;
    this.currentDifference = 0;
}

Stopwatch.prototype.init = function () {
    htmlElements.startBtn.addEventListener('click', this.startTimer.bind(this), {
        once: true
    });
    htmlElements.resetBtn.addEventListener('click', this.resetTimer.bind(this));
}

Stopwatch.prototype.showTimer = function () {
    clearInterval(clock.timerId);
    htmlElements.output.innerText = '00:00:00.0';
}

Stopwatch.prototype.startTimer = function () {
    let start = Date.now();
    htmlElements.stopBtn.addEventListener('click', this.stopTimer.bind(this), {
        once: true
    });
    this.time = setInterval(this.letStart.bind(this), 100, start);
}

Stopwatch.prototype.letStart = function (start) {
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

Stopwatch.prototype.stopTimer = function () {
    clearInterval(this.time);
    htmlElements.startBtn.addEventListener('click', this.startTimer.bind(this), {
        once: true
    });
    this.currentDifference = this.difference;
}

Stopwatch.prototype.resetTimer = function () {
    this.currentDifference = 0;
    htmlElements.output.innerText = '00:00:00.0';
}

export { Stopwatch }
