/// <reference types="cypress" />

class UserProfile {

    verifyProfile() {
        cy.getByType('text').each($el => {
            cy.wrap($el).should('contain.value', 'test')
        })
        cy.clickByContain('Save settings')
    }

    verifySubscriptions() {
        cy.clickByContain('Subscriptions')
        cy.clickByContain('Deleted subscriptions')
        cy.clickByContain('Active')
    }

    verifySecurity() {
        cy.clickByContain('Security')
        cy.get("[type='checkbox']").dblclick()
    }

    verifyLanguage() {
        cy.clickByContain('Language')
    }

    verifyFaq() {
        cy.clickByContain('FAQ')
        cy.visibleByContain('Terms of Use')
    }
    
    verifyAccountDeletion() {
        cy.clickByContain('Account deletion')
        cy.visibleByContain('Delete account')
    }

}

export default UserProfile