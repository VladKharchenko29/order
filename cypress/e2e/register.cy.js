/// <reference types="cypress" />

import Homepage from "../support/PageObject/Homepage"
import SignUp from "../support/PageObject/SignUp"
import LogIn from "../support/PageObject/LogIn"

const homePage = new Homepage()
const signUp = new SignUp()
const logIn = new LogIn()

describe('Register and login', () => {

  before(() => {
    const data = cy.userCredentials('credentials')
})

  beforeEach(() => {
    cy.visit(Cypress.env('main_page'))
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    })
  })

  it('Enter as a guest and make a purchase', () => {
    homePage.clickCreateAPaidSubscription()
    cy.wait(2000)
    signUp.fillTheForm(data.name, data.lastname, data.mail, data.testPassword)
    logIn.doLogin(data.testPassword)
  })
})