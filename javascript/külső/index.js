window.onload = function() {
    document.getElementById("startbutton").onclick = function szamol() {
    var numberOfBoys = parseInt(document.getElementById("boys").value);
    var numberOfGirls = parseInt(document.getElementById("girls").value);
    var numberOfGirlsAndBoys = numberOfBoys + numberOfGirls;
    var ratioOfBoys = Math.round(numberOfBoys/numberOfGirlsAndBoys*100);
    var rationOfGirls = 100-ratioOfBoys;

    var osszhely = document.getElementById("sum");

    if (numberOfBoys >= 0 && numberOfGirls < 0){
        document.getElementById("error").innerHTML = "A lányok számát nem jól adta meg!";
    }
    else if (numberOfGirls >= 0 && numberOfBoys < 0){
        document.getElementById("error").innerHTML = "A fiúk számát nem jól adta meg!";
    }
    else if (numberOfBoys < 0 && numberOfGirls < 0){
        document.getElementById("error").innerHTML = "Semmit sem jól adott meg. Az élete felesleges";
    }
    else{
        osszhely.innerHTML = "Az osztály létszáma: "+numberOfGirlsAndBoys+"fő.";
        osszhely.style.color = "green";
        osszhely.style.fontWeight = "bold";
        osszhely.style.marginTop = "20px";

        var ah = document.getElementById("ratio");
        ah.innerHTML = "A fiúk aránya "+ratioOfBoys+"%<br>A lányok aránya "+rationOfGirls+"%";
        ah.style.backgroundColor = "yellow";
        ah.style.fontStyle = "italic";
        ah.style.width = "50%";
    }
}
}

