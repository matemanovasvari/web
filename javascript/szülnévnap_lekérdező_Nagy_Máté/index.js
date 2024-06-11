let x
function szamlalas()
{ x =setInterval(feladat, 1000) 
    document.getElementById("bekeresek").style.display = "none"
    document.getElementById("feladatGomb").style.display = "none"

}

function szamlalasStop()
{clearInterval(x)
    document.getElementById("bekeresek").style.display = "block"
    document.getElementById("feladatGomb").style.display = "inline"}

function feladat()
{
    document.getElementById("szamlalasGomb").style.display = "inline"
    document.getElementById("stopgomb").style.display = "inline"

    let evszakokNevei = ["tavasz", "nyár", "ősz", "tél"]
    let napokNevei = [ "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat","vasárnap"]
    let honapokNevei = [ "január", "február", "március", "április", "május", "június","július", "augusztus", "szeptember", "október", "novermber", "december"]
    let p = document.getElementById("eltelt_e")
    p.style.fontSize = "16px"
    let aktDat = new Date()

    let szulDatum = new Date(document.getElementById("szuldat").value)

    let nevDatum =new Date(document.getElementById("nevdat").value)

    

    if((szulDatum.getMonth() < aktDat.getMonth() || (szulDatum.getMonth() == aktDat.getMonth() && szulDatum.getDate() < aktDat.getDate())) && (nevDatum.getMonth() > aktDat.getMonth() || (nevDatum.getMonth() == aktDat.getMonth() && nevDatum.getDate() > aktDat.getDate())))
    {
        document.getElementById("eltelt_e").innerHTML = "A születésnap már eltelt, de a névnap még nem."
        
    }
    else if((szulDatum.getMonth() < aktDat.getMonth() || (szulDatum.getMonth() == aktDat.getMonth() && szulDatum.getDate() < aktDat.getDate())) && (nevDatum.getMonth() < aktDat.getMonth() || (nevDatum.getMonth() == aktDat.getMonth() && nevDatum.getDate() < aktDat.getDate())))
    {
        document.getElementById("eltelt_e").innerHTML = "A születésnap és a névnap is eltelt."
    }
    else if((szulDatum.getMonth() > aktDat.getMonth() || (szulDatum.getMonth() == aktDat.getMonth() && szulDatum.getDate() > aktDat.getDate())) && (nevDatum.getMonth() < aktDat.getMonth() || (nevDatum.getMonth() == aktDat.getMonth() && nevDatum.getDate() < aktDat.getDate())))
    {
        document.getElementById("eltelt_e").innerHTML = "A névnap már eltelt, de a születésnap még nem."
    }
    else if((szulDatum.getMonth() > aktDat.getMonth() || (szulDatum.getMonth() == aktDat.getMonth() && szulDatum.getDate() > aktDat.getDate())) && (nevDatum.getMonth() > aktDat.getMonth() || (nevDatum.getMonth() == aktDat.getMonth() && nevDatum.getDate() > aktDat.getDate())))
    {
        document.getElementById("eltelt_e").innerHTML = "A születésnap és a névnap sem telt még el."
    }
    else if((szulDatum.getMonth() == aktDat.getMonth() && szulDatum.getDate() == aktDat.getDate()) && (nevDatum.getMonth() == aktDat.getMonth() && nevDatum.getDate() == aktDat.getDate()))
    {
       
        p.innerHTML = "Boldog születésnapot és névnapot!" 
        p.style.fontSize = "24px"
        p.style.color = "red"
                                                    
    }
    else if(szulDatum.getMonth() == aktDat.getMonth() && szulDatum.getDate() == aktDat.getDate())
    {
       
        p.innerHTML = "Boldog születésnapot!" 
        p.style.fontSize = "24px"
        p.style.color = "red"
    }
    else if(nevDatum.getMonth() == aktDat.getMonth() && nevDatum.getDate() == aktDat.getDate())
    {
    p.innerHTML = "Boldog névnapot!" 
    p.style.fontSize = "24px"
    p.style.color = "red"}

    else
    {
        p.innerHTML = "Nem megfelelően megadott dátum" 
        return
    }


    let kovSzulNap
    let kulonbseg
    let mas
    let perc
    let ora
    let nap
    let kovSzulNapNapSzam
    let kovSzulNapNapNev
    let kovSzulnapHonapNev

    if(szulDatum.getMonth() < aktDat.getMonth() || (szulDatum.getMonth() == aktDat.getMonth() && szulDatum.getDate() < aktDat.getDate()))
    {
         kovSzulNap = new Date(szulDatum.getFullYear()+1, szulDatum.getMonth(), szulDatum.getDate())
        kulonbseg = kovSzulNap - aktDat

         mas =Math.floor(kulonbseg/1000)
         perc =Math.floor(mas /60)
        mas = mas %60

         ora =Math.floor(perc/60)
        perc = perc %60

         nap =Math.floor(ora/24)
        ora = ora %24

         kovSzulNapNapSzam = kovSzulNap.getDay()
         kovSzulNapNapNev = ""
        switch (kovSzulNapNapSzam)
        {
            case 1:
            {
                kovSzulNapNapNev = napokNevei[0]
                break
            }
            case 2:
            {
                kovSzulNapNapNev = napokNevei[1]
                break
            }
            case 3:
            {
                kovSzulNapNapNev = napokNevei[2]
                break
            }
            case 4:
            {
                kovSzulNapNapNev = napokNevei[3]
                break
            }
            case 5:
            {
                kovSzulNapNapNev = napokNevei[4]
                break
            }
            case 6:
            {
                kovSzulNapNapNev = napokNevei[5]
                break
            }
            case 0:
            {
                kovSzulNapNapNev = napokNevei[6]
                break
            }
             
        }
        kovSzulnapHonapNev = honapokNevei[kovSzulNap.getMonth()]
        document.getElementById("kovSzulNap").innerHTML = `A következő születésnapja ${kovSzulNap.getFullYear() + 1}. ${kovSzulnapHonapNev} ${kovSzulNap.getDate()}, ${kovSzulNapNapNev},
        még ${nap} nap, ${ora} óra, ${perc} perc, ${mas} másodperc van hátra`
    }
    else if(szulDatum.getMonth() > aktDat.getMonth() || (szulDatum.getMonth() == aktDat.getMonth() && szulDatum.getDate() > aktDat.getDate()))
    {
         kovSzulNap = new Date(szulDatum.getFullYear(), szulDatum.getMonth(), szulDatum.getDate())
         kulonbseg = kovSzulNap - aktDat

         mas =Math.floor(kulonbseg/1000)
         perc =Math.floor(mas /60)
        mas = mas %60

         ora =Math.floor(perc/60)
        perc = perc %60

         nap =Math.floor(ora/24)
        ora = ora %24

         kovSzulNapNapSzam = kovSzulNap.getDay()
         kovSzulNapNapNev = ""
        switch (kovSzulNapNapSzam)
        {
            case 1:
            {
                kovSzulNapNapNev = napokNevei[0]
                break
            }
            case 2:
            {
                kovSzulNapNapNev = napokNevei[1]
                break
            }
            case 3:
            {
                kovSzulNapNapNev = napokNevei[2]
                break
            }
            case 4:
            {
                kovSzulNapNapNev = napokNevei[3]
                break
            }
            case 5:
            {
                kovSzulNapNapNev = napokNevei[4]
                break
            }
            case 6:
            {
                kovSzulNapNapNev = napokNevei[5]
                break
            }
            case 0:
            {
                kovSzulNapNapNev = napokNevei[6]
                break
            }
             
        }
         kovSzulnapHonapNev = honapokNevei[kovSzulNap.getMonth()]
        document.getElementById("kovSzulNap").innerHTML = `A következő születésnapja ${kovSzulNap.getFullYear()}. ${kovSzulnapHonapNev} ${kovSzulNap.getDate()}, ${kovSzulNapNapNev},
        még ${nap} nap, ${ora} óra, ${perc} perc, ${mas} másodperc van hátra`
        
    }

    let aktNapNeve 
    let aktHonapNeve
    let aktEvszak = ""
    
    switch (aktDat.getDay())
        {
            case 1:
            {
                aktNapNeve = napokNevei[0]
                break
            }
            case 2:
            {
                aktNapNeve = napokNevei[1]
                break
            }
            case 3:
            {
                aktNapNeve = napokNevei[2]
                break
            }
            case 4:
            {
                aktNapNeve = napokNevei[3]
                break
            }
            case 5:
            {
                aktNapNeve = napokNevei[4]
                break
            }
            case 6:
            {
                aktNapNeve = napokNevei[5]
                break
            }
            case 0:
            {
                aktNapNeve = napokNevei[6]
                break
            }
             
        }
        aktHonapNeve = honapokNevei[aktDat.getMonth()]

        if(aktDat.getMonth() >=11 || aktDat.getMonth() <=1 )
        {
            aktEvszak = evszakokNevei[3]
        }
        else if(aktDat.getMonth() >=2 && aktDat.getMonth() <=4 )
        {
            aktEvszak = evszakokNevei[0]
        }
        else if(aktDat.getMonth() >=5 && aktDat.getMonth() <=7 )
        {
            aktEvszak = evszakokNevei[1]
        }
        else if(aktDat.getMonth() >=8 && aktDat.getMonth() <=10 )
        {
            aktEvszak = evszakokNevei[2]
        }
        document.getElementById("lekerdezesIdeje").innerHTML = `A mai nap: ${aktDat.getFullYear()}. ${aktHonapNeve} ${aktDat.getDate()}. (${aktNapNeve}, ${aktEvszak})`
}