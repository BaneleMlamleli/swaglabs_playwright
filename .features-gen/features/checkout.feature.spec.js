// Generated from: features/checkout.feature
import { default as test } from "../../fixtures/pages.ts";

test.describe('End-to-End Checkout Journey', () => {

  test.beforeEach('Background', async ({ Given, loginPage, productsPage }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in as a standard user', null, { loginPage, productsPage }); 
  });
  
  test('Add all products to the cart and complete checkout successfully', { tag: ['@checkout', '@smoke', '@cart'] }, async ({ When, Then, And, cartPage, checkoutCompletePage, checkoutStepOnePage, checkoutStepTwoPage, loginPage, productsPage, testState }) => { 
    await When('I add all products to the cart', null, { productsPage }); 
    await Then('the cart badge should show "6" items', null, { productsPage }); 
    await When('I go to the cart page', null, { productsPage }); 
    await Then('the cart should contain "6" items', null, { cartPage }); 
    await And('I note the cart items total for later comparison', null, { cartPage, testState }); 
    await When('I proceed to checkout', null, { cartPage }); 
    await And('I fill in the checkout information with first name "John", last name "Doe" and postal code "12345"', null, { checkoutStepOnePage }); 
    await And('I continue to the checkout overview', null, { checkoutStepOnePage }); 
    await Then('the item total displayed should match the calculated cart total', null, { checkoutStepTwoPage, testState }); 
    await And('the tax should be displayed on the overview page', null, { checkoutStepTwoPage }); 
    await When('I finish the checkout', null, { checkoutStepTwoPage }); 
    await Then('the checkout should complete successfully', null, { checkoutCompletePage }); 
    await And('the success title should be "Thank you for your order!"', null, { checkoutCompletePage }); 
    await And('the success message should be "Your order has been dispatched, and will arrive just as fast as the shipping method you so chose!"', null, { checkoutCompletePage }); 
    await And('the cart badge should not display a number', null, { productsPage }); 
    await When('I open the burger menu', null, { productsPage }); 
    await And('I navigate to All Items', null, { productsPage }); 
    await Then('the products page should be displayed', null, { productsPage }); 
    await And('the cart should be empty', null, { productsPage }); 
    await When('I logout', null, { productsPage }); 
    await Then('the login page should be displayed', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":11,"tags":["@checkout","@smoke","@cart"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am logged in as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I add all products to the cart","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show \"6\" items","stepMatchArguments":[{"group":{"start":27,"value":"\"6\"","children":[{"start":28,"value":"6","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I go to the cart page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the cart should contain \"6\" items","stepMatchArguments":[{"group":{"start":24,"value":"\"6\"","children":[{"start":25,"value":"6","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And I note the cart items total for later comparison","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And I fill in the checkout information with first name \"John\", last name \"Doe\" and postal code \"12345\"","stepMatchArguments":[{"group":{"start":51,"value":"\"John\"","children":[{"start":52,"value":"John","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":69,"value":"\"Doe\"","children":[{"start":70,"value":"Doe","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":91,"value":"\"12345\"","children":[{"start":92,"value":"12345","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And I continue to the checkout overview","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the item total displayed should match the calculated cart total","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And the tax should be displayed on the overview page","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When I finish the checkout","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then the checkout should complete successfully","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"And the success title should be \"Thank you for your order!\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Thank you for your order!\"","children":[{"start":29,"value":"Thank you for your order!","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And the success message should be \"Your order has been dispatched, and will arrive just as fast as the shipping method you so chose!\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Your order has been dispatched, and will arrive just as fast as the shipping method you so chose!\"","children":[{"start":31,"value":"Your order has been dispatched, and will arrive just as fast as the shipping method you so chose!","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"And the cart badge should not display a number","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When I open the burger menu","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And I navigate to All Items","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then the products page should be displayed","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And the cart should be empty","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When I logout","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then the login page should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end