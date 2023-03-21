let range = document.querySelector('#slider')
let botao = document.querySelector('.btn')
let valor = document.querySelector('#valor')
let senha = document.querySelector('#password')
let containerSenha = document.querySelector('#container-password')
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@'


valor.innerHTML = range.value

range.oninput = function(){
  valor.innerHTML = this.value
}

function gerarSenha(){
  let passw = ''
  for (let i = 0, n = charset.length; i < range.value; ++i){
    passw += charset.charAt(Math.floor(Math.random() * n))
    
  }

  containerSenha.classList.remove('hide')
  senha.innerHTML = passw
  newPass = passw
}

let newPass = ''

function copiarSenha(){
  navigator.clipboard.writeText(newPass) 
}