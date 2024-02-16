class BasketPage {
  basket_firstProductName() {
    return cy.get('[data-testid="product-name-0"]');
  }

  basket_secondProductName() {
    return cy.get('[data-testid="product-name-1"]');
  }

  basket_firstProductSpecialInstruction() {
      return cy.get('[data-testid="special-instructions-text-0"]')
  }

  basket_editButton() {
    return cy.get('[data-testid="0-edit-button"]');
  }

  basket_removeButton() {
    return cy.get('[data-testid="0-remove-button"]');
  }

  basket_duplicateButton() {
    return cy.get('[data-testid="0-duplicate-button"]');
  }

  basket_addMoreItemsButton() {
    return cy.get('[data-testid="add-more-items-button"]');
  }

  basket_clearBasketButton() {
    return cy.get('[data-testid="clear-basket-button"]');
  }

  basket_clearBasketConfirmButton() {
    return cy.get('[data-testid="remove-all-itens-button"]');
  }

  basket_clearBasketCancelButton() {
    return cy.get('[data-testid="cancel-clear-basket-button"]');
  }

  basket_addCheesecake() {
    return cy.get('[data-testid="Cheesecake_12882334"]');
  }

  basket_joinDineRewardsButton() {
    return cy.get('[data-testid="join-dine-button"]');
  }

  basket_addChocolateThunder() {
    return cy.get(
      '[data-testid="Chocolate-Thunder-from-Down-Under®**_12401906"]'
    );
  }

  basket_addMozzarellaMarinara() {
    return cy.get('[data-testid="Mozzarella-Marinara_16617935"]');
  }

  basket_continueButton() {
    return cy.get('[data-testid="continue-button"]');
  }

  basket_clickDuplicateButtonMultipleTimes(times) {
    for (let i = 0; i < times; i++) {
      this.basket_duplicateButton().click();
    }
  }

  basket_startOrderButton() {
    return cy.get('[data-testid="start-order-button"]');
  }

  basket_screen() {
    return cy.get('[data-testid="blank-title"]');
  }
}

export default BasketPage;
