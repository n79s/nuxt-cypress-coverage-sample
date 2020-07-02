const getStore = () => cy.window().its('$nuxt.$store')
describe('Counter Test Vuex Direct', () => {
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
  it('Vuex Direct', () => {
    getStore().its('state.vcounter').should('equal', 6)
    getStore().then((store) => {
      store.dispatch('setCounter', 10)
      getStore().its('state.vcounter').should('equal', 10)
      cy.wrap(store.getters.vcounter).should('equal', 10)
    })
  })
})
