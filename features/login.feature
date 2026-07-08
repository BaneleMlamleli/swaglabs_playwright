@login
Feature: Login
  As a SauceDemo customer
  I want to log in to my account
  So that I can browse and purchase products

  Background:
    Given I am on the SauceDemo login page

  @smoke
  Scenario: Successful login with a valid user
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be logged in and see the products page

  @negative
  Scenario Outline: Failed login with invalid credentials
    When I login with username "<username>" and password "<password>"
    Then I should see the login error message "<errorMessage>"

    Examples:
      | username         | password       | errorMessage                                                          |
      | locked_out_user  | secret_sauce   | Epic sadface: Sorry, this user has been locked out.                  |
      | invalid_user     | secret_sauce   | Epic sadface: Username and password do not match any user in this service |
      | standard_user    | wrong_password | Epic sadface: Username and password do not match any user in this service |
      |                  | secret_sauce   | Epic sadface: Username is required                                   |
      | standard_user    |                | Epic sadface: Password is required                                   |
      |                  |                | Epic sadface: Username is required                                   |
