const nav = require('./NavComponent')

class InventoryPage {
  get items() {
    return '[data-test="inventory-item"]'
  }

  get itemNames() {
    return '[data-test="inventory-item-name"]'
  }

  get itemDescriptions() {
    return '[data-test="inventory-item-desc"]'
  }

  get itemPrices() {
    return '[data-test="inventory-item-price"]'
  }

  get sortDropdown() {
    return '[data-test="product-sort-container"]'
  }

  get cartBadge() {
    return nav.cartBadge
  }

  sortBy(option) {
    cy.get(this.sortDropdown).select(option)
  }

  getNames() {
    return cy.get(this.itemNames).then(($items) => {
      return [...$items].map((el) => el.innerText)
    })
  }

  getPrices() {
    return cy.get(this.itemPrices).then(($prices) => {
      return [...$prices].map((el) => parseFloat(el.innerText.replace('$', '')))
    })
  }

  addToCart(item) {
    cy.wrap(item).find('button[data-test^="add-to-cart"]').click()
  }

  removeFromCart(item) {
    cy.wrap(item).find('button[data-test^="remove"]').click()
  }

  goToCart() {
    nav.goToCart()
  }
}

module.exports = new InventoryPage()
