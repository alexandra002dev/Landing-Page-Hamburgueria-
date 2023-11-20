
const barra = document.querySelector(".navigation2");

async function listarCardapio() {
        let dados = await fetch("https://api.brchallenges.com/api/empire-burger/menu").then(resposta => resposta.json());
        dados.map((item) => {
                let cardapio = document.querySelector(".right2");
                let detalhescardapio = document.createElement("div");
                detalhescardapio.classList = "detalhecardapio";
                let titulo = document.createElement("div");
                titulo.classList = "titulo";
                let produto = document.createElement("h3");
                produto.innerHTML = item.plate;
                let ponto = document.createElement("div");
                ponto.classList = "pontos";
                ponto.innerHTML = "...........................................";
                let preco = document.createElement("h4");
                preco.innerHTML = `R$: ${item.price.toFixed(2)}`;
                let descricao = document.createElement("div")
                descricao.classList = "descricao";
                let ingrediente = document.createElement("p");
                ingrediente.innerHTML = item.ingredients;

                cardapio.appendChild(detalhescardapio);
                detalhescardapio.appendChild(titulo);
                titulo.appendChild(produto);
                titulo.appendChild(ponto);
                titulo.appendChild(preco);
                detalhescardapio.appendChild(descricao);
                descricao.appendChild(ingrediente);
        });
}

async function listarComentarios() {
        let dados = await fetch("https://api.brchallenges.com/api/empire-burger/testimonials").then(resposta => resposta.json());
        dados.map((item) => {
                let comentario = document.querySelector(".area-banner");
                let cardr = document.createElement("div");
                cardr.classList = "cardr";
                let cardarea = document.createElement("div");
                cardarea.classList = "card-area";
                let depoimento = document.createElement("p");
                depoimento.innerHTML = item.testimonial;
                let sobre = document.createElement("div");
                sobre.classList = "sobre";
                let img = document.createElement("div");
                img.classList = "img";
                img.style.backgroundImage = `url(${item.image})`;
                let nome = document.createElement("div");
                nome.classList = "nome";
                let h2 = document.createElement("h2");
                h2.innerHTML = item.name;
                let idadeeProf = document.createElement("div");
                idadeeProf.classList = "idadeeProf";
                idadeeProf.innerHTML = `${item.age} Anos`;
                comentario.appendChild(cardr);
                cardr.appendChild(cardarea);
                cardarea.appendChild(depoimento);
                cardarea.appendChild(sobre);
                sobre.appendChild(img);
                sobre.appendChild(nome);
                nome.appendChild(h2);
                nome.appendChild(idadeeProf);


        });
}

barra.addEventListener("click", (e) => {
        let barraClicada = e.target;
        let barraSelecionada = barraClicada.getAttribute("for");
        if (barraSelecionada === "cart1") {
                document.getElementById("cart2").classList.remove("selec");
                document.getElementById("cart3").classList.remove("selec");
                e.target.classList.add("selec");
                document.querySelector(".area .cardr").style.marginLeft = '0px';
        } else if (barraSelecionada === "cart2") {
                document.getElementById("cart1").classList.remove("selec");
                document.getElementById("cart3").classList.remove("selec");
                e.target.classList.add("selec");
                document.querySelector(".area .cardr").style.marginLeft = '-1100px';
        } else if (barraSelecionada === "cart3") {
                document.getElementById("cart1").classList.remove("selec");
                document.getElementById("cart2").classList.remove("selec");
                e.target.classList.add("selec");
                document.querySelector(".area .cardr").style.marginLeft = '-3000px';
        }
});

//scroll Suave
function scrollTo(e) {
        document.querySelector(e).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#promocao").addEventListener("click", (e) => {
        e.preventDefault();
        scrollTo(".area");
});

document.querySelector("#cardapio").addEventListener("click", (e) => {
        e.preventDefault();
        scrollTo(".areacardapio");
});

document.querySelector("#comentario").addEventListener("click", (e) => {
        e.preventDefault();
        scrollTo("#comentarios");
});

document.querySelector("#localizacao").addEventListener("click", (e) => {
        e.preventDefault();
        scrollTo(".local");
});

window.onload = function(){
        document.querySelector(".menumobile svg").addEventListener("click", function(){
            if(document.querySelector(".menu nav").style.display == 'flex') {
                document.querySelector(".menu nav").style.display = 'none';
            } else {
                document.querySelector(".menu nav").style.display = 'flex';
            }
        });
    };
listarCardapio();
listarComentarios();