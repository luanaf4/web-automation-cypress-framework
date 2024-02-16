class NavBarPage {
    navBar_logo() {
        return cy.get('[data-testid="header image"]')
    }

    navBar_basket() {
        return cy.get('[data-testid="basket-icon"]')
    }

    navBar_openBasket() {
        this.navBar_basket().click()
    }
}

export default NavBarPage