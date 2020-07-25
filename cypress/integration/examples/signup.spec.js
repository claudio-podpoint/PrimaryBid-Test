/// <reference types="cypress" />
import SignUpPage from '../../support/page-object/signupPage'
const faker = require('faker');

describe('Navigate to the Sign up page', () => {
    beforeEach(() => {
        cy.authentication()
        SignUpPage.getSignupLink().click()
    })
    
    it('should click on the SignUp link and display the SignUp page', () => {
        cy.location('pathname').should('eq','/user/signup')
    })

    it('Data submitted to the sign up page directs the user to the details page', () => {
        // generating random email & password
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password();

        // entering user email, password & confirmPassword
        SignUpPage.enterUserEmail().type(randomEmail).should('have.value', randomEmail)
        SignUpPage.enterUserPassword().type(randomPassword).should('have.value', randomPassword)
        SignUpPage.retypePassword().type(randomPassword).should('have.value', randomPassword)

        // click the submit button and assert correct url is displayed
        SignUpPage.getSubmitButton().click()
        cy.location('pathname').should('eq','/user/personal-details')
        SignUpPage.getUserDetailsPageHeader().should('have.text','Welcome to PrimaryBid')
    })
})