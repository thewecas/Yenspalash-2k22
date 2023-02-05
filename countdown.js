// Set the date we're counting down to
var countDownDate = new Date("Jul 1, 2022 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days.toString().length == 1)
        document.getElementById("day").innerHTML = "0" + days;
    else
        document.getElementById("day").innerHTML = days;

    if (hours.toString().length == 1)
        document.getElementById("hour").innerHTML = "0" + hours;
    else
        document.getElementById("hour").innerHTML = hours;
    if (minutes.toString().length == 1)
        document.getElementById("min").innerHTML = "0" + minutes;
    else
        document.getElementById("min").innerHTML = minutes;

    if (seconds.toString().length == 1)
        document.getElementById("sec").innerHTML = "0" + seconds;
    else
        document.getElementById("sec").innerHTML = seconds;


    // document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "<div id=\"neontext\"><span> Fade in Eternity</span></div >";
    }
}, 1000);