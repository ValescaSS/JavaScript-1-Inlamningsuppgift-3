// Läser in ett heltal och lagrar värdet i variabeln helTal.
let helTal = prompt("Skriv ett heltal mellan 1 och 1000");

// Funktionen räknar ut fakultet av ett valfritt heltal mellan 1 och 1000.
function factorial(nummer){
    let fakultet = 1;
    let x = 1;
    let meddelandet;
 
    if(nummer >= 1 && nummer <= 1000 && Number.isInteger(+nummer)){
        
        // while-loop som beräknar fakulteten av nummer.
        while(x <= nummer){
            fakultet *= x;
            x++;
        }

        if(fakultet === Infinity){
        
            meddelandet = "<h1>Fel! Det går inte att räkna ut fakulteten av talet " + nummer + "</h1>";   
            
        } else {
            
            meddelandet = "<h1>Fakulteten av talet " + nummer + " är " + fakultet + "</h1>";
            
        }
        
    } else if(nummer === null || isNaN(nummer)){
        
        meddelandet = "<h1>Fel inmatning!</h1>";

    } else {  

        meddelandet = "<h1>" + nummer + " är inte ett heltal mellan 1 och 1000</h1>";
        
    }
    
    // Skriver ut ett meddelande på websidan. 
    document.write(meddelandet);
}

factorial(helTal);
