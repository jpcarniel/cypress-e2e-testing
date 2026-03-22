const loginPage = require('../pages/LoginPage')

describe('Login', () => {
  const users = [
    { username: 'standard_user', shouldPass: true },
    { username: 'locked_out_user', shouldPass: false },
    { username: 'problem_user', shouldPass: true },
    { username: 'performance_glitch_user', shouldPass: true },
    { username: 'error_user', shouldPass: true },
    { username: 'visual_user', shouldPass: true },
  ]

  beforeEach(() => {
    loginPage.visit()
  })

  users.forEach(({ username, shouldPass }) => {
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
