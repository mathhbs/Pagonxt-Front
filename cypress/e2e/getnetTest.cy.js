import HomePage from '../support/HomePage';
import AjudaPage from '../support/AjudaPage';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

describe('Automação - Getnet', () => {
    const homePage = new HomePage();
    const ajudaPage = new AjudaPage();

    it('Deve acessar a Central de Ajuda e verificar o conteúdo modal sobre boleto', () => {
        // Passo 1: Acessar o site
        homePage.visit();

        // Passo 2: clicar no sanduíche
        homePage.clickSanduiche();
        
        // Passo 3: Clicar no botão "Sou Cliente"
        homePage.clickSouCliente();
        
        // Passo 4: selecionar "Central de Ajuda"
        ajudaPage.clickAjuda();
                
        // Passo 5: Digitar a palavra-chave “Boleto”
        ajudaPage.searchKeyword('Boleto');
        
        // Passo 6: Selecionar a opção de boleto
        ajudaPage.selectBoletoOption();
        
        // Passo 7: Verificar se a modal foi aberta com o texto correto
        ajudaPage.verifyModalContent();
    });
});
