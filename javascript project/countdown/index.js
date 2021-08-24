const days = document.getElementById('days');
const hours = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const birthday = "04 Jun 2022";

function countdown() {
    const currentYear = new Date();
    const bornday = new Date(birthday);
    console.log(bornday - currentYear);

    const exactDate = bornday- currentYear;

    const d = Math.floor(exactDate/1000/60/60/24);
    const h = Math.floor(exactDate/1000/60/60) %24;
    const m = Math.floor(exactDate/1000/60) % 60;
    const s = Math.floor(exactDate/1000)% 60;


    days.innerHTML = format(d);
    hours.innerHTML = format(h);
    min.innerHTML = format(m);
    sec.innerHTML = format(s);

}

function format(time) { 
    return time < 10 ? `0${time}` : time;
 }
setInterval(countdown,1000);

        