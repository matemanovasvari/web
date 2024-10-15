const list = document.querySelectorAll("#container>div");
function activeMenu(){
    list.forEach((item) => 
        item.classList.remove("menu"));
    this.classList.add("menu");
}

list