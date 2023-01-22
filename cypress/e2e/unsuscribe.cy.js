/// <reference types="cypress" />

import Subscription from "../support/Page Object/Subscription";

const subscription = new Subscription()

describe('Verify unsubscribing', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.subscriberEmail, data.mainPassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit(Cypress.env('unsubscribe'))
    })

    it.only('Verify unsubscribing', () => {
        subscription.verifyUnsubscribing()
    })
    
})