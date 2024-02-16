class OrderReceivedPage {
    orderReceived_ReturnButton() {
        return cy.get('[data-testid="Return-button"]')
    }

    orderReceived_Subtitle() {
        return cy.get('[data-testid="subtitle"]')
    }

    orderReceived_OrderID() {
        return cy.get('#order-id')
    }

    orderReceived_Method() {
        return cy.get('#method')
    }

    orderReceived_Address() {
        return cy.get('#address')
    }

    orderReceived_ProductCost() {
        return cy.get('[data-testid="product-cost-0"]')
    }

    orderReceived_Subtotal() {
        return cy.get('[data-testid="subtotal-value"]')
    }

    orderReceived_Tax() {
        return cy.get('[data-testid="tax-value"]')
    }

    orderReceived_Tip() {
        return cy.get('[data-testid="tip-value"]')
    }

    orderReceived_Total() {
        return cy.get('[data-testid="total-value"]')
    }

    orderReceived_ContactUsText() {
        return cy.get('#contact-info-text')
    }

    orderReceived_ContactUs() {
        return cy.get('#contact-us')
    }

    orderReceived_VerifyScreenElements() {
        cy.wait(10000)
        this.orderReceived_ReturnButton().should('be.visible')
        this.orderReceived_Subtitle().should('be.visible')
        this.orderReceived_OrderID().should('be.visible')
        this.orderReceived_Method().should('be.visible')
        this.orderReceived_Address().should('be.visible')
        this.orderReceived_ProductCost().should('be.visible')
        this.orderReceived_Subtotal().should('be.visible')
        this.orderReceived_Tax().should('be.visible')
        this.orderReceived_Tip().should('be.visible')
        this.orderReceived_Total().should('be.visible')
    }
}

export default OrderReceivedPage;