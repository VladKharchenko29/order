/// <reference types="cypress" />

const data = {

}

class Homepage {

    clickCreateAPaidSubscription() {
        cy.wait(500)
        cy.get('[data-testid="lang_picker"]').eq(0).select('EN')
        cy.clickByContain('Create a paid subscription')
    }

    findCreators(i, c) {
        cy.clickByContain('Find creators')
        cy.wait(500)
        cy.getByPlaceholder("Type name, creator title or url").type(i)
        cy.clickByContain('Search')
        cy.clickByContain(c)
    }

}

export default Homepage