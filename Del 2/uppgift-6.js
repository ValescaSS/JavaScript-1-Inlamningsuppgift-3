// Läser in ett heltal och lagrar värdet i variabeln helTal.
let helTal = prompt("Skriv ett heltal");

// Funktionen räknar ut fakultet av ett valfritt heltal mellan 1 och 1000.
function factorial(nummer){
    let fakultet = 1;
    let x = 1;
    let meddelandet;

    /* if-else satsen beräknar fakulteten om parameter "nummer" är ett heltal mellan 1 och 1000 
    och tilldelar resultaten till variabeln "meddelandet". 
    Annars tilldelar ett felmeddelande till variabeln "meddelandet"*/ 
    if((nummer >= 1) && (nummer <= 1000) && (Number.isInteger(nummer)) && (!isNaN(nummer))){
        
        // while-loop som beräknar fakulteten av "nummer".
        while(x <= nummer){
            fakultet *= x;
            x++;
        } 
        meddelandet = "<h1>Fakulteten av talet " + nummer + " är " + fakultet + "</h1>"; 

    } else {

        meddelandet = "<h1>" + nummer + " är inte ett heltal mellan 1 och 1000</h1>";

    }
    
    // Skriver ut ett meddelande på websidan. 
    document.write(meddelandet);
}

factorial(helTal);
