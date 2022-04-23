'use strict';

const monthsName = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]
const weekDaysName = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday ", "Saturday"
]

let clockLocation = document.getElementById("my_clock");
let dateLocation = document.getElementById("my_date");

function time() {

    const timeNow = new Date();
    const year = timeNow.getFullYear();
    const month = monthsName[timeNow.getMonth()];
    const date = timeNow.getDate();
    const day = weekDaysName[timeNow.getDay()];

    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let meridiem = "AM";

    if (hours > 12) {
        meridiem = "PM";
        hours -= 12;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    clockLocation.textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
    dateLocation.textContent = `${date} / ${month} / ${year} - (${day})`;
    

    setTimeout(time, 1000);

}
time();