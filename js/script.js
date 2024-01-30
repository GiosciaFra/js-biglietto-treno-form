function calcolaPrezzo() {

    const nome = document.querySelector("#nome").value;
    const km = document.querySelector("#km").value;
    const eta = document.querySelector("#eta").value;

    let prezzo = km * 0.21;

    let tipoSconto = "";

    if (!isNaN(eta) && !isNaN(km) && (eta > 0 && eta < 130)) {
        
        if (eta < 18) {
            prezzo *= 0.8;
            tipoSconto = "Sconto Minorenne";
        }

        else if (eta >= 65) {
            prezzo *= 0.6;
            tipoSconto = "Sconto Over 65";

        } else {
            tipoSconto = "Nessuno sconto attivato";
        }
        
    } else {

        alert("Inserimento non valido. Assicurati di inserire valori numerici validi per chilometri ed età.");
    }


    const risultatoElement = document.querySelector("#risultato");

    risultatoElement.innerHTML = 

    `
        <p>Nome passegero: ${nome}</p>
        <p>Chilometri: ${km}</p>
        <p>Età: ${eta}</p>
        <p>Tipo di sconto: ${tipoSconto}</p>
        <p>Il prezzo del biglietto è: ${prezzo.toFixed(2)} €</p>
        
    `;

}