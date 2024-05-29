function mutasd(){
    var character = document.getElementById("valasz").value[0].toLowerCase();

    switch (character){
        case "n" : document.getElementById("negyzet").style.display = "block"; break
        case "t" : document.getElementById("teglalap").style.display = "block"; break
        case "r" : document.getElementById("rombusz").style.display = "block"; break
        case "p" : document.getElementById("paralelogramma").style.display = "block"; break
        case "d" : document.getElementById("deltoid").style.display = "block"; break
        case "z" : document.getElementById("trapez").style.display = "block"; break
        case "k" : document.getElementById("kor").style.display = "block"; break
        case "s" : document.getElementById("sokszogek").style.display = "block"; break

    }
}