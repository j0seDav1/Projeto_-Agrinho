/* ==========================================
   MENU RESPONSIVO
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ==========================================
   DASHBOARD ANIMADO
========================================== */

function contador(id, valorFinal){

    let atual = 0;

    let intervalo = setInterval(() => {

        atual++;

        document.getElementById(id).innerText = atual;

        if(atual >= valorFinal){
            clearInterval(intervalo);
        }

    },20);
}

contador("produtividade",95);
contador("economia",70);
contador("eficiencia",98);

/* ==========================================
   PESQUISA
========================================== */

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const termo =
    searchInput.value.toLowerCase();

    const cards =
    document.querySelectorAll(".searchable");

    cards.forEach(card => {

        const texto =
        card.innerText.toLowerCase();

        if(texto.includes(termo)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

});

/* ==========================================
   SIMULADOR
========================================== */

function simular(){

    let area =
    Number(document.getElementById("area").value);

    if(area <= 0){

        document.getElementById("resultado")
        .innerText =
        "Digite uma área válida.";

        return;
    }

    let producao = area * 8;

    document.getElementById("resultado")
    .innerText =
    `Produção estimada: ${producao} toneladas`;
}

/* ==========================================
   EFEITO DE REVELAÇÃO AO ROLAR
========================================== */

const elementos =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    elementos.forEach(sec => {

        const topo =
        sec.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){

            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";

        }

    });

});

elementos.forEach(sec => {

    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "1s";

});