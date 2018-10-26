/* Programmet använder en funktion som beräknar hypotenusans 
   längd i en rätvinklig triangel och skriver ut resultaten i terminalen. */

function hypotenusasLangd(katet1, katet2){
    let hypotenusa = Math.sqrt(Math.pow(katet1, 2) + Math.pow(katet2, 2));
    console.log(hypotenusa);
}

// Anropas functionen hypotenusasLangs
hypotenusasLangd(3, 5); // Kvadratroten av (3*3 + 5*5) är lika med 5.830951894845301 
hypotenusasLangd(4, 3); // Kvadratroten av (4*4 + 3*3) är lika med 5
hypotenusasLangd(11, 32); // Kvadratroten av (11*11 + 32*32) är lika med 33.83784863137726
