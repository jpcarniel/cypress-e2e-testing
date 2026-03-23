const inventoryPage = require('../pages/InventoryPage')
const { testUsers } = require('../support/users')

testUsers.forEach((user) => {
  describe(`Inventory - ${user}`, () => {
    beforeEach(() => {
      cy.login(user)
    })

    it('Should display products with image, name, description and price', () => {
      cy.get(inventoryPage.items).each(($item) => {
        cy.wrap($item).find('.inventory_item_img').should('be.visible')
        cy.wrap($item).find(inventoryPage.itemNames).should('not.be.empty')
        cy.wrap($item).find(inventoryPage.itemDescriptions).should('not.be.empty')
        cy.wrap($item).find(inventoryPage.itemPrices).should('not.be.empty')
      })
    })

    it('Should display the correct image for each product', () => {
      cy.fixture('products').then((products) => {
        cy.get(inventoryPage.items).each(($item) => {
          const productName = Cypress.$($item)
            .find(inventoryPage.itemNames)
            .text()
            .trim()
          const imageSrc = Cypress.$($item)
            .find('img.inventory_item_img')
            .attr('src')
          const expectedPartial = products[productName]
          expect(expectedPartial, `Unmapped product: ${productName}`).to.exist
          expect(imageSrc).to.include(expectedPartial)
        })
      })
    })

    it('Should sort products A to Z', () => {
      inventoryPage.sortBy('az')
      inventoryPage.getNames().then((names) => {
        expect(names).to.deep.equal([...names].sort())
      })
    })

    it('Should sort products Z to A', () => {
      inventoryPage.sortBy('za')
      inventoryPage.getNames().then((names) => {
        expect(names).to.deep.equal([...names].sort().reverse())
      })
    })

    it('Should sort products by lowest price', () => {
      inventoryPage.sortBy('lohi')
      inventoryPage.getPrices().then((prices) => {
        expect(prices).to.deep.equal([...prices].sort((a, b) => a - b))
      })
    })

    it('Should sort products by highest price', () => {
      inventoryPage.sortBy('hilo')
      inventoryPage.getPrices().then((prices) => {
        expect(prices).to.deep.equal([...prices].sort((a, b) => b - a))
      })
    })

    it('Should add and remove each product individually from cart', () => {
      cy.get(inventoryPage.items).each(($item) => {
        inventoryPage.addToCart($item)
        cy.get(inventoryPage.cartBadge).should('exist')
        inventoryPage.removeFromCart($item)
        cy.get(inventoryPage.cartBadge).should('not.exist')
      })
    })

    it('Should update cart badge when adding multiple products', () => {
      cy.get(inventoryPage.items).each(($item, index) => {
        inventoryPage.addToCart($item)
        cy.get(inventoryPage.cartBadge).should('have.text', String(index + 1))
      })
    })
  })
})
