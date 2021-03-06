describe("Tests for the Lambda Cypress Testing project", () => {
    it("Visits the local server", () => {
        cy.visit("http://localhost:3000/");
    });

    it("Types a name into the name field & checks the value", () => {
        cy.get('#name').type("Keenan Hallas").should("have.value", "Keenan Hallas");
    });
});