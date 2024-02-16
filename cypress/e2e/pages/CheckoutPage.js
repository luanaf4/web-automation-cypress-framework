class CheckoutPage {
  checkout_returnButton() {
    return cy.get('[data-testid="return-button"]');
  }

  checkout_logoButton() {
    return cy.get('[data-testid="header image"]');
  }

  checkout_deliveryInstructionsInputField() {
    return cy.get('[data-testid="delivery-instructions-input"]');
  }

  checkout_carModelInput() {
    return cy.get('[data-testid="car-model-input"]');
  }

  checkout_carMakeInput() {
    return cy.get('[data-testid="car-make-input"]');
  }

  checkout_carColorInput() {
    return cy.get('[data-testid="car-color-input"]');
  }

  checkout_firstNameInput() {
    return cy.get('[data-testid="first-name-input"]');
  }

  checkout_lastNameInput() {
    return cy.get('[data-testid="last-name-input"]');
  }

  checkout_emailInput() {
    return cy.get('[data-testid="email-input"]');
  }

  checkout_phoneNumberInput() {
    return cy.get('[data-testid="phone-input"]');
  }

  checkout_fifteenPercentTipButton() {
    return cy.get('[data-testid="tip-button-15%"]');
  }

  checkout_eighteenPercentTipButton() {
    return cy.get('[data-testid="tip-button-18%"]');
  }

  checkout_twentyPercentTipButton() {
    return cy.get('[data-testid="tip-button-20%"]');
  }

  checkout_twentyTwoPercentTipButton() {
    return cy.get('[data-testid="tip-button-22%"]');
  }

  checkout_customTipField() {
    return cy.get('[data-testid="custom-tip-input"]');
  }

  checkout_paymentDetailsSection() {
    return cy.get('[data-testid="order-payment-details"]');
  }

  checkout_subtotalValue() {
    return cy.get('[data-testid="subtotal-value"]');
  }

  checkout_taxValue() {
    return cy.get('[data-testid="tax-value"]');
  }

  checkout_tipValue() {
    return cy.get('[data-testid="tip-value"]');
  }

  checkout_totalValue() {
    return cy.get('[data-testid="total-value"]');
  }

  checkout_usePromoCodeButton() {
    return cy.get('[data-testid="expand-promo-code-button"]');
  }

  checkout_promoCodeInput() {
    return cy.get('[data-testid="promo-code-input"]');
  }

  checkout_promoCodeApplyButton() {
    return cy.contains("Apply");
  }

  checkout_promoCodeCancelButton() {
    return cy.contains("Cancel");
  }

  checkout_promoCodeRemoveButton() {
    return cy.get('[data-testid="remove-promo-code-button"]');
  }

  checkout_useGiftCardButton() {
    return cy.get('[data-testid="expand-gift-card-button"]');
  }

  checkout_giftCardNumberInput() {
    return cy.get('[data-testid="cardnumber-input"]');
  }

  checkout_giftCardPinInput() {
    return cy.get('[data-testid="pin-input"]');
  }

  checkout_giftCardApplyButton() {
    return cy.contains("Apply");
  }

  checkout_giftCardCancelButton() {
    return cy.contains("Cancel");
  }

  checkout_giftCardRemoveButton() {
    return cy.get('[data-testid="remove-gift-card-button"]');
  }

  checkout_orderTimes() {
    return cy.get('[data-testid="dropdown-label"]');
  }

  checkout_paymentMethodSelection() {
    return cy.get('[data-testid="card-number"]');
  }

  checkout_paymentMethodOption(method) {
    if (method === "credit") {
      return cy.get(
        '[data-testid="payment-option-0"] > [data-testid="payment-tile"]',
        { timeout: 10000 }
      );
    }
    if (method === "restaurant") {
      return cy.get(
        '[data-testid="payment-option-1"] > [data-testid="payment-tile"]',
        { timeout: 10000 }
      );
    }
    if (method === "saved card") {
      return cy.get(
        '[data-testid="payment-option-2"] > [data-testid="payment-tile"]',
        { timeout: 10000 }
      );
    }
    if (method === "delivery saved card") {
      return cy.get(
        '[data-testid="payment-option-1"] > [data-testid="payment-tile"]',
        { timeout: 10000 }
      );
    }
  }
  // TODO: See if this method can improve payment function
  // checkout_paymentMethodOption(method) {
  //     cy.wait(1000);
  //     const paymentOptions = {
  //       credit: '[data-testid="payment-option-0"] > [data-testid="payment-tile"]',
  //       restaurant: '[data-testid="payment-option-1"] > [data-testid="payment-tile"]',
  //       savedCard: '[data-testid="payment-option-2"] > [data-testid="payment-tile"]',
  //       delivered: '[data-testid="payment-option-1"] > [data-testid="payment-tile"]'
  //     };

  //     return cy.get(paymentOptions[method], { timeout: 10000 });
  //   }

  checkout_orderTimesOptionOne() {
    return cy.get("#order-time-option-0");
  }

  checkout_creditCardNumberInput() {
    return cy.get('[data-testid="card-number-input"]');
  }

  checkout_creditCardcvvInput() {
    return cy.get('[data-testid="cvc-input"]');
  }

  checkout_creditCardDateInput() {
    return cy.get('[data-testid="expiration-date-input"]');
  }

  checkout_creditCardZipCodeInput() {
    return cy.get('[data-testid="zip-input"]');
  }

  checkout_rewardZeroPoints() {
    return cy.get('[data-testid="zero-points-description"]');
  }

  checkout_rewardPoints() {
    return cy.get('[data-testid="points-description"]');
  }

  checkout_rewardCard() {
    return cy.get('[data-testid="dine-rewards-card"]');
  }

  checkout_checkoutButton() {
    return cy.get('[data-testid="checkout-button"]');
  }

  // Error messages
  checkout_alcoholErrorMessage() {
    return cy.contains(
      "Orders with alcohol must contain at least one food item"
    );
  }

  checkout_phoneNumberInputErrorMessage() {
    return cy.contains("Enter a phone number");
  }

  checkout_emailInputErrorMessage() {
    return cy.contains("Invalid e-mail");
  }

  checkout_fillUpCarInformation(model, make, color) {
    this.checkout_carModelInput().type(model);
    this.checkout_carMakeInput().type(make);
    this.checkout_carColorInput().type(color);
  }

  checkout_fillUpUserInformation(firstName, lastName, email, phoneNumber) {
    this.checkout_firstNameInput().type(firstName);
    this.checkout_lastNameInput().type(lastName);
    this.checkout_emailInput().type(email);
    this.checkout_phoneNumberInput().type(phoneNumber);
  }

  checkout_payWithCreditCards(number, cvv, expiration, zipCode) {
    this.checkout_paymentMethodSelection().click();
    cy.wait(2000);
    this.checkout_paymentMethodOption("credit").click();
    cy.wait(2000);
    this.checkout_creditCardNumberInput().type(number);
    cy.wait(2000);
    this.checkout_creditCardcvvInput().type(cvv);
    cy.wait(2000);
    this.checkout_creditCardDateInput().type(expiration);
    cy.wait(2000);
    this.checkout_creditCardZipCodeInput().type(zipCode);
    cy.wait(2000);
    this.checkout_checkoutButton().click();
    cy.wait(2000);
  }

  checkout_assertContactInfoFieldsValue() {
    this.checkout_firstNameInput().should("have.value", "automation");
    this.checkout_lastNameInput().should("have.value", "withrewards");
    this.checkout_emailInput().should(
      "have.value",
      "automationwithrewards@gmail.com"
    );
    this.checkout_phoneNumberInput().should("have.value", "(336) 513-2218");
  }

  checkout_assertContactInfoFieldsValueDelivery() {
    this.checkout_firstNameInput().should("have.value", "automation");
    this.checkout_lastNameInput().should("have.value", "withrewards");
    this.checkout_emailInput().should(
      "have.value",
      "automationwithrewardsrelivery@gmail.com"
    );
    this.checkout_phoneNumberInput().should("have.value", "(212) 566-5132");
  }

  checkout_selectPaymentSavedCard() {
    this.checkout_paymentMethodSelection().click();
    this.checkout_paymentMethodOption("saved card").click();
    this.checkout_checkoutButton().click();
  }

  checkout_selectPaymentSavedCardDelivery() {
    this.checkout_paymentMethodSelection().click();
    this.checkout_paymentMethodOption("restaurant").click();
    this.checkout_checkoutButton().click();
  }
}

export default CheckoutPage;
