setInterval(function () {
    var todaysDate = new Date();

    var futureYear = todaysDate.getFullYear() + 1;
    const futureYearSpan = document.getElementById('future-year');
    futureYearSpan.textContent = futureYear;

    var newYearDate = new Date('01 Jan ' + futureYear);

    var distance = newYearDate.getTime() - todaysDate.getTime();
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
}, 1000);