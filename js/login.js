//função de singup
let nomeUsuario = getElementById('nameSU').value
let emailUsuario = getElementById('emailSU').value
let senhaUsuario = getElementById('passwordSU').value

function singup() {
        location.href = "login.html"
}

//função de login
function login() {
    let login = document.getElementById('emailf')
    let senha = document.getElementById('passwordf')

        if(login.value == 'adm@gmail.com' && senha.value == 'senha123') {
                location.href = "../index.html"
        }
        else {
                alert('Email ou senha incorretos, tente novamente!')
        }
}

