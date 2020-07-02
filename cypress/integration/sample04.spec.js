const getComponents = () => cy.window().its('$allComponents')
const getPageComponent = (pagepath) =>
  cy
    .window()
    .its('$allComponents')
    .then((compos) => {
      for (const x of compos) {
        if (String(x.$vnode.tag).includes(pagepath)) {
          return x
        }
      }
    })

describe('Counter Test Component Direct', () => {
  it('ClickCounter', () => {
    cy.visit('http://localhost:3000')
    cy.get('.button--grey').click()
    cy.url().should('include', '/sample02')

    getPageComponent('pages/sample02').then((target) => {
      cy.wrap(target.$children).its(0).invoke('handleClick')
      cy.wrap(target.$children).its(0).its('vcounter').should('equal', 2)
      cy.wrap(target.$children).its(0).invoke('handleClick')
      cy.wrap(target.$children).its(0).invoke('handleClick')
      cy.wrap(target.$children).its(0).its('vcounter').should('equal', 6)
    })
  })
})
