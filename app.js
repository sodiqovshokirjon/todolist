function report() {
    document.querySelector(".setting").classList.add("report")
}

const pomodoroinput = document.querySelector(".pomodoro-input").addEventListener('input', function (event) {
    
    
    startTime = text.textContent = event.target.value

return startTime


})
const shortbreakinput = document.querySelector(".short-break-input")
const longbreakinput = document.querySelector(".long-break-input")
const text = document.querySelector(".text")
const pomodoro = document.querySelector(".pomodoro")
const shortbreak = document.querySelector(".short-break")
const longbreak = document.querySelector(".long-break")
const start = document.querySelector(".start")
var playing = false
var startTime = 25 * 60
var remember = startTime
var timeleft = startTime
let intervalId
document.querySelector("body").style.background = "rgba(221, 10, 10, 0.479)"
function formatTime(time) {
    return time < 10 ? `0${time}` : time
}
text.innerText = `${formatTime(Math.floor(startTime / 60))}:${formatTime(startTime - Math.floor(startTime / 60) * 60)}`

function countdown() {
    timeleft = timeleft - 1
    let minut = Math.floor(timeleft / 60)
    let second = timeleft - minut * 60
    let selected = "Pomodoro"
    text.innerText = `${formatTime(minut)}:${formatTime(second)}`
    if (timeleft < 0) {
        clearInterval(intervalId)
        text.innerText = "nice!!!"
        resetTimer()
    }
}

function startTimer() {
    countdown()
    intervalId = setInterval(countdown, 1000)
}



function pauseTimer() {
    clearInterval(intervalId)
}

function resetTimer() {
    pauseTimer()
    playing = false
    start.innerHTML = "START"
    timeleft = startTime
    text.innerHTML = `${formatTime(Math.floor(startTime / 60))}:${formatTime(startTime - Math.floor(startTime / 60) * 60)}`
}

function onclickfunktion() {
    if (playing === false) {
        start.innerText = "STOP"
        playing = true
        startTimer()
    } else {
        start.innerHTML = "START"
        playing = false
        pauseTimer()
    }
}
start.addEventListener("click", onclickfunktion)
pomodoro.addEventListener('click', function () {
    pomodoro.classList.add("active")
    document.querySelector("body").style.background = "rgba(221, 10, 10, 0.479)"
    longbreak.classList.remove("active")
    shortbreak.classList.remove("active")
    startTime = remember
    resetTimer()
})
shortbreak.addEventListener('click', function () {
    shortbreak.classList.add("active")
    document.querySelector("body").style.background = "rgba(0, 195, 255, 0.842)"
    pomodoro.classList.remove("active")
    longbreak.classList.remove("active")
    startTime = 60 * 5
    resetTimer()
})
longbreak.addEventListener('click', function () {
    shortbreak.classList.remove("active")
    document.querySelector("body").style.background = 'rgba(25, 0, 255, 0.753)'
    pomodoro.classList.remove("active")
    longbreak.classList.add("active")
    startTime = 60 * 15
    resetTimer()
})