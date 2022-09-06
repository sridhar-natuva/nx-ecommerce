describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=footercomponent--primary'));
  it('should render the component', () => {
    cy.get('e-commerce-footer').should('exist');
  });
});
