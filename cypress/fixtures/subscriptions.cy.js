/// <reference types="cypress" />

import Subscription from "../support/Page Object/Subscription";

const subscription = new Subscription()

describe('Verify subscriptions', () => {

    before(() => {
        var data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.trueEmail1, data.truePassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit(Cypress.env('subscriptions'))
    })

    // it('Verify active subscriptions', () => {
    //     subscription.verifySubscriptions(0)
    // })

    it('Verify deleted subscriptions', () => {
        subscription.verifySubscriptions(1)
    })

    it('Verify attempt to purchase a subscription', () => {
        cy.visit(Cypress.env('search'))
        subscription.searchCreatorAndClickBuySuscbription()
        subscription.clickBuyWithBank(1)
        cy.logout()
        cy.doLogin(data.trueEmail, data.truePassword)
        cy.visit(Cypress.env('creator_private'))
        subscription.verifySubscribers()
        subscription.verifyRevenue()
    })

    it('Verify adding translations', () => {
        cy.visit(Cypress.env('tier_list'))
        subscription.verifyTranslations(data.title, data.description)
    })

    it.only('Verify unsubscribing', () => {
        cy.visit(Cypress.env('unsubscribe'))
        subscription.verifyUnsubscribing()
    })

    it('Verify if user can bought with disabled crypto purchase', () => {
        cy.visit(Cypress.env('crypto_disabled'))
        subscription.verifyCryptoDisabledPurchase()
    })
    
})