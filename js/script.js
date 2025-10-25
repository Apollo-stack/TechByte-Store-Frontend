document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Carregado, script pronto para executar.");

    // 1. Seleciona o ELEMENTO do formulário com id="form1"
    const form = document.getElementById('form1');

    // É uma boa prática verificar se o elemento foi encontrado ANTES de usar
    if (form) { 
        // 2. Adiciona o event listener ao formulário para o evento 'submit'
        form.addEventListener('submit', function(event) {
            
            // 3. IMPEDE o envio padrão do formulário AGORA!
            event.preventDefault(); 
            
            console.log("Formulário submetido! Validação começa agora..."); 
            
            // --- A LÓGICA DE VALIDAÇÃO VIRÁ AQUI ---
            // Por enquanto, vamos só impedir o envio.
            
        });
    } else {
        console.error("Erro: Formulário com id='form1' não encontrado!");
    }
});