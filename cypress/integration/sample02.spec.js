const getStore = () => cy.window().its('$nuxt.$store')
describe('Counter Test Vuex & API Test', () => {
  it('ClickCounter', () => {
    cy.visit('http://localhost:3000')
    cy.get('.button--grey').click()
    cy.url().should('include', '/sample02')
    cy.get('[data-counter-input-value]').should('include.text', 0)
    cy.get('[data-counter-count-button]').click()
    cy.get('[data-counter-input-value]').should('include.text', 2)
    cy.get('[data-counter-message]').should('include.text', 'small')

    cy.get('[data-counter-count-button]').click()
    cy.get('[data-counter-message]').should('include.text', 'small')
    cy.get('[data-counter-count-button]').click()
    cy.get('[data-counter-message]').should('include.text', 'large')
  })
  it('api get', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
    }).as('getTodo')
    cy.get('[data-counter-api-button]').click()

    cy.wait('@getTodo').its('response.body').should('deep.equal', {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    })
  })
  it('api post', () => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
    }).as('postTodo')
    cy.get('[data-counter-apipost-button]').click()

    cy.wait('@postTodo').then((xhr) => {
      cy.wrap(xhr).its('request.body').should('deep.equal', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      cy.wrap(xhr)
        .its('response.body')
        .should('deep.equal', { title: 'foo', body: 'bar', userId: 1, id: 101 })
    })
  })
})
