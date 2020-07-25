class NewsPage{

    getNewsLink(){
        return cy.get('.col-xl-6 > [href="/news"]');
    }

    getFeaturedContentHeader(){
        return cy.get(':nth-child(1) > .title--line-teal-flex')
    }

    getNewsContent(){
        return cy.get('[data-testid=page-body] > :nth-child(2)');
    }

    getAllContentHeader(){
        return cy.get(':nth-child(3) > .title--line-teal-flex');
    }

    getAllContentNews(){
        return cy.get('[data-testid=page-body] > :nth-child(4)');
    }
}

export default new NewsPage();