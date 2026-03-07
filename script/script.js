//VERIFICAR SE EXISTE USUARIO LOGADO, CASO NAO, VOLTAR PARA PAGINA DE LOGIN
// (COMENTEI PARA CONSEGUIR VER A PAGINA [O LOGIN ESTA COM DEFEITO])
// let usuario = localStorage.getItem("usuario_logado");
// if(!usuario){
//     window.location.href = "login.html";
// }

//LOGOUT DE USUARIO
function logout(){
    localStorage.removeItem("usuario_logado");
    window.location.href = "login.html";
}

document.getElementById("user").innerHTML = "Usuario: " + usuario;

function enviarMensagem(){
    let mensagem = document.getElementById("mensagem").value;
    //PEGAR TODOS OS USUARIOS CADASTRADOS
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log(mensagem);
    for(let i=0; i<usuarios.length; i++){
        if(usuario === usuarios[i].nome){
            console.log(usuarios[i].chats);
            usuarios[i].chats.push(mensagem);
        }
    }
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}