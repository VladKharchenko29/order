/// <reference types="cypress" />

import Homepage from "../support/Page Object/Homepage"

const homepage = new Homepage()

describe('Creators search', () => {

    before(() => {
        var data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.trueEmail, data.truePassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    })

    it('Search for a creator', () => {
        homepage.findCreators(data.searchKeyword)
    })

})