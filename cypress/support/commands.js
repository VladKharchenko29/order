// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('doLogin', (mail, pass) => {
    cy.visit('https://sponsor.financial/login')
    cy.wait(500)
    cy.get('[data-testid="lang_picker"]').eq(0).select('EN')
    cy.get('input[placeholder="Email"]').type(mail)
    cy.get('input[placeholder="Password"]').type(pass).tab().tab().tab().click()

})

Cypress.Commands.add('logout', () => {
    cy.visit('https://sponsor.financial/login')
    cy.contains('menu').click()
    cy.contains('Log out').click()
    cy.wait(500)
})

Cypress.Commands.add('userCredentials', (i) => {
    cy.fixture(i).then((data) => {
        globalThis.data = data;
    })
})

Cypress.Commands.add('loadTestData', (i) => {
    cy.fixture(i).then((data) => {
        globalThis.data = data;
    })
})

Cypress.Commands.add('getByPlaceholder', (i) => {
    cy.get('input[placeholder="' + i + '"]')
})

Cypress.Commands.add('selectPositionFromMenu', (i, name) => {
    cy.contains(name).click()
    switch (i) {
        case 1: cy.contains('Edit page').click()
            break;
    }

    cy.wait(500)
})

Cypress.Commands.add('access', () => {
    cy.tab().tab().tab().click()
})

Cypress.Commands.add('selectFirstPosition', () => {
    cy.focused().tab().click()
})

Cypress.Commands.add('fillForm', () => {
    cy.tab().click()
        .tab().click()
})

Cypress.Commands.add('clickByContain', (i) => {
    cy.wait(500)
    cy.contains(i).should('be.visible').click({ force: true })
})

Cypress.Commands.add('visibleByContain', (i) => {
    cy.wait(500)
    cy.contains(i).should('be.visible')
})

Cypress.Commands.add('getByTestId', (i) => {
    cy.wait(500)
    cy.get('[data-testid=' + i + '')
})

Cypress.Commands.add('getByType', (i) => {
    cy.wait(500)
    cy.get('[type=' + i + '')
})

Cypress.Commands.add('getByDataPlaceholder', (i) => {
    cy.wait(500)
    cy.get('data-placeholder="' + i + '"]')
})