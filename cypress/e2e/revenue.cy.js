/// <reference types="cypress" />

import Revenue from "../support/Page Object/Revenue"

const revenue = new Revenue()

describe('Verify my revenue', () => {

    before(() => {
        var data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.trueEmail1, data.truePassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit(Cypress.env('revenue'))
    })

    it('Search for a creator', () => {
        revenue.verifyRevenue()
    })

})