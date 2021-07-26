describe('visit auto1 site and show the result', () => {
    it('loads home page', () => {
      cy.visit('https://www.auto1.com/en/home');
      cy.contains("Europe’s largest wholesale platform for used cars");
      cy.get('a[data-testid="header-sing-up-button"]').click();
    });
  });
  