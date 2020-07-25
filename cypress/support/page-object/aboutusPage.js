class AboutUsPage{

    getAboutUsLink(){
        return cy.get('.col-xl-6 > [href="/about"]');

    }

    getOurMissionHeader(){
        return cy.get('[data-testid=about-hero-title]');
    }
}

export default new AboutUsPage(); 