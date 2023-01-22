/// <reference types="cypress" />

import Revenue from "../support/Page Object/Revenue"

const revenue = new Revenue()

describe('Verify my revenue', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.userTwoEmail, data.mainPassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit(Cypress.env('revenue'))
    })

    it('Search for a creator', () => {
        revenue.verifyRevenue()
    })

})