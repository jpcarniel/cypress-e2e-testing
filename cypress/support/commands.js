const loginPage = require('../pages/LoginPage')
const inventoryPage = require('../pages/InventoryPage')
const cartPage = require('../pages/CartPage')
const checkoutPage = require('../pages/CheckoutPage')
const { PASSWORD } = require('./users')

Cypress.Commands.add('login', (user) => {
  loginPage.visit()
  loginPage.login(user, PASSWORD)
  cy.url().should('include', '/inventory')
})

Cypress.Commands.add('addFirstProduct', () => {
  cy.get(inventoryPage.items)
    .first()
    .then(($item) => {
      inventoryPage.addToCart($item)
    })
  inventoryPage.goToCart()
  cy.url().should('include', '/cart')
})

Cypress.Commands.add('goToCheckoutStepOne', () => {
  cy.addFirstProduct()
  cartPage.checkout()
  cy.url().should('include', '/checkout-step-one')
})

Cypress.Commands.add('goToCheckoutStepTwo', () => {
  cy.goToCheckoutStepOne()
  cy.fixture('checkout').then((data) => {
    checkoutPage.fill(data.valid)
  })
  cy.url().should('include', '/checkout-step-two')
})

Cypress.Commands.add('goToCheckoutComplete', () => {
  cy.goToCheckoutStepTwo()
  checkoutPage.finish()
  cy.url().should('include', '/checkout-complete')
})
