var [seconds, minutes, hour] = [0,0,0];
var displayTime = document.getElementById("displayTime");
let timer = null
 
function stopwatch(){
    seconds++;
    if (seconds == 60) {
        seconds = 0
        minutes++
        if (minutes == 60) {
            minutes = 0
            hour++
        }
    }  
    let h = hour < 10 ? "0" + hour:hour
    let m = minutes < 10 ? "0" + minutes:minutes
    let s = seconds < 10 ? "0" + seconds:seconds
    displayTime.innerHTML = `${h} : ${m}: ${s}`
}
function startwatch(){
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}
function pausewatch(){
        clearInterval(timer);
}
function replaywatch(){
        clearInterval(timer);
        [seconds, minutes, hour] = [0,0,0]
        displayTime.innerHTML = "00 : 00: 00"
}
// h +":"+ m +":"+ s