const checkoutPage = require('../pages/CheckoutPage')

const users = [
  'standard_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user',
]

users.forEach((user) => {
  describe(`Checkout - ${user}`, () => {
    // =====================
    // /checkout-step-one
    // =====================

    describe('/checkout-step-one', () => {
      beforeEach(() => {
        cy.login(user)
        cy.goToCheckoutStepOne()
      })

      it('Should proceed to /checkout-step-two with valid data', () => {
        cy.fixture('checkout').then((data) => {
          checkoutPage.fill(data.valid)
        })
        cy.url().should('include', '/checkout-step-two')
      })

      it('Should display error on empty form submission', () => {
        checkoutPage.submitForm()
        cy.get(checkoutPage.errorMessage).should('be.visible')
      })

      it('Should display error when first name is missing', () => {
        cy.fixture('checkout').then((data) => {
          cy.get(checkoutPage.lastNameInput).type(data.valid.lastName)
          cy.get(checkoutPage.postalCodeInput).type(data.valid.postalCode)
        })
        checkoutPage.submitForm()
        cy.get(checkoutPage.errorMessage).should('be.visible')
      })

      it('Should display error when last name is missing', () => {
        cy.fixture('checkout').then((data) => {
          cy.get(checkoutPage.firstNameInput).type(data.valid.firstName)
          cy.get(checkoutPage.postalCodeInput).type(data.valid.postalCode)
        })
        checkoutPage.submitForm()
        cy.get(checkoutPage.errorMessage).should('be.visible')
      })

      it('Should display error when postal code is missing', () => {
        cy.fixture('checkout').then((data) => {
          cy.get(checkoutPage.firstNameInput).type(data.valid.firstName)
          cy.get(checkoutPage.lastNameInput).type(data.valid.lastName)
        })
        checkoutPage.submitForm()
        cy.get(checkoutPage.errorMessage).should('be.visible')
      })

      it('Should accept special characters in fields', () => {
        cy.fixture('checkout').then((data) => {
          checkoutPage.fill(data.specialCharacters)
        })
        cy.url().should('include', '/checkout-step-two')
      })

      it('Should accept numeric-only input', () => {
        cy.fixture('checkout').then((data) => {
          checkoutPage.fill(data.numeric)
        })
        cy.url().should('include', '/checkout-step-two')
      })

      it('Should accept long input strings', () => {
        cy.fixture('checkout').then((data) => {
          checkoutPage.fill(data.long)
        })
        cy.url().should('include', '/checkout-step-two')
      })

      it('Should not render injected HTML in fields (XSS)', () => {
        cy.fixture('checkout').then((data) => {
          checkoutPage.fill(data.xss)
        })
        cy.url().should('include', '/checkout-step-two')
        cy.get(checkoutPage.summaryInfo).then(($summary) => {
          const html = $summary.html()
          expect(html).not.to.include('<script>alert')
          expect(html).not.to.include('<img src=x>')
        })
      })

      it('Should cancel and return to /cart', () => {
        checkoutPage.cancel()
        cy.url().should('include', '/cart')
      })
    })

    // =====================
    // /checkout-step-two
    // =====================

    describe('/checkout-step-two', () => {
      beforeEach(() => {
        cy.login(user)
        cy.goToCheckoutStepTwo()
      })

      it('Should display product with name, description and price', () => {
        cy.get(checkoutPage.cartItems).should('have.length', 1)
        cy.get(checkoutPage.itemName).should('not.be.empty')
        cy.get(checkoutPage.itemPrice).should('not.be.empty')
      })

      it('Should display total price with taxes', () => {
        cy.get(checkoutPage.subtotalLabel).should('be.visible')
        cy.get(checkoutPage.taxLabel).should('be.visible')
        cy.get(checkoutPage.totalLabel).should('be.visible')
      })

      it('Should calculate total correctly (subtotal + tax = total)', () => {
        checkoutPage.extractValue(checkoutPage.subtotalLabel).as('subtotal')
        checkoutPage.extractValue(checkoutPage.taxLabel).as('tax')
        checkoutPage.extractValue(checkoutPage.totalLabel).as('total')

        cy.then(function () {
          expect(this.subtotal + this.tax).to.be.closeTo(this.total, 0.01)
        })
      })

      it('Should complete purchase and navigate to /checkout-complete', () => {
        checkoutPage.finish()
        cy.url().should('include', '/checkout-complete')
      })

      it('Should cancel and return to /inventory', () => {
        checkoutPage.cancel()
        cy.url().should('include', '/inventory')
      })
    })

    // =====================
    // /checkout-complete
    // =====================

    describe('/checkout-complete', () => {
      beforeEach(() => {
        cy.login(user)
        cy.goToCheckoutComplete()
      })

      it('Should display order confirmation message', () => {
        cy.get(checkoutPage.completeHeader).should('be.visible')
        cy.get(checkoutPage.completeText).should('be.visible')
      })

      it('Should show empty cart after purchase', () => {
        cy.get(checkoutPage.cartBadge).should('not.exist')
      })

      it('Should navigate back to /inventory on Back Home', () => {
        checkoutPage.backHome()
        cy.url().should('include', '/inventory')
      })
    })
  })
})
