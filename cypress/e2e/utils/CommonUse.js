class CommonUse {
  getSuggestions(howMany) {
    for (let i = 0; i < howMany; i++) {
      cy.get(`[data-testid="suggestion-option-${i}"]`).should("be.visible");
    }
  }

  clickSelectedSuggestion(which) {
    cy.get(`[data-testid="suggestion-option-${which}"]`).click();
  }

  dineRewardsPageLoginWithoutRewards () {
    cy.get('[data-testid="user-icon"]').click();
      cy.origin("https://qa-auth.dine-rewards.com", () => {
      const fixtures = Cypress.require('../../fixtures/accounts.json')
      cy.get("#btn-signin-frmSignup").click();
      cy.get("#login-email").type(fixtures.withoutRewards.email);
      cy.get("#login-password").type(fixtures.withoutRewards.password);
      cy.get("#btn-sign-in").click();
    });

    cy.wait(8000);
  }

  dineRewardsPageLoginwithRewardsCurbside () {
    cy.get('[data-testid="user-icon"]').click();
      cy.origin("https://qa-auth.dine-rewards.com", () => {
      const fixtures = Cypress.require('../../fixtures/accounts.json')
      cy.get("#btn-signin-frmSignup").click();
      cy.get("#login-email").type(fixtures.withRewardsCurbside.email);
      cy.get("#login-password").type(fixtures.withRewardsCurbside.password);
      cy.get("#btn-sign-in").click();
    });

    cy.wait(8000);
  }

  dineRewardsPageLoginwithRewardsDelivery () {
    cy.get('[data-testid="user-icon"]').click();
      cy.origin("https://qa-auth.dine-rewards.com", () => {
      const fixtures = Cypress.require('../../fixtures/accounts.json')
      cy.get("#btn-signin-frmSignup").click();
      cy.get("#login-email").type(fixtures.withRewardsDelivery.email);
      cy.get("#login-password").type(fixtures.withRewardsDelivery.password);
      cy.get("#btn-sign-in").click();
    });

    cy.wait(8000);
  }
}
export default CommonUse;
