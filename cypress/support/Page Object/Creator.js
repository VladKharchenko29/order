/// <reference types="cypress" />


class Creator {

    verifyPublicData() {
        cy.visibleByContain('John Doe')
        cy.visibleByContain('5 uah')
        cy.visibleByContain('5 UAH every month')
        cy.visibleByContain('10 UAH every month')
        cy.visibleByContain('123 UAH every month')
        cy.visibleByContain('5 uah')
        cy.visibleByContain('About the author')
        cy.contains('Follow').should('be.visible').and('not.be.disabled')
        cy.clickByContain('Share')
        cy.c
    }

    verifyPrivateData() {
        cy.visibleByContain('John Doe')
        cy.visibleByContain('Pricing plan: Basic')
        cy.visibleByContain('5 uah')
        cy.clickByContain('+')
        cy.get(`[aria-label="New post"]`).should('be.visible').and('not.be.disabled')
        cy.get(`[aria-label="New tier"]`).should('be.visible').and('not.be.disabled')
        cy.get(`[aria-label="Cancel"]`).should('be.visible').and('not.be.disabled')
    }

    verifyWithdraw() {
        // TODO
        cy.get('currency').select('btc')
        cy.clickByContain('Wallet address').type('address')
        cy.clickByContain('Some crypto requires memo to transfer coins').type('memo')
    }

    verifyWithdrawRevenue() {
        cy.clickByContain('Withdraw uah')
        
    }

}

export default Creator