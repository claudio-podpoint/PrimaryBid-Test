class AboutUSPage{

    navigateToUrl(){
     return cy.visit(Cypress.env('url')),{
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
            }
        }
    }
}

export default new AboutUSPage();