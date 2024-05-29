function start(){

    var date = new Date();
    
    var christmas_day = new Date(2024, 11, 24, 12, 0, 0);
    
    var difference = christmas_day - date;
    
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

    var months = Math.floor(weeks / 4);
    weeks = weeks % 4
    
    document.getElementById("christmas_day").innerHTML = `karácsonyi visszaszámlálás: ${months} hónap ${days} nap ${hours} óra ${minutes} perc
                                                   ${seconds} másodperc ${milliseconds} ezred másodperc`;
    
    
    }
    setInterval(start, 1)