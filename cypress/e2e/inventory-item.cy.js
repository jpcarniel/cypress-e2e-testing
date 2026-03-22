const inventoryPage = require('../pages/InventoryPage')
const itemPage = require('../pages/InventoryItemPage')

const users = [
  'standard_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user',
]

users.forEach((user) => {
  describe(`Inventory Item - ${user}`, () => {
    beforeEach(() => {
      cy.login(user)
      cy.get(inventoryPage.itemNames).first().click()
      cy.url().should('include', '/inventory-item')
    })

    it('Should display image, name, description and price', () => {
      cy.get(itemPage.image).should('be.visible')
      cy.get(itemPage.name).should('not.be.empty')
      cy.get(itemPage.description).should('not.be.empty')
      cy.get(itemPage.price).should('not.be.empty')
    })

    it('Should display the correct product image', () => {
      cy.fixture('products').then((products) => {
        cy.get(itemPage.name)
          .invoke('text')
          .then((productName) => {
            const expectedPartial = products[productName.trim()]
            expect(
              expectedPartial,
              `Unmapped product: ${productName.trim()}`
            ).to.exist
            cy.get(itemPage.image)
              .invoke('attr', 'src')
              .should('include', expectedPartial)
          })
      })
    })

    it('Should add product to cart', () => {
      itemPage.addToCart()
      cy.get(itemPage.cartBadge).should('have.text', '1')
    })

    it('Should remove product from cart', () => {
      itemPage.addToCart()
      itemPage.remove()
      cy.get(itemPage.cartBadge).should('not.exist')
    })

    it('Should navigate back to /inventory', () => {
      itemPage.goBack()
      cy.url().should('include', '/inventory')
    })
  })
})
