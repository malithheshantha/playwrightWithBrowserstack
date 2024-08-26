

describe('my first test run', function(){
    it('first test case by cypress', function(){
        cy.visit('https://demo.openmrs.org/openmrs/login.htm');
        cy.findByPlaceholderText('Enter your username').should('be.visible');
        cy.findByPlaceholderText('Enter your password').should('be.visible');
        cy.findByPlaceholderText('Enter your username').click();
        cy.findByPlaceholderText('Enter your username').type('Admin');
        cy.findByPlaceholderText('Enter your password').click();
        cy.findByPlaceholderText('Enter your password').type('Admin123');
        cy.get('#togglePassword').click();
        cy.get('#togglePassword').click();
        cy.findByText('Inpatient Ward').should('be.visible');
        cy.findByText('Isolation Ward').should('be.visible');
        cy.findByText('Laboratory').should('be.visible');
        cy.findByText('Isolation Ward').click();

    });

});