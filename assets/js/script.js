//ANIMAÇAO DO MENU =========================================
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav");

hamburguer.addEventListener('click', () => navMenu.classList.toggle('active'));


//ANIMAÇAO DA PAGINA =========================================

const elements = document.querySelectorAll('[data-anima]');
const anamacaoClass = 'animacao';

//faz a animacao
function animaScroll() {
    const topPageWin = window.pageYOffset + ((window.innerHeight * 3) / 4);
    elements.forEach(function (elemento) {
        if (topPageWin > elemento.offsetTop) {
            elemento.classList.add(anamacaoClass);
        } else {
            elemento.classList.remove(anamacaoClass);
        }
    });
}

if (elements.length) {
    window.addEventListener('scroll', function () {
        animaScroll();
    })
}

// Botao do Whatsapp ==================================================================
function showIt2() {
    document.getElementById("msg1").style.visibility = "visible";
}
setTimeout("showIt2()", 5000);
function hiddenIt() {
    document.getElementById("msg1").style.visibility = "hidden";
}

setTimeout("hiddenIt()", 1500); 
function showIt3() { document.getElementById("msg1").style.visibility = "visible";

 } 
setTimeout("showIt3()", 1500);
msg1.onclick = function () { document.getElementById('msg1').style.visibility = "hidden"; 

}; 

function alertW() { document.getElementById("alertWapp").style.visibility = "visible"; } 
setTimeout("alertW()", 15000); 