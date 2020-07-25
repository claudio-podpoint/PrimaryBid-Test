class FaqsPage{

    getFaqsLink(){
        return cy.get('.col-xl-6 > [href="/faqs');
    }

    getFaqsHeaderLink(){
        return cy.get('.d-none > h1');
    }
}

export default new FaqsPage();