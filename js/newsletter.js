function changeText() {
    //Futuramente pretendo enviar essa Array para um banco de dados onde serão armazenados os nomes dos participantes
    let inputNewsletter = document.querySelector('#newsletterInput').value
    let msgNewsletter = document.querySelector('#msgNewsletter')
    let btn = document.querySelector('#CTB')

    bdEmail = ['enzofreitasmatias@gmail.com', 'enzo.matias@germinare.org.br']

    if (bdEmail.includes(inputNewsletter) == false) {
        bdEmail.push(inputNewsletter)
        msgNewsletter.innerHTML = 'Seu email foi cadastrado'
        msgNewsletter.style.color = '#008000'
        btn.value = 'Inscrito'
        console.log(bdEmail)
    } else  if (btn.value == 'Inscrito'){
        console.log('Já foi cadastrado o e-mail')
        msgNewsletter.innerHTML = ''
    } else if (bdEmail.includes(inputNewsletter) == true) {
        msgNewsletter.innerHTML = 'Esse e-mail já está sendo usado, use outro email'
        msgNewsletter.style.color = '#FF0000'
    }
}