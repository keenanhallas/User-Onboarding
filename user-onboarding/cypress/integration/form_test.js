describe("Tests for the Lambda Cypress Testing project", () => {
    it("Visits the local server", () => {
        cy.visit("http://localhost:3000/");
    });

    it("Types a name into the name field & checks the value", () => {
        cy.get('#name').type("Keenan Hallas").should("have.value", "Keenan Hallas");
    });

    it("Types an email into the email field", () => {
        cy.get('#email').type("keenanhallas@gmail.com");
    });

    it("Types a password into the password field", () => {
        cy.get('#password').type("password123");
    });

    it("Checks the terms of service box", () => {
        cy.get('#terms').check();
    });

    it("Tests the submit button", () => {
        cy.get('button').click();
    });

    it("Checks that the new user was added to the userlist", () => {
        cy.contains("Keenan Hallas - keenanhallas@gmail.com");
    });

    it("Checks for a vaidation error on an empty form", () => {
        cy.get('#name').type("Keenan Hallas").clear();
        cy.contains("You must enter your name.");
    });
});