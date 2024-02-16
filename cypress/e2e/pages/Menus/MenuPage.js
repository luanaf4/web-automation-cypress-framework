class MenuPage {
  menu_editAddressButton() {
    return cy.get('[data-testid="edit-address-button"]');
  }

  menu_currentAddress() {
    return cy.get("#address");
  }

  menu_deliveryMethod(){
    return cy.get("#method");
  }
}
export default MenuPage;