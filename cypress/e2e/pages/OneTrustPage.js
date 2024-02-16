class OneTrustPage {
    oneTrust_closeButton() {
        return cy.get('#onetrust-close-btn-container > .onetrust-close-btn-handler')
    }

    oneTrust_rejectAllButton() {
        return cy.get('#onetrust-reject-all-handler')
    }

    oneTrust_acceptAllButton() {
        return cy.get('#onetrust-accept-btn-handler')
    }

    oneTrust_closePopUp() {
        cy.wait(6000)
        this.oneTrust_closeButton().click()
    }
}

export default OneTrustPage