describe("Navigation", () => {
  it("start page should contain welcome", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    cy.get("[data-cy=welcome]").contains("Welcome");
  });
});
