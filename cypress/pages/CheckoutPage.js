class CheckoutPage {
  // Step One
  get firstNameInput() {
    return '[data-test="firstName"]'
  }

  get lastNameInput() {
    return '[data-test="lastName"]'
  }

  get postalCodeInput() {
    return '[data-test="postalCode"]'
  }

  get continueButton() {
    return '[data-test="continue"]'
  }

  get cancelButton() {
    return '[data-test="cancel"]'
  }

  get errorMessage() {
    return '[data-test="error"]'
  }

  // Step Two
  get cartItems() {
    return '.cart_item'
  }

  get itemName() {
    return '[data-test="inventory-item-name"]'
  }

  get itemPrice() {
    return '[data-test="inventory-item-price"]'
  }

  get subtotalLabel() {
    return '.summary_subtotal_label'
  }

  get taxLabel() {
    return '.summary_tax_label'
  }

  get totalLabel() {
    return '.summary_total_label'
  }

  get summaryInfo() {
    return '.summary_info'
  }

  get finishButton() {
    return '[data-test="finish"]'
  }

  // Complete
  get completeHeader() {
    return '.complete-header'
  }

  get completeText() {
    return '.complete-text'
  }

  get backHomeButton() {
    return '[data-test="back-to-products"]'
  }

  get cartBadge() {
    return '.shopping_cart_badge'
  }

  fillForm(firstName, lastName, postalCode) {
    cy.get(this.firstNameInput).type(firstName)
    cy.get(this.lastNameInput).type(lastName)
    cy.get(this.postalCodeInput).type(postalCode)
  }

  submitForm() {
    cy.get(this.continueButton).click()
  }

  fill(data) {
    this.fillForm(data.firstName, data.lastName, data.postalCode)
    this.submitForm()
  }

  cancel() {
    cy.get(this.cancelButton).click()
  }

  finish() {
    cy.get(this.finishButton).click()
  }

  backHome() {
    cy.get(this.backHomeButton).click()
  }

  extractValue(selector) {
    return cy
      .get(selector)
      .invoke('text')
      .then((t) => parseFloat(t.replace(/[^0-9.]/g, '')))
  }
}

module.exports = new CheckoutPage()
