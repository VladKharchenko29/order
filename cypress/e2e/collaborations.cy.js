/// <reference types="cypress" />

import Collaborations from "../support/PageObject/Collaborations"

const collab = new Collaborations()

describe('Collaborations', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    })

    it('Create collaboration tier by user A', () => {
        cy.doLogin(data.userTwoEmail, data.mainPassword)
        cy.visit(Cypress.env('tier_creation'))
        collab.createCollaboration(data.title, data.description, data.price, data.collab)
    })

    it('Accept collaboration tier by user b', () => {
        cy.doLogin(data.userOneEmail, data.mainPassword)
        collab.createCollaboration(data.title, data.description, data.price, data.collab)
    })

})