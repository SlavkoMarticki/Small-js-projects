'use strict'

const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const breakButton = document.getElementById("break");
let writeTimeLeft = document.getElementById("timeLeft");


let intervalStart,intervalBreak;
let workTime =  (8 * 60 * 60 * 1000);


breakButton.disabled = true;
const engine = () => {
    workTime = workTime - 1000;
    const seconds = Math.floor(workTime / 1000) % 60;
    const minutes = Math.floor(workTime / 60 / 1000) % 60;
    const hours = Math.floor(workTime / 60 / 60 / 1000) % 24;
    writeTimeLeft.innerHTML = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

const start = () =>{
    intervalStart = setInterval(engine, 1000);
    clearInterval(intervalBreak);
    startButton.disabled = true;
    breakButton.disabled = false;
}
const reset = () => {
    startButton.disabled = false;
    breakButton.disabled = true;
    workTime = (8 * 60 * 60 * 1000)    
    writeTimeLeft.innerHTML = "08:00:00";
    clearInterval(intervalStart)
    clearInterval(intervalBreak)
}
const breakBut = () => {
    startButton.disabled = false;
    clearInterval(intervalStart);
    intervalBreak = setInterval(function(){
        workTime = workTime + 1000;
        const seconds = Math.floor(workTime / 1000) % 60;
        const minutes = Math.floor(workTime / 60 / 1000) % 60;
        const hours = Math.floor(workTime / 60 / 60 / 1000) % 24;
        writeTimeLeft.innerHTML = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
    },1000)
    breakButton.disabled = true;
}
const format = (value) => {
    if(value < 10) return '0' + value;
    return value < 10? '0'+value : value;
    
}
startButton.addEventListener('click', start);
resetButton.addEventListener('click', reset);
breakButton.addEventListener('click', breakBut);