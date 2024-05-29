function start(){
    document.getElementById("output").style.display="block";
    document.getElementById("startbtn").style.display="none";
    document.getElementById("restartbtn").style.display="block";

    var numberOfCandidates = document.getElementById("numberofcandidates").value;
    var lenghtOfExam = document.getElementById("lenghtofexam").value;
    var basePrice = document.getElementById("baseprice").value;

    var priceOfPresident = (basePrice * 0.05) + (basePrice * 0.035 * numberOfCandidates);
    var priceOfMembers = (basePrice * 0.04) + (basePrice * 0.025 * numberOfCandidates);
    var priceOfNotary = numberOfCandidates * 3000;
    var priceOfGuarding;
    var numberOfGuardians;
    var priceOfGuardingPerHour;
    var priceOfAdministration;

//felügyelők száma
    if(numberOfCandidates >= 1 && numberOfCandidates <= 12){
        numberOfGuardians = 1;
    }
    else if(numberOfCandidates >= 13 && numberOfCandidates <= 24){
        numberOfGuardians = 2;
    }
    else if(numberOfCandidates >= 25 && numberOfCandidates <= 36){
        numberOfGuardians = 3;
    }
    else if(numberOfCandidates >= 37){
        numberOfGuardians = 4;
    }
    else{
        window.alert("Nem lehet negatív a vizsgázók száma!");
    }

//felügyeleti díj óra függvényében
    if(lenghtOfExam > 0 && lenghtOfExam <= 180){
        priceOfGuardingPerHour = 1000;
    }
    else if(lenghtOfExam > 180 && lenghtOfExam <= 300){
        priceOfGuardingPerHour = 1500;
    }
    else if(lenghtOfExam > 300){
        priceOfGuardingPerHour = 2000;
    }
    else{
        window.alert("Nem lehet negatív a vizsga ideje!");
    }

    if(basePrice < 0){
        window.alert("Nem lehet negatív a bázisdíj!")
    }

    priceOfGuarding = numberOfGuardians * (lenghtOfExam/60) * priceOfGuardingPerHour;
    priceOfAdministration = numberOfCandidates * 2000;

    var fullPrice = priceOfPresident + priceOfMembers + priceOfNotary + priceOfGuarding + priceOfAdministration;

    var priceForOnePerson = Math.round(fullPrice / numberOfCandidates);

    var fullPriceOutput = document.getElementById("fullpriceoutput").innerHTML = Math.round(fullPrice);
    var priceForOne = document.getElementById("priceforone").innerHTML = Math.round(priceForOnePerson);
}

function restart(){
    var button = document.getElementById("restartbtn");
    button.addEventListener("click", () => {
        window.location.reload();
    });
}