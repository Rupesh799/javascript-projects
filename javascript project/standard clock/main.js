const timeData = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
};

function clock() {
    let d = new Date();
    let date = d.toLocaleDateString(undefined, timeData);


    let hours = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let day_night = "AM"
    if (hours > 12) {
        day_night = "PM";
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    let Times = " " + hours + " " + ":" + " " + min + " " + ":" + " " + sec + " " + day_night;



    document.getElementById('time').innerHTML = Times;
    document.getElementById('date').innerHTML = date;
}

setInterval(clock, 1000);



