function submissaoFormulario(){
    let meuFormulario = document.forms.meuFormulario;
    // Verificar se o nome está vazio
    if(meuFormulario.nome.value == ''){
        alert('Por favor, preencha seu nome!')
        return false;
    }

    // Verificar se a idade está vazia
    if(meuFormulario.idade.value == ''){
        alert('Por favor, preencha sua idade!')
        return false;
    }

    // Verificar se o sexo está vazio
    if(meuFormulario.sexo.value == ''){
        alert('Por favor, preencha seu sexo!')
        return false;
    }

    // Verificar se o email está vazio
    if(meuFormulario.email.value == ''){
        alert('Por favor, preencha seu email!')
        return false;
    }

    // Verificar se a senha está vazio
    if(meuFormulario.senha.value == ''){
        alert('Por favor, preencha sua senha!')
        return false;
    }   
   
};
