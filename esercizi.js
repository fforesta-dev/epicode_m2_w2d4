// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% dei dati che maneggerai saranno array di oggetti!!) quindi
assicurati di COMPRENDERE la logica. Se ti trovi in difficoltà, scrivi ad un membro del teaching staff! :)

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE è / non è un ambassador" basandoti sui dati contenuti nell'oggetto.
ES. L'utente Marco Rossi è un ambassador, quindi la frase dovrebbe essere "Marco Rossi è un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
};

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
};

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
};

const prices = [34, 5, 2];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!

// TOTALE DEL CARRELLO

// Parto da 0 e sommo i prezzi uno alla volta
let totaleCarrello = 0;
for (let i = 0; i < prices.length; i++) {
  totaleCarrello = totaleCarrello + prices[i];
}

// Lo sconto viene prima della spedizione: il 30% in meno vuol dire pagare il 70%
if (utenteCheEffettuaLAcquisto.isAmbassador) {
  totaleCarrello = totaleCarrello * 0.7;
}

// La soglia dei 100 la controllo sul totale già scontato. Con 100 esatti la spedizione si paga ancora
const spedizione = totaleCarrello > 100 ? 0 : shippingCost;
const totaleDaPagare = totaleCarrello + spedizione;

// toFixed(2) mostra sempre due decimali, come in un prezzo vero
console.log(
  utenteCheEffettuaLAcquisto.name +
    ' ' +
    utenteCheEffettuaLAcquisto.lastName +
    ' paga ' +
    totaleDaPagare.toFixed(2) +
    ' (prodotti ' +
    totaleCarrello.toFixed(2) +
    ', spedizione ' +
    spedizione +
    ')'
);

// ARRAY DI UTENTI

const utenti = [];
utenti.push(marco, paul, amy); // push accetta anche più elementi in una volta sola

for (let i = 0; i < utenti.length; i++) {
  const utente = utenti[i];

  if (utente.isAmbassador) {
    console.log(utente.name + ' ' + utente.lastName + ' è un ambassador');
  } else {
    console.log(utente.name + ' ' + utente.lastName + ' non è un ambassador');
  }
}

// SOLO GLI AMBASSADOR

const soloAmbassador = [];
for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador) {
    soloAmbassador.push(utenti[i]);
  }
}

console.log(soloAmbassador);
