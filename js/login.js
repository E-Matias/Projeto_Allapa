emailBD = ['enzo.matias@germinare.org.br', 'bernardo.garces@germinare.org.br', 'ana.ornelas@germinare.org.br', 'lucas.baciega@germinare.org.br']
passwordBD = ['enzo0110', '!pinguim', 'Organe!as', '18-10-2004']

let msgErro = document.querySelector('#msgErro')

//O singup será ilustrativo
function singup() {
        location.href = "login.html"
}

function login() {
    let login = document.getElementById('emailf').value
    let senha = document.getElementById('passwordf').value
    if (emailBD.includes(login) == true && passwordBD.includes(senha) == true) {
        location.href = "../../index.html"
        console.log('O usuario foi encaminhado para outra página')
    } else {
        msgErro.style.display = 'block'
        console.log('O email ou a senha estão incorretos')
}}