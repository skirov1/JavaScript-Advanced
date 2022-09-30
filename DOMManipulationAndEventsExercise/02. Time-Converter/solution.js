function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minsBtn = document.getElementById('minutesBtn');
    let secsBtn = document.getElementById('secondsBtn');

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let mins = document.getElementById('minutes');
    let secs = document.getElementById('seconds');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minsBtn.addEventListener('click', convertMins);
    secsBtn.addEventListener('click', convertSecs);

    function convertDays() {
        hours.value = days.value * 24;
        mins.value = hours.value * 60;
        secs.value = mins.value * 60;
    }

    function convertHours() {
        days.value = hours.value / 24;
        mins.value = hours.value * 60;
        secs.value = mins.value * 60;
    }

    function convertMins() {
        hours.value = mins.value / 60;
        days.value = hours.value / 24;
        secs.value = mins.value * 60;
    }

    function convertSecs() {
        mins.value = secs.value / 60;
        hours.value = mins.value / 60;
        days.value = hours.value / 24;
    }
}