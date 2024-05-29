function start(){

var date = new Date();

var birthday = new Date(2006, 9, 2, 17, 30, 0);

var difference = Math.abs(date - birthday);

document.getElementById("actual_time").innerHTML = `Az aktuális idő: ${date}`
document.getElementById("birthday").innerHTML = `Az szülinap dátuma és ideje: ${birthday}`
document.getElementById("difference").innerHTML = `A szülinaptól eltelt idő: ${difference} ezred másodperc`

var seconds = Math.floor(difference / 1000);
var milliseconds = difference % 1000;

var minutes = Math.floor(seconds / 60);
seconds = seconds%60;

var hours = Math.floor(minutes / 60);
minutes = minutes%60

var days = Math.floor(hours / 24);
hours = hours % 24

var weeks = Math.floor(days / 7);
days = days % 7

var years = Math.floor(weeks / 52);
weeks = weeks % 52

document.getElementById("normal").innerHTML = `A szülinaptól eltelt idő: ${years} év ${weeks} hét ${days} nap ${hours} óra ${minutes} perc
                                               ${seconds} másodperc ${milliseconds} ezred másodperc`;


}
setInterval(start, 1)