describe('Home - IoT Dashboard', () => {

    it('@Medium - Verify to toggle Light is ON/OFF', () => {
        cy.visit('http://localhost:4200/')
        cy.get(':nth-child(1) > ngx-status-card > nb-card > .details > .status').should('have.text', 'ON')
        cy.get('ngx-status-card > nb-card > .details > .title').first().click();
        cy.get('ngx-status-card > nb-card > .details > .status').first().should('have.text', 'OFF')
    })
})