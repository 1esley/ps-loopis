
// EXIBIR A DATA CORRETAMENTE
let dateLabel = document.getElementById("dateLabel");
if (dateLabel) {
    let hoje = new Date();
    dateLabel.innerHTML = hoje.toLocaleDateString("pt-BR");
}

let checkins = JSON.parse(localStorage.getItem("checkins")) || [];

let prodPorct = document.getElementById("prodPorct");
let compCount = document.getElementById("compCount");
let prodBar = document.getElementById("prodBar");
let compBar = document.getElementById("compBar");
let prodBadge = document.getElementById("prodBadge");
let compBadge = document.getElementById("compBadge");
let prodChart = document.getElementById("prodChart");
let complaintList = document.getElementById("complaintList");

let produtivos = 0;
let reclamacoes = 0;

let baixa = 0;
let media = 0;
let alta = 0;
let maxima = 0;
let foco = 0;
// ITERAÇÃO PARA CONTABILIZAR OS NIVEIS DE PRODUTIVIDADE
for (let i = 0; i < checkins.length; i++) {
    if (checkins[i].produtividade >= 3) {
        produtivos++;
    }

    if (checkins[i].reclamacao != "" || checkins[i].categoria != "") {
        reclamacoes++;
    }

    if (checkins[i].produtividade == 1) baixa++;
    if (checkins[i].produtividade == 2) media++;
    if (checkins[i].produtividade == 3) alta++;
    if (checkins[i].produtividade == 4) maxima++;
    if (checkins[i].produtividade == 5) foco++;
}

let total = checkins.length;
let porcentagemProd = total > 0 ? Math.round((produtivos / total) * 100) : 0;
let porcentagemRec = total > 0 ? Math.round((reclamacoes / total) * 100) : 0;

prodPorct.innerHTML = porcentagemProd + "%";
compCount.innerHTML = reclamacoes;
prodBar.style.width = porcentagemProd + "%";
compBar.style.width = porcentagemRec + "%";
prodBadge.innerHTML = total + " check-in(s)";
compBadge.innerHTML = reclamacoes + " registro(s)";
// INSERÇÃO DAS QUANTIDADES
prodChart.innerHTML = `
    <div class="prod-row">
        <div class="prod-row-top"><span>Baixa </span><span>${baixa}</span></div>
        <div class="mini-bar-wrap"><div class="mini-bar" style="width:${total > 0 ? (baixa / total) * 100 : 0}%"></div></div>
    </div>

    <div class="prod-row">
        <div class="prod-row-top"><span>Média </span><span>${media}</span></div>
        <div class="mini-bar-wrap"><div class="mini-bar" style="width:${total > 0 ? (media / total) * 100 : 0}%"></div></div>
    </div>

    <div class="prod-row">
        <div class="prod-row-top"><span>Alta </span><span>${alta}</span></div>
        <div class="mini-bar-wrap"><div class="mini-bar" style="width:${total > 0 ? (alta / total) * 100 : 0}%"></div></div>
    </div>

    <div class="prod-row">
        <div class="prod-row-top"><span>Máxima </span><span>${maxima}</span></div>
        <div class="mini-bar-wrap"><div class="mini-bar" style="width:${total > 0 ? (maxima / total) * 100 : 0}%"></div></div>
    </div>

    <div class="prod-row">
        <div class="prod-row-top"><span>Foco </span><span>${foco}</span></div>
        <div class="mini-bar-wrap"><div class="mini-bar" style="width:${total > 0 ? (foco / total) * 100 : 0}%"></div></div>
    </div>
`;

if (reclamacoes == 0) {
    complaintList.innerHTML = `<p>Nenhuma reclamação registrada.</p>`;
} else {
    let lista = "";
    // (QUASE) A MESMA COISA PARA RECLAMAÇÕES
    for (let i = 0; i < checkins.length; i++) {
        if (checkins[i].reclamacao != "" || checkins[i].categoria != "") {
            lista += `
                <div class="complaint-item">
                    <div class="complaint-top">
                        <strong>${checkins[i].categoria || "Sem categoria"}</strong>
                        <span>${checkins[i].data}</span>
                    </div>
                    <p>${checkins[i].reclamacao || "Sem descrição."}</p>
                </div>
            `;
        }
    }

    complaintList.innerHTML = lista;
}