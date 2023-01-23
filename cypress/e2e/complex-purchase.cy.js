/// <reference types="cypress" />

import Subscription from "../support/PageObject/Subscription";

const subscription = new Subscription()

describe('Verify subscriptions', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.userTwoEmail, data.mainPassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    })

    // it('Verify active subscriptions', () => {
    //     subscription.verifySubscriptions(0)
    // })

    it('Verify subscribers change after purchase', () => {
        cy.visit(Cypress.env('search'))
        subscription.searchCreatorAndClickBuySuscbription()
        subscription.selectCreator()
        subscription.clickBuyWithBank(1, data.mail)
        cy.logout()
        cy.doLogin(data.userOneEmail, data.mainPassword)
        cy.visit(Cypress.env('creator_private'))
        subscription.verifySubscribers()
        subscription.verifyRevenue()
    })

    
})