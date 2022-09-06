describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary'));
  it('should render the component', () => {
    cy.get('e-commerce-header').should('exist');
  });
});
