/// <reference types="cypress" />

import CreatePage from "../support/PageObject/CreatePage";

const create = new CreatePage()

describe('Create other options', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.userTwoEmail, data.mainPassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit(Cypress.env('create_page'))
    })

    it('Verify payments', () => {
        create.verifyPayments()
    })

    it('Create a tier', () => {
        create.createTier(data.title, data.description, data.price, data.searchKeyword)
    })

    it('Create posts', () => {
        create.createPosts(data.title, data.description, data.link, data.description)
    })

    it('Verify greetings', () => {
        create.verifyGreetings(data.description)
    })

    it('Verify socials', () => {
        create.verifySocials(data.url)
    })

    it('Verify privacy', () => {
        create.verifyPrivacy()
    })

    it('Create a goal', () => {
        cy.visit(Cypress.env('goal'))
        create.createGoal(data.title, data.description)
    })

    it('Verify friends', () => {
        create.verifyFriends(data.searchKeyword)
    })

    it('Verify customization', () => {
        create.verifyCustomization()
    })

    it('Verify translations', () => {
        create.verifyTranslations(data.title, data.description)
    })

    it('Verify tier translations', () => {
        create.verifyTierTranslations(data.title, data.description)
    })
})