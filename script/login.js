
function cadastro(){
    //PEGAR TODOS OS USUARIOS CADASTRADOS
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    nome = document.getElementById("usuario_cadastro").value;
    senha = document.getElementById("senha_cadastro").value;

    if (!nome && !senha){
        return;
    }
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

    for(let i=0; i<usuarios.length; i++){
        if(usuario === usuarios[i].nome && senha === usuarios[i].senha){
            localStorage.setItem("usuario_logado", usuario);
            window.location.assign("./index.html");
            return;
        }
    }
    //SE O USUARIO OU SENHA ESTIVEREM INCORRETOS
    console.log("USUARIO OU SENHA INCORRETO");
    

}