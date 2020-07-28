/// <reference types="cypress" />
import SignUpPage from '../../support/page-object/signupPage'
const faker = require('faker');

describe('Navigate to the Sign up page', () => {
    beforeEach(() => {
        cy.authentication()
    })
    
    it('should click on the SignUp link and display the SignUp page', () => {
        SignUpPage.getSignupLink().click()
        cy.location('pathname').should('eq','/user/signup')
    })

    it('Data submitted to the sign up page directs the user to the details page', () => {
        SignUpPage.getSignupLink().click()
        // generating random email & password
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password();

        // entering user email, password & retypePassword
        SignUpPage.enterUserEmail().type(randomEmail).should('have.value', randomEmail)
        SignUpPage.enterUserPassword().type(randomPassword).should('have.value', randomPassword)
        SignUpPage.retypePassword().type(randomPassword).should('have.value', randomPassword)

        // click the submit button and assert user details page is displayed
        SignUpPage.getSubmitButton().click()
        cy.location('pathname').should('eq','/user/personal-details')
        SignUpPage.getUserDetailsPageHeader().should('have.text','Welcome to PrimaryBid')
    })
})