class SignUpPage{

    getSignupLink(){
        return cy.get('.col-xl-3.d-none > .button--teal');
    }

    enterUserEmail(){
        return cy.get('[name="email"]');
    }

    enterUserPassword(){
        return cy.get('[name="password"]');
    }
     retypePassword(){
      return cy.get('[name="confirmPassword"]');
     }

    getSubmitButton(){
        return cy.get('.cta-1 > .d-flex > .inner-text');
    }

    getUserDetailsPageHeader(){
        return cy.get('h1');
    }
}

export default new SignUpPage();