@sorting
Feature: Product Sorting
  As a logged-in customer
  I want to sort the product catalog
  So that I can find products by name or price

  Background:
    Given I am logged in as a standard user

  Scenario Outline: Sort products using each available sort option
    When I sort products by "<sortOption>"
    Then the products should be correctly sorted by "<sortOption>"

    Examples:
      | sortOption           |
      | Name (A to Z)        |
      | Name (Z to A)        |
      | Price (low to high)  |
      | Price (high to low)  |
