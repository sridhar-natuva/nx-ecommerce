describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productscomponent--primary'));
  it('should render the component', () => {
    cy.get('e-commerce-products').should('exist');
  });
});
