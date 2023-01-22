/// <reference types="cypress" />

import Collaborations from "../support/Page Object/Collaborations"

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
        cy.doLogin(data.trueEmail1, data.truePassword)
        cy.visit(Cypress.env('tier_creation'))
        collab.createCollaboration(data.title, data.description, data.number, data.collab)
    })

    it('Accept collaboration tier by user b', () => {
        cy.doLogin(data.trueEmail, data.truePassword)
        collab.createCollaboration(data.title, data.description, data.number, data.collab)
    })

})