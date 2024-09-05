class HomePage {
    visit() {
        cy.visit('https://site.getnet.com.br/');
    }

    clickSanduiche(){
        cy.get('#gnt-burger').click();
    }

    clickSouCliente() {
        cy.contains('Sou cliente').click(); 
    }
}

export default HomePage;
