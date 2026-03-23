const nav = require('./NavComponent')

class CartPage {
  get items() {
    return '.cart_item'
  }

  get itemName() {
    return '[data-test="inventory-item-name"]'
  }

  get itemDescription() {
    return '[data-test="inventory-item-desc"]'
  }

  get itemPrice() {
    return '[data-test="inventory-item-price"]'
  }

  get continueShoppingButton() {
    return '[data-test="continue-shopping"]'
  }

  get checkoutButton() {
    return '[data-test="checkout"]'
  }

  get cartBadge() {
    return nav.cartBadge
  }

  removeItem() {
    cy.get('[data-test^="remove"]').click()
  }

  continueShopping() {
    cy.get(this.continueShoppingButton).click()
  }

  checkout() {
    cy.get(this.checkoutButton).click()
  }

  goToCart() {
    nav.goToCart()
  }
}

module.exports = new CartPage()
