class Items {
  item_outbackCenterCut() {
    return cy.get('[data-testid="15739428-product-card"]');
  }

  item_outbackVictorias() {
    return cy.get('[data-testid="12428589-product-card"]');
  }

  item_outbackSauzaGold() {
    return cy.get('[data-testid="13428861-product-card"]');
  }

  item_outbackGrilledShrimps() {
    return cy.get('[data-testid="12401824-product-card"]');
  }

  item_carrabbasBlackberrySangria() {
    return cy.contains("NEW! Blackberry Sangria Pitcher");
  }

  item_carrabbasFiletCaprese() {
    return cy.contains("New! Filet Caprese");
  }

  item_carrabbasCalamari() {
    return cy.contains("Calamari");
  }

  item_carrabbasJohnnyTrio() {
    return cy.contains("The Johnny Trio");
  }

  item_bonefishRagoonDip() {
    return cy.get('[data-testid="13994157-product-card"]');
  }

  item_bonefishSirloin() {
    return cy.get('[data-testid="12882436-product-card"]');
  }

  item_outbackSelectCenterCut() {
    this.item_outbackCenterCut().click();
  }

  item_selectVictorias() {
    this.item_outbackVictorias().click();
  }

  item_selectJohnnyTrio() {
    this.item_carrabbasJohnnyTrio().click();
  }

  item_bonefishSelectRagoonDip() {
    this.item_bonefishRagoonDip().click();
  }

  item_bonefishSelectSirloin() {
    this.item_bonefishSirloin().click();
  }
}
export default Items;
