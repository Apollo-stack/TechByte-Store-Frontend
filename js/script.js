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

// Função para pegar parâmetros da URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const queryParams = {};
    for (const [key, value] of params.entries()) {
        queryParams[key] = value;
    }
    return queryParams;
}

// Executa APENAS se estivermos na página formAction.html
// Verificamos se o H1 da página de ação existe
if (document.querySelector('h1')?.textContent === 'Dados do Formulário Recebidos') {
    
    // Pega os parâmetros da URL
    const dadosRecebidos = getQueryParams();

    // Encontra os spans onde vamos exibir os dados
    const spanNome = document.getElementById('resultado-fname');
    const spanSobrenome = document.getElementById('resultado-sname');
    const spanTelefone = document.getElementById('resultado-phone');
    const spanEmail = document.getElementById('resultado-email');
    const spanIdade = document.getElementById('resultado-idade');

    // Coloca os dados nos spans (verificando se existem)
    if (spanNome) spanNome.textContent = dadosRecebidos['fname'] || 'Não informado';
    if (spanSobrenome) spanSobrenome.textContent = dadosRecebidos['sname'] || 'Não informado';
    if (spanTelefone) spanTelefone.textContent = dadosRecebidos['phone'] || 'Não informado';
    if (spanEmail) spanEmail.textContent = dadosRecebidos['email'] || 'Não informado';
    if (spanIdade) spanIdade.textContent = dadosRecebidos['idade'] || 'Não informado';
}