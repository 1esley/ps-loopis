//VERIFICAR SE EXISTE USUARIO LOGADO, CASO NAO, VOLTAR PARA PAGINA DE LOGIN
let usuario = localStorage.getItem("usuario_logado");
if (!usuario) {
    window.location.href = "./login.html";
}

function logout() {
    localStorage.removeItem("usuario_logado");
    window.location.href = "./login.html";
}
// EXIBIR DATA CORRETA
let dateLabel = document.getElementById("dateLabel");
if (dateLabel) {
    let hoje = new Date();
    dateLabel.innerHTML = hoje.toLocaleDateString("pt-BR");
}

let botoes = document.querySelectorAll(".termo-btn");
let barra = document.getElementById("termoBar");
let botaoEnviar = document.getElementById("submitBtn");

let produtividade = "";
let categoria = "";
// LAÇO PARA IDENTIFICAR O VALOR PARA A BARRA DE PRODUTIVIDADE
for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("selected");
        }

        this.classList.add("selected");
        produtividade = this.dataset.val;

        barra.style.width = (produtividade * 20) + "%";
        botaoEnviar.disabled = false;
    });
}

let categorias = document.querySelectorAll(".check");
// LAÇO PARA DEFINIR A CATEGORIA/SETOR DO FUNCIONARIO
for (let i = 0; i < categorias.length; i++) {
    categorias[i].addEventListener("click", function () {
        for (let j = 0; j < categorias.length; j++) {
            categorias[j].classList.remove("selected");
        }

        this.classList.add("selected");
        categoria = this.dataset.cat;
        console.log(categoria);
    });
}
// AQUI EU FIZ TUDO NO CLIQUE DO BOTÃO, PRA SER MAIS EFICIENTE NA HORA DE TESTAR. MAS TAMBÉM FUNCIONA NORMALMENTE
if (botaoEnviar) {
    botaoEnviar.addEventListener("click", function () {
        let reclamacao = document.getElementById("complaintText").value;

        let checkins = JSON.parse(localStorage.getItem("checkins")) || [];

        checkins.push({
            usuario: usuario,
            produtividade: produtividade,
            categoria: categoria,
            reclamacao: reclamacao,
            data: new Date().toLocaleDateString("pt-BR")
        });

        localStorage.setItem("checkins", JSON.stringify(checkins));
        // FAZ SUMIR OS CARDS
        document.getElementById("termoCard").style.display = "none";
        document.getElementById("complaintCard").style.display = "none";
        document.getElementById("successCard").style.display = "flex";
    });
}