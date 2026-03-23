const loginPage = require('../pages/LoginPage')
const { loginUsers } = require('../support/users')

describe('Login', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  loginUsers.forEach(({ username, shouldPass }) => {
    it(`Should login with ${username}`, () => {
      loginPage.login(username, 'secret_sauce')

      if (shouldPass) {
        cy.url().should('include', '/inventory')
      } else {
        cy.get(loginPage.errorMessage).should('be.visible')
      }
    })
  })
})
