/// <reference types="cypress" />

const data = {

}

class Homepage {

    clickCreateAPaidSubscription() {
        cy.wait(500)
        cy.get('[data-testid="lang_picker"]').eq(0).select('EN')
        cy.clickByContain('Create a paid subscription')
    }

    findCreators(i) {
        cy.clickByContain('Find creators')
            .getByPlaceholder("Type name, creator title or url").type(i)
        cy.clickByContain('Search')
        cy.clickByContain('office_transformation')
    }

}

export default Homepage