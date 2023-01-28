/// <reference types="cypress" />

class CreatePage {

    fillTheForm(title, subtitle, description, link) {
        cy.getByPlaceholder("Required - Short title").type(title)
            .getByPlaceholder("Start with create, share, promote ...").type(subtitle)
            .get('[data-gramm]').type(description)
            .getByPlaceholder("User can search you by this shortname").type(link)
        // cy.contains('Choose photo').attachFile('image.jpg', { subjectType: 'input' })
        cy.clickByContain('Save settings')
    }

    verifyPayments() {
        cy.clickByContain('Payments')
        cy.getByTestId("checkbox-disable-crypto-payment").click()
        cy.visibleByContain('Bank card')
        cy.visibleByContain('Crypto wallet')
    }

    createTier(title, desc, cost, colabs) {
        cy.clickByContain('Tiers')
        cy.getByTestId("add-button").click()
        cy.getByPlaceholder("Add a title").type(title)
        cy.getByDataPlaceholder('Write the description').type(desc)
        cy.getByPlaceholder("How much do you think it costs?").clear().type(cost)
        cy.getByPlaceholder("Find partners for collaboration").type(colabs)
        cy.clickByContain('Search')
        cy.wait(500)
        cy.selectFirstPosition()
        cy.clickByContain('Add tier')
    }

    createPosts(title, desc, video, teaser) {
        cy.clickByContain('Posts')
        cy.clickByContain('New post')
        cy.getByPlaceholder("place for post title ...").type(title)
        cy.getByDataPlaceholder('Tell your followers something ').type(desc)
        cy.getByPlaceholder("Here is a place to link to the video").type(video)
        cy.selectFirstPosition().type(teaser)
        cy.clickByContain('Create a post')
        cy.visibleByContain(title)
    }

    deletePost() {
        cy.clickByContain('Delete')
    }

    verifyGreetings(desc) {
        cy.clickByContain('Greetings')
        cy.get('.ql-container').clear().type(desc)
        cy.clickByContain('Save settings')
    }

    verifySocials(url) {
        cy.clickByContain('Socials')
        cy.getByType('text').each($el => {
            cy.wrap($el).clear().type(url).should('have.value', url)
        })
        cy.clickByContain('Save settings')
    }

    verifyPrivacy() {
        cy.clickByContain('Privacy')
        cy.getByType('checkbox').dblclick()
    }

    createGoal(title, desc) {
        cy.getByPlaceholder("Write short title for your goal").type(title)
        cy.selectFirstPosition().type(desc)
        cy.clickByContain('Add goal')
    }

    verifyFriends(text) {
        cy.clickByContain('Friends')
        cy.getByPlaceholder("Search creators to add to friends").type(text)
        cy.clickByContain('Search')
        cy.clickByContain('Submit changes')
    }

    verifyCustomization() {
        cy.clickByContain('Customization')
        cy.clickByContain('Save settings')
    }

    verifyTranslations(text, desc) {
        cy.clickByContain('Translations')
        cy.getByPlaceholder("Start with create, share, promote ...").type(text)
        cy.selectFirstPosition().type(desc)
        cy.clickByContain('Save settings')
    }

    verifyTierTranslations() {
        cy.clickByContain('Tier translation')
        cy.clickByContain('Tier Test')
        cy.clickByContain('+ Add translation')
    }

    verifyCreatedPost() {
        cy.visibleByContain('John Doe')
        cy.visibleByContain('january 20, 2023 11:57')
        cy.visibleByContain('test')
        cy.clickByContain(' + ')
    }

    addCommentToPost(text) {
        cy.contains(' + ').dblclick()
        cy.selectFirstPosition().type(text)
        cy.clickByContain('Publish')
    }
}

export default CreatePage