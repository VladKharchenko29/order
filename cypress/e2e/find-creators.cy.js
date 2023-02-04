/// <reference types="cypress" />

import Homepage from "../support/PageObject/Homepage"

const homepage = new Homepage()

describe('Creators search', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.userOneEmail, data.mainPassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    })

    it('Search for a creator', () => {
        homepage.findCreators(data.searchKeyword, data.findCreatorName)
    })

})