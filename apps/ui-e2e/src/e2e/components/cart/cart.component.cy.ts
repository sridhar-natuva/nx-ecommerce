describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cartcomponent--primary'));
  it('should render the component', () => {
    cy.get('e-commerce-cart').should('exist');
  });
});
