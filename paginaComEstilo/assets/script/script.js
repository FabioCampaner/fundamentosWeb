let nome = document.getElementById("nome")
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')
let emailOk, nomeOk, assuntoOk = false
let mapa = document.getElementById('mapa')

nome.style.width = '100%';
assunto.style.width = '100%';
email.style.width = '100%';

function validaNome(){
    let txtNome = document.getElementById('txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.display = 'block'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.style.display = 'none'
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.getElementById('txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.display = 'block'
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.style.display = 'none'
        emailOk = true
    }
}
function validaAssunto(){
    let txtAssunto = document.getElementById('txtAssunto')
    if(assunto.value.length > 100){
        txtAssunto.innerHTML = "Assunto Inválido"
        txtAssunto.style.display = 'block'
        txtAssunto.style.color = 'red'
        assuntoOk = false
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(assuntoOk && emailOk && nomeOk){
        alert('Enviado com sucesso!')
    }
    else{
        alert('Faltam dados para enviar.')
    }
    
}

function mapZoom(){
    mapa.style.height = "400px"
    mapa.style.width = "600px"
}
function mapNormal(){
    mapa.style.height = "200px"
    mapa.style.width = "300px"
}