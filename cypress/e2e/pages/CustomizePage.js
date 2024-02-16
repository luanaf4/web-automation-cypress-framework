class CustomizePage {
  customize_specialInstructionsInputField() {
    return cy.get('[data-testid="special-instructions-input"]');
  }

  customize_whoIsThisForInputField() {
    return cy.get('[data-testid="item-made-for-input"]');
  }

  customize_centerCutHomeStyleMashedPotato() {
    return cy.get('[data-testid="Homestyle-Mashed-Potatoes_2170579309"]');
  }

  customize_centerCutBakedPotato() {
    return cy.get('[data-testid="Baked-Potato_2170579336"]');
  }

  customize_addVictoriasAussieFries() {
    return cy.get('[data-testid="Aussie-Fries_1143712579"]');
  }

  customize_addVictoriasBakedPotato() {
    return cy.get('[data-testid="Baked-Potato_1143712594"]');
  }

  customize_changeTemperatureToMediumRare() {
    return cy.contains("MR");
  }

  customize_mediumRareTemperatureAtSummary() {
    return cy.contains("Medium Rare: Warm Red Center");
  }

  customize_checkNutritionButton() {
    return cy.get('[data-testid="aditional-nutrition-button"]');
  }

  customize_addToBasket() {
    return cy.get('[data-testid="add-to-cart-button"]');
  }

  customize_update() {
    return cy.get('[data-testid="update-item-button"]');
  }

  customize_updateButtonText() {
    return cy.get('[data-testid="update-item-button"]');
  }

  customize_checkoutGrilledShrimpOnTheBarbie() {
    return cy.get('[data-testid="1142939294-checkbox"]');
  }

  customiza_checkoutCalamis() {
    return cy.get('[data-testid="options-checkbox"]');
  }

  customiza_checkoutboxCalamisNoMarinaraSauce() {
    return cy.get('[data-testid="2536483195-checkbox"]');
  }

  customize_updatelabelCustomize() {
    return cy.get('[data-testid="product-choice-0-0"]');
  }

  customize_checkboxGrilledShrimpOnThebarbieNoBread() {
    return cy.get('[data-testid="1142939293-checkbox"]');
  }

  customize_carrabbasJohnnyTrioSizeOptions10oz() {
    return cy.get('[data-testid="10oz-Sirloin_2537939797"]');
  }

  customize_bonefishBeefAndGingerPotstickersNoGreenOnion() {
    return cy.get('[data-testid="1170166665-checkbox"]');
  }

  customize_bonefishSirloinAddFries() {
    return cy.get('[data-testid="Fries_1170170410"]');
  }

  customize_bonefishSirloinAddJasmineRice() {
    return cy.get('[data-testid="Jasmine-Rice_1170170427"]');
  }

  customize_addCenterCutExtraItems() {
    this.customize_centerCutHomeStyleMashedPotato().click();
    this.customize_centerCutBakedPotato().click();
    this.customize_addToBasket().click();
  }

  customize_addVictoriasExtraItems() {
    this.customize_addVictoriasAussieFries().click();
    this.customize_addVictoriasBakedPotato().click();
    this.customize_addToBasket().click();
  }

  customize_clickNoBreadGrilliedShrimpOnTheBarbie() {
    this.customize_checkoutGrilledShrimpOnTheBarbie();
    this.customize_checkboxGrilledShrimpOnThebarbieNoBread()
      .eq(0)
      .check({ force: true });
  }

  customize_clickNoMarinaSauceCalamis() {
    this.customiza_checkoutCalamis();
    this.customiza_checkoutboxCalamisNoMarinaraSauce()
      .eq(0)
      .check({ force: true });
  }

  customize_addJohnnyTrioExtraItems() {
    this.customize_carrabbasJohnnyTrioSizeOptions10oz().click();
    this.customize_changeTemperatureToMediumRare().click();
    this.customize_addToBasket().click();
  }

  customize_addSirloinExtraItems() {
    this.customize_bonefishSirloinAddFries().click();
    this.customize_bonefishSirloinAddJasmineRice().click();
  }
}

export default CustomizePage;
