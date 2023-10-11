// TESTANDO JS
function logar() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('SUCESSO');
    } else {
        alert('USUARIO OU SENHA INCORRETO')
    }
}

var email = document.getElementById('email');

email.addEventListener('focus',()=> {
    email.style.borderColor = #919191;
})
