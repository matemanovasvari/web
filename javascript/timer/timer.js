var countDown = 90;
var timer;

console.log(countDown)

function Start(){
timer = setInterval(function()
{
    document.getElementById("stopbtn").style.visibility = "visible";
    document.getElementById("restartbtn").style.visibility = "visible";
    document.getElementById("startbtn").style.visibility = "hidden";
    document.getElementById("stopbtn").style.left = "50%";
    
    var minutes = Math.floor(countDown / 60);
    var seconds = countDown % 60;
    
    document.getElementById("countdown").innerHTML = `${minutes}m ${seconds}s`;

    if(minutes == 0){
        document.getElementById("countdown").innerHTML = `${seconds}s`;
    }
    
    countDown -= 1;

    if(countDown < 0){
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
        countDown = 90;
    });
}