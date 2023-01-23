/// <reference types="cypress" />

import Creator from "../support/PageObject/Creator"

const creator = new Creator()

describe('Creators page', () => {

    before(() => {
        const data = cy.userCredentials('credentials')
    })

    beforeEach(() => {
        cy.doLogin(data.userOneEmail, data.mainPassword)
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