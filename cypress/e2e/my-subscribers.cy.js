/// <reference types="cypress" />

import Subscription from "../support/Page Object/Subscription"

const subs = new Subscription()

describe('Verify my subscribers', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.userTwoEmail, data.mainPassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit(Cypress.env('subscribers'))
    })

    it('Search for a creator', () => {
        subs.verifySubscribers()
    })

})