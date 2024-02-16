class HandoffPage {
  handoff_curbsideButton() {
    return cy.get('[data-testid="selectItem-Curbside"]');
  }

  handoff_deliveryButton() {
    return cy.get('[data-testid="selectItem-Delivery"]');
  }

  handoff_deliveryAddressSearchField() {
    return cy.get('[data-testid="delivery-address-input"]');
  }

  handoff_curbsideAddressSearchField() {
    return cy.get('[data-testid="curbside-address-input"]');
  }

  handoff_useMyLocationButton() {
    return cy.get('[data-testid="use-my-location"]');
  }

  handoff_firstCardOption() {
    return cy.get('[data-testid="restaurant-card-0"]');
  }

  handoff_firstCardAddress() {
    return cy.get('[data-testid="restaurant-address-0"]');
  }

  handoff_firstCardMoreInfo() {
    return cy.get('[data-testid="more-info-cta-0"]');
  }

  handoff_firstCardCurbsideHours() {
    return cy.get('[data-testid="curbsidepickup-hours-0"]');
  }

  handoff_firstCardDeliveryHours() {
    return cy.get('[data-testid="delivery-hours-0"]');
  }

  handoff_secondCardOption() {
    return cy.get('[data-testid="restaurant-card-1"]');
  }

  handoff_secondCardAddress() {
    return cy.get('[data-testid="restaurant-address-1"]');
  }

  handoff_secondCardMoreInfo() {
    return cy.get('[data-testid="more-info-cta-1"]');
  }

  handoff_secondCardCurbsideHours() {
    return cy.get('[data-testid="curbsidepickup-hours-1"]');
  }

  handoff_cardLessInfo() {
    return cy.get('[data-testid="less-info-cta"]');
  }

  handoff_addressSearchFieldOptionOne() {
    return cy.get('[data-testid="suggestion-option-0"]');
  }

  handoff_orderNowButton() {
    return cy.get('[data-testid="order-now-button"]');
  }

  handoff_selectNewYorkLab() {
    this.handoff_curbsideAddressSearchField()
      .clear()
      .type("1 World Trade Ctr, Manhattan, New York, NY 10007 USA");
    cy.wait(2000);
    this.handoff_addressSearchFieldOptionOne()
      .should("be.visible")
      .should("contain", "New York", { timeout: 10000 })
      .click();
    this.handoff_orderNowButton().click();
  }

  handoff_selectLakelandLab() {
    this.handoff_curbsideAddressSearchField()
      .clear()
      .type("225 W Pipkin Rd, Lakeland, FL 33813 USA");
    cy.wait(2000);
    this.handoff_addressSearchFieldOptionOne()
      .should("be.visible")
      .should("contain", "Lakeland", { timeout: 10000 })
      .click();
    this.handoff_orderNowButton().click();
  }

  handoff_selectDallasLab() {
    this.handoff_curbsideAddressSearchField().clear().type("DALLAS, TX");
    cy.wait(2000);
    this.handoff_addressSearchFieldOptionOne()
      .should("be.visible")
      .should("contain", "Dallas", { timeout: 10000 })
      .click();
    this.handoff_orderNowButton().click();
  }

  handoff_selectTempleTerraceLab() {
    cy.wait(2000);
    this.handoff_curbsideAddressSearchField().type("Temple Terrace, FL");
    cy.wait(2000);
    this.handoff_addressSearchFieldOptionOne()
      .should("be.visible")
      .should("contain", "Temple Terrace", { timeout: 10000 })
      .click();
    this.handoff_orderNowButton().click();
  }

  handoff_selectOpenLab() {
    cy.wait(2000);
    this.handoff_curbsideAddressSearchField().type(
      "5515 East Fowler Avenue, Tampa, FL 33617 USA"
    );
    cy.wait(4000);
    this.handoff_addressSearchFieldOptionOne()
      .should("be.visible")
      .should("contain", "5515 East Fowler Avenue, Tampa, FL 33617 USA", {
        timeout: 10000,
      })
      .click();
    this.handoff_orderNowButton().click();
  }

  handoff_selectCarrabbasClosedLab() {
    cy.wait(2000);
    this.handoff_curbsideAddressSearchField().type(
      "11435 N Dale Mabry Hwy - Tampa, FL 33618"
    );
    cy.wait(4000);
    this.handoff_addressSearchFieldOptionOne()
      .should("be.visible")
      .should("contain", "11435 N Dale Mabry", { timeout: 10000 })
      .click();
    this.handoff_orderNowButton().click();
  }

  handoff_searchNewLab(address) {
    this.handoff_curbsideAddressSearchField().clear().type(address);
    cy.wait(1000);
    this.handoff_addressSearchFieldOptionOne()
      .should("be.visible")
      .should("contain", address, { timeout: 5000 })
      .click();
    this.handoff_orderNowButton().click();
  }

  handoff_searchDeliveryLocation(address) {
    this.handoff_deliveryAddressSearchField().clear().type(address);
  }

  handoff_selectTampaOnDeliveryMethod(address) {
    this.handoff_deliveryAddressSearchField().clear().type(address);
  }
}

export default HandoffPage;
