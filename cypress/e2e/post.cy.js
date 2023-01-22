/// <reference types="cypress" />

import CreatePage from "../support/Page Object/CreatePage"

const page = new CreatePage()

describe('Post', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.trueEmail1, data.truePassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit(Cypress.env('post'))
    })

    it('Verify public post as authorized user', () => {
        page.verifyCreatedPost()
    })

    it.only('Verify adding comment to a post', () => {
        page.addCommentToPost(data.description)
    })

})