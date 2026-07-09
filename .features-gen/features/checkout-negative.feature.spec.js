// Generated from: features/checkout-negative.feature
import { default as test } from "../../fixtures/pages.ts";

test.describe('Checkout Information - Negative Validation', () => {

  test.beforeEach('Background', async ({ Given, And, cartPage, loginPage, productsPage }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in as a standard user', null, { loginPage, productsPage }); 
    await And('I have added a product to the cart', null, { productsPage }); 
    await And('I go to the cart page', null, { productsPage }); 
    await And('I proceed to checkout', null, { cartPage }); 
  });
  
  test.describe('Checkout is blocked when a required field is missing', () => {

    test('Example #1', { tag: ['@checkout', '@negative'] }, async ({ When, Then, And, checkoutStepOnePage }) => { 
      await When('I fill in the checkout information with first name "", last name "Doe" and postal code "12345"', null, { checkoutStepOnePage }); 
      await And('I click continue on the checkout information page', null, { checkoutStepOnePage }); 
      await Then('I should see the checkout error message "Error: First Name is required"', null, { checkoutStepOnePage }); 
    });

    test('Example #2', { tag: ['@checkout', '@negative'] }, async ({ When, Then, And, checkoutStepOnePage }) => { 
      await When('I fill in the checkout information with first name "John", last name "" and postal code "12345"', null, { checkoutStepOnePage }); 
      await And('I click continue on the checkout information page', null, { checkoutStepOnePage }); 
      await Then('I should see the checkout error message "Error: Last Name is required"', null, { checkoutStepOnePage }); 
    });

    test('Example #3', { tag: ['@checkout', '@negative'] }, async ({ When, Then, And, checkoutStepOnePage }) => { 
      await When('I fill in the checkout information with first name "John", last name "Doe" and postal code ""', null, { checkoutStepOnePage }); 
      await And('I click continue on the checkout information page', null, { checkoutStepOnePage }); 
      await Then('I should see the checkout error message "Error: Postal Code is required"', null, { checkoutStepOnePage }); 
    });

    test('Example #4', { tag: ['@checkout', '@negative'] }, async ({ When, Then, And, checkoutStepOnePage }) => { 
      await When('I fill in the checkout information with first name "", last name "" and postal code ""', null, { checkoutStepOnePage }); 
      await And('I click continue on the checkout information page', null, { checkoutStepOnePage }); 
      await Then('I should see the checkout error message "Error: First Name is required"', null, { checkoutStepOnePage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/checkout-negative.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":15,"pickleLine":20,"tags":["@checkout","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am logged in as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And I have added a product to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I go to the cart page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And I proceed to checkout","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I fill in the checkout information with first name \"\", last name \"Doe\" and postal code \"12345\"","stepMatchArguments":[{"group":{"start":51,"value":"\"\"","children":[{"start":52,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":65,"value":"\"Doe\"","children":[{"start":66,"value":"Doe","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":87,"value":"\"12345\"","children":[{"start":88,"value":"12345","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click continue on the checkout information page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see the checkout error message \"Error: First Name is required\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Error: First Name is required\"","children":[{"start":41,"value":"Error: First Name is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":21,"tags":["@checkout","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am logged in as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And I have added a product to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I go to the cart page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And I proceed to checkout","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I fill in the checkout information with first name \"John\", last name \"\" and postal code \"12345\"","stepMatchArguments":[{"group":{"start":51,"value":"\"John\"","children":[{"start":52,"value":"John","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":69,"value":"\"\"","children":[{"start":70,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":88,"value":"\"12345\"","children":[{"start":89,"value":"12345","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click continue on the checkout information page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see the checkout error message \"Error: Last Name is required\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Error: Last Name is required\"","children":[{"start":41,"value":"Error: Last Name is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":22,"tags":["@checkout","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am logged in as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And I have added a product to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I go to the cart page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And I proceed to checkout","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I fill in the checkout information with first name \"John\", last name \"Doe\" and postal code \"\"","stepMatchArguments":[{"group":{"start":51,"value":"\"John\"","children":[{"start":52,"value":"John","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":69,"value":"\"Doe\"","children":[{"start":70,"value":"Doe","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":91,"value":"\"\"","children":[{"start":92,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click continue on the checkout information page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see the checkout error message \"Error: Postal Code is required\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Error: Postal Code is required\"","children":[{"start":41,"value":"Error: Postal Code is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":23,"tags":["@checkout","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am logged in as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And I have added a product to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I go to the cart page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And I proceed to checkout","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I fill in the checkout information with first name \"\", last name \"\" and postal code \"\"","stepMatchArguments":[{"group":{"start":51,"value":"\"\"","children":[{"start":52,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":65,"value":"\"\"","children":[{"start":66,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":84,"value":"\"\"","children":[{"start":85,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click continue on the checkout information page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see the checkout error message \"Error: First Name is required\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Error: First Name is required\"","children":[{"start":41,"value":"Error: First Name is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end