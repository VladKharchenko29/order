/// <reference types="cypress" />

class Collaborations {

    createCollaboration(title, desc, cost, colabs) {
        cy.getByPlaceholder("Add a title").type(title)
        cy.getByDataPlaceholder('Write the description').type(desc)
        cy.getByPlaceholder("How much do you think it costs?").clear().type(cost)
        cy.getByPlaceholder("Find partners for collaboration").type(colabs)
        cy.clickByContain('John Doe')
        cy.wait(500)
        cy.clickByContain('Add tier')
    }

    acceptCollaboration() {
        
    }

}

export default Collaborations