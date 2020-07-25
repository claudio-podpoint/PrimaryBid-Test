/// <reference types="cypress" />
import AboutUsPage from '../../support/page-object/aboutusPage.js'

describe('Navigate to the About Us page', () => {
    beforeEach(() => {
        // authenticates the user using a command function
        cy.authentication()
    })
    
    it('should click on the AboutUs link and display the About Us page', () => {
        AboutUsPage.getAboutUsLink().click()
        cy.location('pathname').should('eq','/about');
        AboutUsPage.getOurMissionHeader().should('contain','Our mission.')
    })
 })
