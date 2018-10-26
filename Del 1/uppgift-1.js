/* Uppgift 1: Programmet skapar två objekt med hjälp av en funktion konstruktör. 
   Funktionen beskriver en persons namn, epost, mobil och adress. */

// function konstruktör som accepterar tre parameter för att skapa ett person objekt. 
function Person(namn, epost, mobil){
    this.namn = namn;
    this.epost = epost;
    this.mobil = mobil;
    // Egenskapen adress är ett objekt som innehåller egenskaperna gatuadress, postnummer och ort.
    this.adress = [];
    // Metod som skriver ut adressen i svensk format.
    this.print = function(){
        console.log(this.namn + "\n\n" + this.adress[0].gatuAdress + "\n" + 
                    this.adress[0].postNummer + " " + this.adress[0].ort);
    };
}

// function Konstruktör som accepterar tre parameter för att skapa ett adress objekt. 
function Adress(gatuAdress, postNummer, ort){
    this.gatuAdress = gatuAdress;
    this.postNummer = postNummer;
    this.ort = ort;
}

// Skapas två person objektet med hjälp av konstruktör Person.
let mahmud = new Person ("Mahmud Al Hakim", "mahmudalhakim@gmail.se","0739875623");
let valesca = new Person ("Valesca Sarrocchi", "valesca1@gmail.se", "0769853217")

// Skapas två adress objektet med hjälp av konstruktör Adress.
let adress1 = new Adress("Hemfridsvägen 17", "192 67", "Sollentuna");
let adress2 = new Adress("Drottninggatan 12", "112 37", "Stockholm");

// Lägger till adress1 och adress1 till objektet adress i objekten mahmud respektive valesca.
mahmud.adress.push(adress1);
valesca.adress.push(adress2);

// Anropar metoden print i objektet mahmud och valesca och skriver ut de respektive adresserna i svensk format. 
console.log("\n");
mahmud.print();
console.log("\n");
valesca.print();
console.log("\n");
