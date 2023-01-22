/// <reference types="cypress" />

import UserProfile from "../support/Page Object/UserProfile"

const profile = new UserProfile()

describe('Profile', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.trueEmail1, data.truePassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit(Cypress.env('profile'))
    })

    it('Verify user details', () => {
        cy.visit(Cypress.env('profile_settings'))
        profile.verifyProfile()
    })

    it('Verify Subscriptions', () => {
        profile.verifySubscriptions()
    })

    it('Verify Security', () => {
        profile.verifySecurity()
    })

    it.only('Verify Language', () => {
        profile.verifyLanguage()
    })

    it.only('Verify Faq', () => {
        profile.verifyFaq()
    })

    it.only('Verify AccountDeletion', () => {
        profile.verifyAccountDeletion()
    })

})