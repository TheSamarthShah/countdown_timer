const HOURHAND = document.querySelector("#hour")
const MINUTEHAND = document.querySelector("#minute")
const SECONDHAND = document.querySelector("#second")
function runClock() {
    var date = new Date()

    var hr = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()

    let hrPosi = hr * (360 / 12) + min * (360 / 60) / 12
    let minPosi = min * (360 / 60) + sec * (360 / 60) / 60
    let secPosi = sec * (360 / 60)

    HOURHAND.style.transform = "rotate(" + hrPosi + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minPosi + "deg)"
    SECONDHAND.style.transform = "rotate(" + secPosi + "deg)"
}

var interval = setInterval(runClock, 1000)


//new try
var start = document.getElementById("start")
var reset = document.getElementById("reset")
var hour = document.getElementById("h")
var minute = document.getElementById("m")
var second = document.getElementById("s")

var startTimer;
start.addEventListener('click', function(){
    if(hour.value != 0 || minute.value != 0 || second.value != 0){
        startTimer = setInterval(timer, 1000)
    }else if(hour.value == 0 && minute.value == 0 && second.value == 0) {
        alert("Enter Time my friend!")
    }else {
        alert("Timer is already running");
    }
})
/*start.addEventListener('click', function(){
    
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})
*/
reset.addEventListener('click', function(){
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    
    stopInterval()
})

function timer(){
    if(hour.value == 0 && minute.value == 0 && second.value == 0){
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
    } else if(second.value != 0){
        second.value--;
    } else if(minute.value != 0 && second.value == 0){
        second.value = 59;
        minute.value--;
    } else if(hour.value != 0 && minute.value == 0){
        minute.value = 59;
        hour.value--;
    }
    return;
}


function stopInterval() {
    clearInterval(startTimer);
}




//old try
/*


const CD = () => {
    const TILLDATE = new Date("9 01, 2021 18:00:00").getTime()
    const TODAY = new Date().getTime()
    const GAP = TILLDATE - TODAY

    const sec = 1000
    const min = sec * 60
    const hour = min * 60
    const day = hour * 24

    const textDay = Math.floor(GAP / day)
    const textHour = Math.floor((GAP % day) / hour)
    const textMin = Math.floor((GAP % hour) / min)
    const textSec = Math.floor((GAP % min) / sec)

    document.querySelector(".day").innerText = textDay
    document.querySelector(".hour").innerText = textHour
    document.querySelector(".minute").innerText = textMin
    document.querySelector(".second").innerText = textSec
     || (GAP < 0 && GAP >= ('-'+hour))
    if (GAP == 0) {
        document.querySelector(".txt").innerText = "Hey time has come my friend!"
    }
    else if (GAP > 0) {
        document.querySelector(".txt").innerText = "Hey my friend you sitll have time"
    }
    else {
        document.querySelector(".txt").innerText = "Time has gone my friend!"
    }

  function cck() { 
       var start = setInterval(CD, 1000)
        setTimeout(() => {
            clearInterval(start)
        }, GAP);
    /*function stopTimer() {
        clearInterval(start)
    }
    setTimeout(() => {
        if(GAP <= 0){
            stopTimer()
       } 
    }, GAP);
    
  }
  cck()

}*/

/* 

const condi = () => {
if (cd.GAP >0) {
    CD()
    
} else {
    console.log("haha")
    
}
}
const cd= CD()

if (cd.GAP ==0){
    clearInterval(CD)
}
else{
    setInterval(CD, 1000)
}
*/

