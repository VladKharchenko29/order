/// <reference types="cypress" />

class Revenue {

    verifyRevenue() {
        cy.visibleByContain('Your balance')
        cy.visibleByContain('Your Payouts')
        cy.visibleByContain('Currency')
        cy.visibleByContain('Available')
    }

}

export default Revenue