let x = 0;
let y = 0;
var table = document.getElementById("table");

// X adat lekérdezése
function chx() {
x = document.getElementById("x").value;
}

// Y adat lekérdezése
function chy() {
y = document.getElementById("y").value;
}

function make() {

// Első sor elkészítése
let rowhead = document.createElement("tr");
let firstheader = document.createElement("th");

rowhead.append(firstheader)
for (i=1;i<=x;i++) {
    let header = document.createElement("th");

    header.setAttribute("x", `${i}`);
    header.setAttribute("y", `0`);

    header.innerHTML = `${i}`;
    rowhead.append(header);
}
table.append(rowhead)

// Következő sorok elkészítése
for (i=1;i<=y;i++) {
    let row = document.createElement("tr");
    let firstheadere = document.createElement("th");

    firstheadere.setAttribute("x", `0`);
    firstheadere.setAttribute("y", `${i}`);

    firstheadere.innerHTML = `${i}`;
    row.append(firstheadere);

    for (j=1;j<=x;j++) {
        let col = document.createElement("td");

        col.setAttribute("x", `${j}`);
        col.setAttribute("y", `${i}`);

        col.innerHTML = `${j * i}`;
        row.append(col);
    }
    table.append(row);
}

let hovers = document.querySelectorAll("td");

hovers.forEach(element => {
    element.addEventListener("mouseover", function(){
        let x = element.getAttribute("x");
        let y = element.getAttribute("y");
    });
});

}   