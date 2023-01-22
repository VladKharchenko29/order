/// <reference types="cypress" />

import Subscription from "../support/Page Object/Subscription";

const subscription = new Subscription()

describe('Make a purchase as unathorised user', () => {

    beforeEach(() => {
        var data = cy.userCredentials('credentials')
        cy.visit(Cypress.env('purchase_link'))
    })

    it('Make a subscription purchase with bank', () => {
        subscription.clickBuyWithBank(0)
    })

    // it('Make a subscription purchase with crypto', () => {
    //     subscription.clickBuyWithCrypto()
    // })


    
})