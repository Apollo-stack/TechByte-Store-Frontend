document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Carregado, script de VALIDAÇÃO pronto para executar.");

    // Seleciona o elemento do formulário com id='form1'
    const form = document.getElementById('form1');

    // Verifica se o elemento foi encontrado
    if (form) { 
        
        form.addEventListener('submit', function(event) {
          
            const firstNameInput = document.getElementById('fname');
            const emailInput = document.getElementById('email');
            
            //pega os valores e remove os espaços extras
            const firstNameValue = firstNameInput.value.trim();
            const emailValue = emailInput.value.trim();

            let isValid = true;
            let errorMessage = "";

            //verificar se o nome esta vazio
            if(firstNameValue === ""){
                isValid = false;
                errorMessage = "Por favor, preencha o campo 'Primeiro Nome'.";
            }
            //verificar se o email esta vazio
            else if(emailValue === "") {
                isValid = false;
                errorMessage = "Por favor, preencha o campo 'E-mail'.";
            }

            if (!isValid) {
                //se não for válido, não envia e mostra o erro
                event.preventDefault();
                alert(errorMessage);
            } else {
                //se for válido, envia as informações
                console.log("Formulário válido, enviando...")
            }
            
        });
        
    } else {
        console.error("Formulário com id='form1' não encontrado!");
    }  

}); 