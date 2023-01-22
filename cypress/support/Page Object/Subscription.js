/// <reference types="cypress" />

class Subscription {

    selectCreator() {
        cy.contains('Buy a subscription').eq(0).click()

    }

    clickBuyWithBank(user, mail) {
        switch (user) {
            case 0: {
                cy.get('input[placeholder="Write your email"]').type(mail)
                cy.clickByContain('Buy')
                cy.contains('Something went wrong').should('be.visible')
            }
                break;
            case 1: cy.contains('Buy subscription').should('be.visible')
                break;
        }


    }

    verifyTranslations(title, desc) {
        cy.contains('Edit').eq(0).click()
        cy.clickByContain('Add translation')
        cy.clickByContain('language').select('en')
        cy.selectFirstPosition().type(title)    
        cy.selectFirstPosition().type(desc)    
    }

    clickBuyWithCrypto() {
        let array = ['Bitcoin', 'Tether', 'USD Coin', 'Ripple', 'Litecoin', 'Bitcoin Cash', 'Stellar',
            'EOS', 'Dash', 'Zcash', 'WAVES', 'Dai', 'Chainlink', 'TRX', 'UNI', 'Shiba Inu', 'Dogecoin', 'EthereumPoW']

        cy.contains('Crypto').click()

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            cy.clickByContain(element)
            cy.clickByContain('Next')
            cy.clickByContain('Choose another')
        }
    }

    verifySubscriptions(type) {
        switch (type) {
            case 0: cy.contains('Active').should('be.visible')
                break;
            case 1: cy.contains('Deleted subscriptions').should('be.visible')
                break;
        }
    }

    verifySubscribers() {
        cy.clickByContain('Export to csv')
        cy.visibleByContain('List of subscribers')
        cy.visibleByContain('Subscriber count per each subscription')
    }

    searchCreatorAndClickBuySuscbription() {
        cy.getByPlaceholder("Type name, creator title or url").type("John Doe")
        cy.clickByContain('Search')
        cy.contains('John Doe').invoke('removeAttr', 'target').click()
        // cy.clickByContain('Buy a subscription')
    }

    verifyUnsubscribing() {
        cy.contains('Cancel the subscription').should('be.visible').and('not.be.disabled')
    }

    verifyCryptoDisabledPurchase() {
        cy.clickByContain('Crypto')
        cy.clickByContain('Bitcoin')
        cy.clickByContain('Next')
        cy.visibleByContain('Crypto payment is disabled by creator')
    }

    verifySubscribers() {
        cy.get("subs selector").then(function($elem) {
            cy.wrap($elem).should('be.greaterThan', '0')
       })
    }

    verifyRevenue() {
        cy.get("price selector").then(function($elem) {
            cy.wrap($elem).should('be.greaterThan', '0')
       })
    }
}

export default Subscription