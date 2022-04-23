var Month_Table = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]
var Week_Days_Table = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday ", "Saturday"
]

function time() {
    var time_now = new Date();
    var year = time_now.getFullYear();
    var month = Month_Table[time_now.getMonth()];
    var date = time_now.getDate();
    var day = Week_Days_Table[time_now.getDay()];
    var hours = time_now.getHours();
    var minutes = time_now.getMinutes();
    var seconds = time_now.getSeconds();

    var AM = "AM";
    if (hours > 12) {
        AM = "PM";
        hours -= 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("My_clock").textContent =
        hours + ":" + minutes + ":" + seconds + " " + AM;
    document.getElementById("My_Date").textContent =
        date + " / " + month + " / " + year + " - (" + day + ")";

    setTimeout(time, 1000);

}
time();