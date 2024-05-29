var timer = 0

let changeTime = setInterval(function()
{
   timer += 5000;

    document.getElementById("text").style.color = "black";
    document.getElementById("background").style.backgroundColor = "white";

    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img3").style.display = "block";

    document.getElementById("img4").style.display = "none";
    document.getElementById("img5").style.display = "none";
    document.getElementById("img6").style.display = "none";
    
   if(timer == 10000){
    document.getElementById("text").style.color = "white";
    document.getElementById("background").style.backgroundColor = "black";

    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";

    document.getElementById("img4").style.display = "block";
    document.getElementById("img5").style.display = "block";
    document.getElementById("img6").style.display = "block";
    
    timer = 0;
   }
}, 5000)