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

/*Botao do Whatsapp ==================================================================
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
*/
// Filtro de pesquisa ==================================================================

  function gerarListaDeBairros() {
    const cards = document.querySelectorAll('.card');
    const select = document.getElementById('bairroSelect');
    if (!select) {
      console.error('Elemento select com id "filtroBairro" não encontrado.');
      return;
    }

    // Usar Set para bairros únicos
    const bairros = new Set();

    cards.forEach(card => {
      bairros.add(card.getAttribute('data-bairro'));
    });

    // Limpar opções anteriores (se houver)
    select.innerHTML = '';

    // Adicionar opção 'Todos os bairros'
    const optionTodos = document.createElement('option');
    optionTodos.value = 'todos';
    optionTodos.textContent = 'Todos os bairros';
    select.appendChild(optionTodos);

    // Ordenar bairros e adicionar ao select
    Array.from(bairros).sort().forEach(bairro => {
      const option = document.createElement('option');
      option.value = bairro;
      option.textContent = bairro;
      select.appendChild(option);
    });
  }

  function filtrarPorBairro() {
  const select = document.getElementById('bairroSelect'); // corrigido aqui
  const cards = document.querySelectorAll('.card');

  if (!select) {
    console.error('Elemento select com id "bairroSelect" não encontrado.');
    return;
  }

  select.addEventListener('change', () => {
    const bairroSelecionado = select.value;

    cards.forEach(card => {
      const bairroCard = card.getAttribute('data-bairro');
      if (bairroSelecionado === 'todos' || bairroSelecionado === bairroCard) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

  window.onload = function() {
    gerarListaDeBairros();
    filtrarPorBairro();
  }
  