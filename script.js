function cambiaTitolo() {
    document.querySelector("h1").textContent = "Nuovo Titolo Per Il Sito"
}


function cambiaColore(colore) {
    document.body.style.backgroundColor = colore;

}


let indirizzo = document.getElementById('indirizzo');
let modificaIndirizzo = false;
function cambiaIndirizzo() {
    if (modificaIndirizzo) {
        indirizzo.textContent = "Napoli, corso Protopisani n, 80146";
        modificaIndirizzo = false;
    } else {
        indirizzo.textContent = "Torino, via Pietro Cossa n, 10146";
        modificaIndirizzo = true;
    }
}



function cambiaClasse() {
    const linkAmazon = document.querySelectorAll('.linkamazon');
    for (i = 0; i < linkAmazon.lenght; i++) {
        linkAmazon[i].classList.add('linknew')
    }

}


/*
function nascondiImmagine(){
    const immagine = document.querySelector("img");
    for(i= 0; i < immagine.lenght; i++){
        immagine[i].classList.add("nascondi")
    }

}*/

const deleteButton = document.getElementById('deleteButton');
const imageElement = document.getElementById('imageElement');

deleteButton.addEventListener('click', function () {
    imageElement.parentNode.removeChild(imageElement);
});



function changeColorP(colore) {
    document.getElementById("prezzo").style.color = colore

}


