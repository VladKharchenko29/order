/// <reference types="cypress" />

import Creator from "../support/Page Object/Creator"

const creator = new Creator()

describe('Creators page', () => {

    before(() => {
        var data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.trueEmail, data.truePassword)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
        cy.visit(Cypress.env('creator_public'))
    })

    it('Verify public creator page', () => {
        creator.verifyPublicData()
    })

    it('Verify private creator page', () => {
        cy.visit(Cypress.env('creator_private'))
        creator.verifyPrivateData()
    })

    // it.only('Verify withdraw through Payments', () => { \\ needs more locators
    //     cy.visit(Cypress.env('withdraw'))
    //     creator.verifyWithdraw()
    // })
  
    it('Verify withdraw through Revenue', () => {
        cy.visit(Cypress.env('revenue'))
        creator.verifyWithdrawRevenue()
    })

})