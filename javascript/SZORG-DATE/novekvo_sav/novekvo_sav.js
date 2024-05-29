var loader;
var cucc = 0;

loader = setInterval(function()
{
    document.getElementById("loading_msg").style.visibility = "visible";
    document.getElementById("load").style.width = `${cucc}%`;
    cucc += 1;  
    if(cucc == 100){
        clearInterval(loader);
        document.getElementById("loading_msg").style.visibility = "hidden";
        document.getElementById("content").style.visibility = "visible";
        document.getElementById("load").style.visibility = "hidden";
    }
}, 10)

let reloader = setInterval(function() {
    window.location.reload();
}, 5000)