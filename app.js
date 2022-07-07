let seconds = 00;
let tens = 00;
let appendTens = document.getElementById('tens');
let appendSeconds = document.getElementById('seconds');
let btnStart = document.getElementById('btn-start');
let btnStop = document.getElementById('btn-stop');
let btnReset = document.getElementById('btn-reset');
let interval;

// this function will run when click on start button 

function startTimer() {
    tens++;

    if(tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if(tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}

btnStart.onclick = function () {
    interval = setInterval(startTimer)
}

btnStop.onclick = function () {
    clearInterval(interval)
}

btnReset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}