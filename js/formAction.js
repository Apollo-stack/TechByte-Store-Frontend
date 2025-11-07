// Função para pegar parâmetros da URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const queryParams = {};
    for (const [key, value] of params.entries()) {
        queryParams[key] = value;
    }
    return queryParams;
}

// Verificamos se o H1 da página de ação existe
if (document.querySelector('h1')?.textContent === 'Dados do Formulário Recebidos') {
    
    // Pega os parâmetros da URL
    const dadosRecebidos = getQueryParams();

    // Seleciona onde deve mostrar as informações
    const spanNome = document.getElementById('resultado-fname');
    const spanSobrenome = document.getElementById('resultado-sname');
    const spanTelefone = document.getElementById('resultado-phone');
    const spanEmail = document.getElementById('resultado-email');
    const spanIdade = document.getElementById('resultado-idade');

    if (spanNome) spanNome.textContent = dadosRecebidos['fname'] || 'Não informado';
    if (spanSobrenome) spanSobrenome.textContent = dadosRecebidos['sname'] || 'Não informado';
    if (spanTelefone) spanTelefone.textContent = dadosRecebidos['phone'] || 'Não informado';
    if (spanEmail) spanEmail.textContent = dadosRecebidos['email'] || 'Não informado';
    if (spanIdade) spanIdade.textContent = dadosRecebidos['idade'] || 'Não informado';
}