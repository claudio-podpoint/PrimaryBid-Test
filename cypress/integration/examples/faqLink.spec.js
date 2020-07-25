/// <reference types="cypress" />
import FaqsPage from '../../support/page-object/faqsPage.js'

describe("Navigate to the FAQ's page", () => {
     beforeEach(() => {
         cy.authentication()
    })

    it("should navigate to the FAQ's link", () => {
        FaqsPage.getFaqsLink().click()
        cy.location('pathname').should('eq','/faqs')
        FaqsPage.getFaqsHeaderLink().should('contain', 'Frequently Asked Questions')
    })
})