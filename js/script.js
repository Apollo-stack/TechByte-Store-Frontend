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

    // --- LÓGICA DO MODAL DINÂMICO ---

    // 1. Seleciona os elementos do "esqueleto" do modal
    const modalContainer = document.getElementById('modal-container');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalFechar = document.getElementById('modal-fechar');
    
    // ... e os elementos DENTRO do modal que vamos preencher
    const modalTitulo = document.getElementById('modal-titulo');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');

    // 2. Seleciona TODOS os botões "Ver Mais..."
    // (Confirme que você tem a classe 'btn-ver-mais' em todos os seus botões no HTML)
    const botoesVerMais = document.querySelectorAll('.btn-ver-mais');

    // 3. Função para ABRIR o modal com o conteúdo certo
    function abrirModal(cartaoComputador) {
        
        // 4. Extrai os dados do cartão do computador que foi clicado
        // O .querySelector() procura DENTRO do 'cartaoComputador'
        const titulo = cartaoComputador.querySelector('h2').textContent;
        const imgSrc = cartaoComputador.querySelector('img').src;

        // Pega as especificações direto do atributo 'data-specs' do HTML!
        const especificacoesDetalhadas = cartaoComputador.dataset.specs;

        // 5. Preenche o "esqueleto" do modal com os dados extraídos
        modalTitulo.textContent = titulo;
        modalDesc.innerHTML = especificacoesDetalhadas; // Injeta as specs completas
        modalImg.src = imgSrc;
        
        // 6. Mostra o modal (agora preenchido)
        modalContainer.style.display = 'block';
        modalOverlay.style.display = 'block';
    }

    // 7. Função para FECHAR o modal (continua a mesma)
    function fecharModal() {
        modalContainer.style.display = 'none';
        modalOverlay.style.display = 'none';
    }

    // 8. Adiciona o "ouvinte" de clique em CADA botão "Ver Mais..."
    botoesVerMais.forEach(function(botao) {
        botao.addEventListener('click', function() {
            // 'this' é o botão que foi clicado
            // '.closest()' sobe na "árvore" HTML e encontra o "cartão" (div) 
            // pai mais próximo que tem a classe '.computador-item'
            const cartao = this.closest('.computador-item');
            
            // Abre o modal passando o cartão inteiro que encontramos
            abrirModal(cartao); 
        });
    });

    // 9. Adiciona os "ouvintes" para fechar (continua o mesmo)
    modalFechar.addEventListener('click', fecharModal);
    modalOverlay.addEventListener('click', fecharModal);

}); // Fecha o DOMContentLoaded

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