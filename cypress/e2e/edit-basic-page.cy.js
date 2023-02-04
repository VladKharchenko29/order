/// <reference types="cypress" />

import CreatePage from "../support/PageObject/CreatePage";

const create = new CreatePage()

describe('Edit a page', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.userOneEmail, data.mainPassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.wait(500)
        cy.visit(Cypress.env('create_page'))
    })

    it('Edit a basic page', () => {
        cy.selectPositionFromMenu(1, data.username1)
        create.fillTheForm(data.title, data.subtitle, data.description, data.link)
    })

    it('Create payments', () => {
        // cy.selectPositionFromMenu(2, data.username2)
        create.fillTheForm(data.title, data.subtitle, data.description, data.link)
    })

})