@checkout @negative
Feature: Checkout Information - Negative Validation
  As a logged-in customer
  I want the checkout form to validate required fields
  So that I cannot proceed with incomplete information

  Background:
    Given I am logged in as a standard user
    And I have added a product to the cart
    And I go to the cart page
    And I proceed to checkout

  Scenario Outline: Checkout is blocked when a required field is missing
    When I fill in the checkout information with first name "<firstName>", last name "<lastName>" and postal code "<postalCode>"
    And I click continue on the checkout information page
    Then I should see the checkout error message "<errorMessage>"

    Examples:
      | firstName | lastName | postalCode | errorMessage                   |
      |           | Doe      | 12345      | Error: First Name is required  |
      | John      |          | 12345      | Error: Last Name is required   |
      | John      | Doe      |            | Error: Postal Code is required |
      |           |          |            | Error: First Name is required  |
