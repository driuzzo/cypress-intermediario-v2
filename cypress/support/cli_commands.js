Cypress.Commands.add('cloneViaHTTPS', project => {
    //const domain = Cypress.config('baseUrl').replace('http://', '')

    cy.exec(`cd cypress/downloads/ && git clone http://localhost:83/${Cypress.env('user_name')}/${project.name}.git`)
})