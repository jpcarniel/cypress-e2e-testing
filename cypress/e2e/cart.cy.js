const cartPage = require('../pages/CartPage')

const users = [
  'standard_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user',
]

users.forEach((user) => {
  describe(`Cart - ${user}`, () => {
    beforeEach(() => {
      cy.login(user)
      cy.addFirstProduct()
    })

    it('Should display added product with name, description and price', () => {
      cy.get(cartPage.items).should('have.length', 1)
      cy.get(cartPage.itemName).should('not.be.empty')
      cy.get(cartPage.itemDescription).should('not.be.empty')
      cy.get(cartPage.itemPrice).should('not.be.empty')
    })

    it('Should remove product from cart', () => {
      cartPage.removeItem()
      cy.get(cartPage.items).should('not.exist')
      cy.get(cartPage.cartBadge).should('not.exist')
    })

    it('Should navigate back to /inventory on Continue Shopping', () => {
      cartPage.continueShopping()
      cy.url().should('include', '/inventory')
    })

    it('Should persist products after navigating to /inventory and back', () => {
      cartPage.continueShopping()
      cartPage.goToCart()
      cy.get(cartPage.items).should('have.length', 1)
    })

    it('Should navigate to /checkout-step-one on Checkout', () => {
      cartPage.checkout()
      cy.url().should('include', '/checkout-step-one')
    })
  })
})
