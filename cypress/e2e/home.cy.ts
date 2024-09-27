describe('home page', () => {
  it('the h1 contains the correct texxt', () => {
    cy.visit('http://localhost:3000')
    cy.get("[data-test='main-heading']").contains('Welcome to SkySetters');
  })
})