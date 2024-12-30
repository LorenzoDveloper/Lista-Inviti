if (window.innerWidth <= 768) {
    console.log('Dispositivo mobile');
} else {
    console.log('Dispositivo desktop');
}

// !COMPORTAMENTO PULSANTE UNO //
const pulsante1 = document.getElementById('pulsante1');
const listauno = document.querySelector('.listauno');

let isRed = false;

// Aggiungi un evento al pulsante per cambiare il colore
pulsante1.addEventListener('click', function() {
    const items = listauno.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        if (isRed) {
            items[i].style.color = ""
         } else {
            items[i].style.color = "Red";
         }

    }

    isRed = !isRed;

});

// !COMPORTAMENTO PULSANTE DUE //
const pulsante2 = document.getElementById('pulsante2');
const listadue = document.querySelector('.listadue');

let Red = false;

// Aggiungi un evento al pulsante per cambiare il colore
pulsante2.addEventListener('click', function() {
    const items = listadue.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        if (Red) {
            items[i].style.color = ""
         } else {
            items[i].style.color = "Red";
         }

    }

    Red = !Red;

});

// !COMPORTAMENTO PULSANTE TRE //
const pulsante3 = document.getElementById('pulsante3');
const listatre = document.querySelector('.listatre');

let Redd = false;

// Aggiungi un evento al pulsante per cambiare il colore
pulsante3.addEventListener('click', function() {
    const items = listatre.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        if (Redd) {
            items[i].style.color = ""
         } else {
            items[i].style.color = "Red";
         }

    }

    Redd = !Redd;

});