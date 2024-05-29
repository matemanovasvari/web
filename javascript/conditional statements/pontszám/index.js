function start(){
    var firstTaskScore = parseInt(document.getElementById("firsttask").value);
    var secondTaskScore = parseInt(document.getElementById("secondtask").value);
    var thirdTaskScore = parseInt(document.getElementById("thirdtask").value);
    var fourthTaskScore = parseInt(document.getElementById("fourthtask").value);
    var fifthTaskScore = parseInt(document.getElementById("fifthtask").value);
    var mark;
    const maxPoints = 40;

    var sumOfScores = firstTaskScore + secondTaskScore + thirdTaskScore + fourthTaskScore + fifthTaskScore;

    document.getElementById("sum").innerHTML = "The score from 40 point is: "+sumOfScores;
    var percent = sumOfScores / maxPoints;
    var calculatedPercent = Math.round(percent * 10000)/100;

    document.getElementById("percent").innerHTML = "The percentige is: "+calculatedPercent+"%";

    if (calculatedPercent <= 39){
        mark = 1;
    }
    else if (calculatedPercent <= 49){
        mark = 2;
    }
    else if (calculatedPercent <= 59){
        mark = 3;
    }
    else if (calculatedPercent <= 79){
        mark = 4;
    }
    else{
        mark = 5;
    }

    document.getElementById("mark").innerHTML = "The mark is: "+mark;
}