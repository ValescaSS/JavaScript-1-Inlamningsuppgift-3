/* Inlämningsuppgift 3 - Uppgift 5:
   Programmet skriver ut i konsolen en frekvenstabell med förekomsten av 
   ettor, tvåor, treor, fyror, femmor och sexor i 1000 kast av en tärning. */

// Funktionen skapar 1000 slumpmässiga tal mellan 1 och 6 och returnerar en array.   
function randomDice(){
    let arr = new Array();
    for (let i = 0; i < 1000; i++){
        arr.push(Math.floor(Math.random() * 6 + 1));
    }
    return arr; 
}

// Funktionen skapar en frekvenstabell över förekomsten av ettor, tvåor, osv.
function print(){

    // Funktionen randomDice returnerar en array som lagras i en ny variabel.
    let x = randomDice();

    // Initieras variablernas som kommer att spara förekomsten av ettor, tvåor, treor, fyror, femmor och sexor.
    let antal1 = 0;
    let antal2 = 0;
    let antal3 = 0;
    let antal4 = 0;
    let antal5 = 0;
    let antal6 = 0;

    // For-loop som går igenom de 1000 instanser i x (array).
    for (let i = 0; i < 1000; i++){

        // Beräknas antal ettor, tvåor, treor, fyror, femmor och sexor som finns i arrayen x.
        switch(x[i]){
            case 1: antal1 += 1; break;
            case 2: antal2 += 1; break;
            case 3: antal3 += 1; break;
            case 4: antal4 += 1; break;
            case 5: antal5 += 1; break;
            case 6: antal6 += 1; break;
        } 
    }

    // Objekt som sparar förekomsten av ettor, tvåor, treor, fyror, femmor och sexor.
    let tarning = {
        Ettor  : antal1,
        Tvåor  : antal2,
        Treor  : antal3,
        Fyror  : antal4,
        Femmor : antal5,
        Sexor  : antal6
    };
    
    // Skriver ut en tabell med förekomsten av ettor, tvåor, treor, fyror, femmor och sexor i konsolen.
    console.table(tarning);
}

print();
