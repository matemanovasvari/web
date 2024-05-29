function start(){
    document.getElementById("outputs").style.display="block";
    document.getElementById("start_btn").style.display="none";
    document.getElementById("restart_btn").style.display="block";

    var sizeOfConsumption = document.getElementById("sizeofconsumption").value;
    var basePrice = document.getElementById("baseprice").value;
    var priceLimit = document.getElementById("pricelimit").value;
    var priceAboveLimit = document.getElementById("priceabovelimit").value;
    var priceBelowLimit = document.getElementById("pricebelowlimit").value;
    var bigFamilyDiscount = document.getElementById("bigfamilydiscount").value;
    var sizeOfExtraordinaryDiscount = document.getElementById("sizeofextraordinarydiscount").value;

    var priceBasedOnConsumption = (priceLimit * priceBelowLimit) + ((sizeOfConsumption - priceLimit) * priceAboveLimit);
    document.getElementById("consumptionbasedprice").innerHTML = priceBasedOnConsumption;

    var priceWithBigFamilyDiscount;

    if(bigFamilyDiscount == 1){
        priceWithBigFamilyDiscount = priceBasedOnConsumption - Math.round(priceBasedOnConsumption * 0.05);
    }
    else{
        priceWithBigFamilyDiscount = priceBasedOnConsumption - (priceBasedOnConsumption * 0);
    }
    document.getElementById("pricewithbfd").innerHTML = Math.round(priceWithBigFamilyDiscount);

    var priceWithBasePrice = priceWithBigFamilyDiscount + Number(basePrice);
    document.getElementById("pricewithbaseprice").innerHTML = priceWithBasePrice;

    var priceWithExtraordinaryDiscount = priceWithBasePrice * (sizeOfExtraordinaryDiscount / 100)
    document.getElementById("pricewithextraordinarydiscount").innerHTML = Math.round(priceWithExtraordinaryDiscount);

    var priceToPay = priceWithBasePrice - priceWithExtraordinaryDiscount;
    document.getElementById("pricetopay").innerHTML = Math.round(priceToPay);

    if(sizeOfConsumption < 0 || basePrice < 0 || priceLimit < 0 || priceAboveLimit < 0 || priceBelowLimit < 0 || bigFamilyDiscount < 0 || sizeOfExtraordinaryDiscount < 0){
        window.alert("Nem lehet negatív semelyik adat sem")
    }
}

function restart(){
    var button = document.getElementById("restart_btn");
    button.addEventListener("click", () => {
        window.location.reload();
    });
}