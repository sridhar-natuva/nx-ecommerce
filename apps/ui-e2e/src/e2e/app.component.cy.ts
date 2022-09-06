describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('e-commerce-root').should('exist');
  });
});
