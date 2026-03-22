const loginPage = require('../pages/LoginPage')
const inventoryPage = require('../pages/InventoryPage')
const cartPage = require('../pages/CartPage')
const checkoutPage = require('../pages/CheckoutPage')

const DEFAULT_PASSWORD = 'secret_sauce'

Cypress.Commands.add('login', (user) => {
  loginPage.visit()
  loginPage.login(user, DEFAULT_PASSWORD)
  cy.url().should('include', '/inventory')
})

Cypress.Commands.add('addFirstProduct', () => {
  cy.get(inventoryPage.items).first().find('button').click()
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
  checkoutPage.fillForm('João', 'Silva', '12345')
  checkoutPage.submitForm()
  cy.url().should('include', '/checkout-step-two')
})

Cypress.Commands.add('goToCheckoutComplete', () => {
  cy.goToCheckoutStepTwo()
  checkoutPage.finish()
  cy.url().should('include', '/checkout-complete')
})

Cypress.Commands.add('fillCheckout', (data) => {
  checkoutPage.fill(data)
})
