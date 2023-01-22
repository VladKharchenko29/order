/// <reference types="cypress" />

import Subscription from "../support/Page Object/Subscription";

const subscription = new Subscription()

describe('Make a purchase as authorised user', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.userOneEmail, data.mainPassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit(Cypress.env('creator_link'))
        subscription.selectCreator()
    })

    it('Make a subscription purchase with bank', () => {
        subscription.clickBuyWithBank(1, data.mail)
    })

    it('Make a subscription purchase with crypto', () => {
        subscription.clickBuyWithCrypto()
    })
    
})