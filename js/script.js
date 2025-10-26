document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Carregado, script pronto para executar.");

    // 1. Seleciona o ELEMENTO do formulário com id="form1"
    const form = document.getElementById('form1');

    // É uma boa prática verificar se o elemento foi encontrado ANTES de usar
    if (form) { 
        // 2. Adiciona o event listener ao formulário para o evento 'submit'
        form.addEventListener('submit', function(event) {
            //seleciona a variavel dentro da funcao
            const firstNameInput = document.getElementById('fname');
            const emailInput = document.getElementById('email');
            
            //pegar os valores e remover os espaços extras
            const firstNameValue = firstNameInput.value.trim();
            const emailValue = emailInput.value.trim();

            let isValid = true;
            let errorMessage = "";

            //verificar se o nome esta vazio
            if(firstNameValue === ""){
                isValid = false;
                errorMessage = "Por favor, preencha o campo 'Primeiro Nome'.";
            }

            else if(emailValue === "") {
                isValid = false;
                errorMessage = "Por favor, preencha o campo 'E-mail'.";
            }

            if (!isValid) {
                //se não for válido, impede o envio e mostra o erro
                event.preventDefault();
                alert(errorMessage);
            } else {
                //se for válido, deixa o envio acontecer
                console.log("Formulário válido, enviando...")
            }
            
        });
        
    } else {
        console.error("Erro: Formulário com id='form1' não encontrado!");
    }
});