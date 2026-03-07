
function cadastro(){
    //PEGAR TODOS OS USUARIOS CADASTRADOS
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    nome = document.getElementById("usuario_cadastro").value;
    senha = document.getElementById("senha_cadastro").value;

    //ADICIONAR NOVO USUARIO NA LISTA DE USUARIOS
    usuarios.push({
        nome: nome,
        senha: senha
    });

    //MANDAR NOVA LISTA DE USUARIOS PRA LOCALSTORAGE
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function login(){
    //PEGAR TODOS OS USUARIOS CADASTRADOS
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let logado = false;
    for(let i=0; i<usuarios.length; i++){
        if(usuario === usuarios[i].nome && senha === usuarios[i].senha){
            logado = true;
            console.log("DEUCERTO");
            window.location.assign("./index.html");
            return;
        }
    }
    if(!logado){
        console.log("USUARIO OU SENHA INCORRETO");
    }

}