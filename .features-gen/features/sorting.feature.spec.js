// Generated from: features/sorting.feature
import { default as test } from "../../fixtures/pages.ts";

test.describe('Product Sorting', () => {

  test.beforeEach('Background', async ({ Given, loginPage, productsPage }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in as a standard user', null, { loginPage, productsPage }); 
  });
  
  test.describe('Sort products using each available sort option', () => {

    test('Example #1', { tag: ['@sorting'] }, async ({ When, Then, productsPage }) => { 
      await When('I sort products by "Name (A to Z)"', null, { productsPage }); 
      await Then('the products should be correctly sorted by "Name (A to Z)"', null, { productsPage }); 
    });

    test('Example #2', { tag: ['@sorting'] }, async ({ When, Then, productsPage }) => { 
      await When('I sort products by "Name (Z to A)"', null, { productsPage }); 
      await Then('the products should be correctly sorted by "Name (Z to A)"', null, { productsPage }); 
    });

    test('Example #3', { tag: ['@sorting'] }, async ({ When, Then, productsPage }) => { 
      await When('I sort products by "Price (low to high)"', null, { productsPage }); 
      await Then('the products should be correctly sorted by "Price (low to high)"', null, { productsPage }); 
    });

    test('Example #4', { tag: ['@sorting'] }, async ({ When, Then, productsPage }) => { 
      await When('I sort products by "Price (high to low)"', null, { productsPage }); 
      await Then('the products should be correctly sorted by "Price (high to low)"', null, { productsPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/sorting.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":16,"tags":["@sorting"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am logged in as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I sort products by \"Name (A to Z)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Name (A to Z)\"","children":[{"start":20,"value":"Name (A to Z)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the products should be correctly sorted by \"Name (A to Z)\"","stepMatchArguments":[{"group":{"start":43,"value":"\"Name (A to Z)\"","children":[{"start":44,"value":"Name (A to Z)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":17,"tags":["@sorting"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am logged in as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I sort products by \"Name (Z to A)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Name (Z to A)\"","children":[{"start":20,"value":"Name (Z to A)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the products should be correctly sorted by \"Name (Z to A)\"","stepMatchArguments":[{"group":{"start":43,"value":"\"Name (Z to A)\"","children":[{"start":44,"value":"Name (Z to A)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":18,"tags":["@sorting"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am logged in as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I sort products by \"Price (low to high)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Price (low to high)\"","children":[{"start":20,"value":"Price (low to high)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the products should be correctly sorted by \"Price (low to high)\"","stepMatchArguments":[{"group":{"start":43,"value":"\"Price (low to high)\"","children":[{"start":44,"value":"Price (low to high)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":19,"tags":["@sorting"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am logged in as a standard user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I sort products by \"Price (high to low)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Price (high to low)\"","children":[{"start":20,"value":"Price (high to low)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the products should be correctly sorted by \"Price (high to low)\"","stepMatchArguments":[{"group":{"start":43,"value":"\"Price (high to low)\"","children":[{"start":44,"value":"Price (high to low)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end