class Modal {
  modal_BasketTransfer() {
    return cy.get("#warning-transfer-basket-modal");
  }

  modal_RestaurantNotFind() {
    return cy.get("#empty-restaurants-modal");
  }

  modal_RestaurantClosed() {
    return cy.get("#closed-restaurant-modal");
  }

  modal_PrimaryButton() {
    return cy.get("#primary-modal-button");
  }

  modal_SecondaryButton() {
    return cy.get("#secondary-modal-button");
  }
}
export default Modal;
