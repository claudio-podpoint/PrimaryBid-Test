/// <reference types="cypress" />
import NewsPage from '../../support/page-object/newsPage.js'

describe("Navigate to the News page", () => {
     beforeEach(() => {
         cy.authentication()
         NewsPage.getNewsLink().click()
    })

    it("should click on News link and display the News page", () => {
        cy.location('pathname').should('eq','/news')
        NewsPage.getFeaturedContentHeader()
        .should('have.text', 'Featured Content')
    })

    it('should contain news items for the Featured Content section', () => {
        NewsPage.getFeaturedContentHeader().should('have.text', 'Featured Content')
        NewsPage.getNewsContent().should('contain', 'PrimaryBid triumphs in retail campaign')
    })

    it('should contain news items for the All content section', () => {
        NewsPage.getAllContentHeader().should('have.text', 'All Content')
        NewsPage.getNewsContent().should('contain', 'Ocado raises £1bn as online grocery booms')
    })

    it.skip('All Content section can be filtered to Webinar', () => {
        cy.get('.col-xl-6 > [href="/news"]').click()
        cy.get('[data-testid=news-filter-button]').click()
        cy.debug()
    })
})