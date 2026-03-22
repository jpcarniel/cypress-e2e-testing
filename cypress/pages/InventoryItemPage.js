class InventoryItemPage {
  get image() {
    return '.inventory_details_img'
  }

  get name() {
    return '[data-test="inventory-item-name"]'
  }

  get description() {
    return '[data-test="inventory-item-desc"]'
  }

  get price() {
    return '[data-test="inventory-item-price"]'
  }

  get addToCartButton() {
    return '[data-test="add-to-cart"]'
  }

  get removeButton() {
    return '[data-test="remove"]'
  }

  get backButton() {
    return '[data-test="back-to-products"]'
  }

  get cartBadge() {
    return '.shopping_cart_badge'
  }

  addToCart() {
    cy.get(this.addToCartButton).click()
  }

  remove() {
    cy.get(this.removeButton).click()
  }

  goBack() {
    cy.get(this.backButton).click()
  }
}

module.exports = new InventoryItemPage()
