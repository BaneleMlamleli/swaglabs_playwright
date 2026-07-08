@checkout
Feature: End-to-End Checkout Journey
  As a logged-in customer
  I want to add every product to my cart and complete checkout
  So that I can successfully purchase items

  Background:
    Given I am logged in as a standard user

  @smoke @cart
  Scenario: Add all products to the cart and complete checkout successfully
    # --- Add all products and validate cart count ---
    When I add all products to the cart
    Then the cart badge should show "6" items
    When I go to the cart page
    Then the cart should contain "6" items
    And I note the cart items total for later comparison

    # --- Checkout information ---
    When I proceed to checkout
    And I fill in the checkout information with first name "John", last name "Doe" and postal code "12345"
    And I continue to the checkout overview

    # --- Validate totals and tax ---
    Then the item total displayed should match the calculated cart total
    And the tax should be displayed on the overview page

    # --- Complete the order ---
    When I finish the checkout
    Then the checkout should complete successfully
    And the success title should be "Thank you for your order!"
    And the success message should be "Your order has been dispatched, and will arrive just as fast as the shipping method you so chose!"
    And the cart badge should not display a number

    # --- Post-purchase navigation checks ---
    When I open the burger menu
    And I navigate to All Items
    Then the products page should be displayed
    And the cart should be empty

    # --- Logout ---
    When I logout
    Then the login page should be displayed
