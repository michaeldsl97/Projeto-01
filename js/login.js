let botaoEnviar = document.querySelector('#enviar');

botaoEnviar.addEventListener('click', function(){
    let inputValor = document.querySelector('#meuInput').value;
    if(inputValor == ''){
        alert('Todos os campos são obrigatórios!')
    }else{
        alert('LOGIN REALIZADO COM SUCESSO!')
    }

    document.querySelector('#meuInput').value = '';
    
});
