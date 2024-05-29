var backBtn = document.getElementById("backbtn");
var forwardBtn = document.getElementById("forwardbtn");

var sliderId = 1

forwardBtn.addEventListener("click",() =>{
    sliderId += 1;

    backBtn.disabled = false;

    document.getElementById(`slider${sliderId}`).style.display = "block";

    if (sliderId == 10){
        forwardBtn.disabled = true
    }
});

backBtn.addEventListener("click",() =>{
    sliderId -= 1;

    if(sliderId == 1){
        backBtn.disabled = true;
    }

    forwardBtn.disabled = false

    document.getElementById(`slider${sliderId+1}`).style.display = "none";
    
    document.getElementById(`slider${sliderId}`).style.display = "block";
});