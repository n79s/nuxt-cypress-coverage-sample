describe('My First Test', () => {
  it('トップ', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/')
  })
})
