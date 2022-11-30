describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
  })
  it('check navbar', () => {
    cy.get('[data-cy=navbar]')
  })
  it('check settings page', () => {
    cy.get('[data-cy=nav-settings]').click()
    cy.intercept(
      {
        method: 'GET', // Route all GET requests
        url: '/locations/', // that have a URL that matches '/users/*'
      },
      [] // and force the response to be: []
    ).as('getLocations') // and assign an alias
  })
})