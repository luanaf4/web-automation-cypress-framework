describe("Handoff Screen Tests", () => {
  
  beforeEach(() => {

    cy.on("uncaught:exception", (e, runnable) => {console.log("error", e);console.log("runnable", runnable);return false;});

    cy.visit("https://ge.globo.com/motor/formula-1/")

    //cy.visit(Cypress.env("baseUrl"));

    //cy.viewport(Cypress.env("desktop"));

  });

  it("Home Test", () => {
    cy.viewport(Cypress.env("desktop"));

    cy.get('.cookie-banner-lgpd_accept-button').click()

  });

  it("Search Icon",() => {

    cy.get(':nth-child(3) > .grid-12 > .area-principal > .search-area').click()
    
  })

  it("Sidebar",() => {

    cy.get('.gui-color-primary-bg:nth-child(3) .menu-label').click();
    cy.get('#menu-1-formula-1 > .menu-item-link > .menu-item-title').click();
    cy.get('#menu-2-tabela .menu-item-title').click();
  })

});
