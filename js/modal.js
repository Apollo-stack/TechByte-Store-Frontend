document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Carregado, script do MODAL pronto para executar."); //Só vai executar depois de carregar a página

    // Seleciona oque vai no modal
    const modalContainer = document.getElementById('modal-container');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalFechar = document.getElementById('modal-fechar');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');

    // Seleciona todos os botões 'ver mais'
    const botoesVerMais = document.querySelectorAll('.btn-ver-mais');

    // Função para o modal mostrar as informações certas
    function abrirModal(cartaoComputador) {
        
    
        const titulo = cartaoComputador.querySelector('h2').textContent;
        const imgSrc = cartaoComputador.querySelector('img').src;
        const especificacoesDetalhadas = cartaoComputador.dataset.specs;

    
        modalTitulo.textContent = titulo;
        modalDesc.innerHTML = especificacoesDetalhadas; 
        modalImg.src = imgSrc;
        

        modalContainer.style.display = 'block';
        modalOverlay.style.display = 'block';
    }

    // Função para fechar o modal
    function fecharModal() {
        modalContainer.style.display = 'none';
        modalOverlay.style.display = 'none';
    }

    // Adiciona o "ouvinte" de clique em cada botão 'ver mais'
    botoesVerMais.forEach(function(botao) {
        botao.addEventListener('click', function() {
         
        
            const cartao = this.closest('.computador-item');
            
          
            abrirModal(cartao); 
        });
    });

    // Adiciona os "ouvintes" para fechar
    modalFechar.addEventListener('click', fecharModal);
    modalOverlay.addEventListener('click', fecharModal);

}); 