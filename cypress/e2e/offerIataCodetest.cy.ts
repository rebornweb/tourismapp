describe('OneWayOfferRequests Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/flights'); // Update the URL as needed
  });

  it('should post data and get response with 3-letter IATA codes for origin and destination', () => {
    // Type in the origin city
    cy.get('input[placeholder="Enter origin city"]').type('NYC');
    cy.get('ul[role="list"]').contains('New York, US').click();

    // Type in the destination city
    cy.get('input[placeholder="Enter destination city"]').type('BNE');
    cy.get('ul[role="list"]').contains('Brisbane, AU').click();

    // Input the date
    cy.get('input[type="date"]').type('2024-05-14');

    // Click the search button
    cy.get('button').contains('Search Flights').click();

    // Custom wait for the response data to be available
    cy.wait(20000); // Wait for 10 seconds

    // Check for specific elements or text from the response data
    cy.contains('Flight Details').should('be.visible');

    // Check for loading indicators to disappear
    cy.get('.loading-spinner').should('not.exist');
  });
});
