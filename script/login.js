
function cadastro(){
    //PEGAR TODOS OS USUARIOS CADASTRADOS
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const matriculaRegEx = /^\d+$/;
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    matricula = document.getElementById("matricula_cadastro").value;
    nome = document.getElementById("usuario_cadastro").value;
    senha = document.getElementById("senha_cadastro").value;

    message = document.getElementById("message");
    for(let i=0; i<usuarios.length; i++){
        if(matricula === usuarios[i].matricula){
            message.innerText = "Usuário ja cadastrado!";
            return;
        }
    }
    if (!matricula || !nome || !senha){
        return;
    }

    if(!matriculaRegEx.test(matricula)){
        message.innerText = "A matricula deve conter apenas números!";
        return;
    }

    //TODO: ARRUMAR DEPOIS
    console.log(!passwordRegEx.test(senha));
    if(!passwordRegEx.test(senha)){
        message.innerText = "A senha deve conter 8 caracteres entre letras e números!";
        return;
    }


    //ADICIONAR NOVO USUARIO NA LISTA DE USUARIOS
    usuarios.push({
        matricula: matricula,
        nome: nome,
        senha: senha
    });

    //MANDAR NOVA LISTA DE USUARIOS PRA LOCALSTORAGE
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    window.location.assign("./login.html");

}

function login(){
    //PEGAR TODOS OS USUARIOS CADASTRADOS
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let matricula = document.getElementById("matricula").value;
    let senha = document.getElementById("senha").value;
    for(let i=0; i<usuarios.length; i++){
        if(matricula === usuarios[i].matricula && senha === usuarios[i].senha){
            localStorage.setItem("usuario_logado", JSON.stringify(usuarios[i]));
            // console.log(JSON.parse(localStorage.getItem("usuario_logado")).nome);
            window.location.assign("./checkin.html");
            return;
        }
    }
    //SE O USUARIO OU SENHA ESTIVEREM INCORRETOS
    message = document.getElementById("message");
    message.innerText = "Usuário ou senha incorretos!";
}

