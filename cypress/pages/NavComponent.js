class NavComponent {
  get cartBadge() {
    return '.shopping_cart_badge'
  }

  get cartLink() {
    return '.shopping_cart_link'
  }

  goToCart() {
    cy.get(this.cartLink).click()
  }
}

module.exports = new NavComponent()
