/// <reference types="cypress" />

import CreatePage from "../support/Page Object/CreatePage";

const create = new CreatePage()

describe('Create a page', () => {

    before(() => {
        var data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.trueEmail, data.truePassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit(Cypress.env('create_page'))
    })

    it('Create a basic page', () => {
        // cy.selectPositionFromMenu(1, data.username1)
        create.fillTheForm(data.title, data.subtitle, data.description, data.link)
    })

    it('Create payments', () => {
        // cy.selectPositionFromMenu(2, data.username2)
        create.fillTheForm(data.title, data.subtitle, data.description, data.link)
    })

})