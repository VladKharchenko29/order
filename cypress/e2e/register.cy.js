/// <reference types="cypress" />

import Homepage from "../support/Page Object/Homepage"
import SignUp from "../support/Page Object/SignUp"
import LogIn from "../support/Page Object/LogIn"

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
    signUp.fillTheForm(data.name, data.lastname, data.mail, data.testPwd)
    logIn.doLogin(data.testPwd)
  })
})