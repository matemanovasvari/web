var startValue = 0;
var timer;

console.log(startValue)

function Start(){
timer = setInterval(function()
{
    document.getElementById("stopbtn").style.visibility = "visible";
    document.getElementById("restartbtn").style.visibility = "visible";
    document.getElementById("startbtn").style.visibility = "hidden";
    document.getElementById("stopbtn").style.left = "50%";
    
    var minutes = Math.floor(startValue / 60);
    var seconds = startValue % 60;
    
    document.getElementById("countdown").innerHTML = `${minutes}m ${seconds}s`;

    if(minutes == 0){
        document.getElementById("countdown").innerHTML = `${seconds}s`;
    }
    
    startValue += 1;

    if(startValue < 0){
        clearInterval(timer)
        document.getElementById("popup").style.visibility = "visible";
        document.getElementById("startbtn").style.visibility = "hidden";
        document.getElementById("stopbtn").style.visibility = "hidden";
        document.getElementById("countdown").style.visibility = "hidden";
    }
    
}, 1000)
}

function Stop(){
    clearInterval(timer)
    document.getElementById("stopbtn").style.left = "60%";
    document.getElementById("startbtn").style.left = "40%";
    document.getElementById("startbtn").style.top = "75%";
    document.getElementById("startbtn").style.visibility = "visible";

}

function Close(){
    window.location.reload();
}

function Restart(){
    var button = document.getElementById("restartbtn")

    button.addEventListener("click", () => {
        startValue = 0;
    });
}