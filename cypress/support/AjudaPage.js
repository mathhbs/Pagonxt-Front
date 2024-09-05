class AjudaPage {
    clickAjuda() {
        cy.get('#menu-ajuda-sou-cliente-central-ajuda').click(); 
    }

    searchKeyword(keyword) {
        cy.get('#faq-search-input').type(`${keyword}{enter}`); 
    }

    selectBoletoOption() {
        cy.contains('Eu concluí a negociação, de que forma receberei meu boleto?').click();
    }

    verifyModalContent() {
        cy.get('.o-modal__title').should('contain.text', 'Eu concluí a negociação, de que forma receberei meu boleto?');
    }
}

export default AjudaPage;
