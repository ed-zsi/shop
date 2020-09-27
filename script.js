window.onload = function () {
    const btn = document.getElementById("btn");
    const nav = document.getElementById("nav");

    btn.addEventListener("click", () => {
        nav.classList.toggle("active");
        btn.classList.toggle("active");
    });

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secondsEl = document.getElementById("seconds");

    const opening = "20 Jan 2150";

    function countdown() {
        const openingDate = new Date(opening);
        const currentDate = new Date();

        const totalSeconds = (openingDate - currentDate) / 1000;

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // initial call
    countdown();

    setInterval(countdown, 1000);

}


//A vissza számláló kódot innen loptam: https://github.com/florinpop17/10-projects-10-hours
//de tudom hogy működik mert már csináltam node.js ben