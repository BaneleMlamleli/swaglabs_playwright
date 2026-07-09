// Generated from: features/login.feature
import { default as test } from "../../fixtures/pages.ts";

test.describe('Login', () => {

  test.beforeEach('Background', async ({ Given, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the SauceDemo login page', null, { loginPage }); 
  });
  
  test('Successful login with a valid user', { tag: ['@login', '@smoke'] }, async ({ When, Then, loginPage, productsPage }) => { 
    await When('I login with username "standard_user" and password "secret_sauce"', null, { loginPage }); 
    await Then('I should be logged in and see the products page', null, { productsPage }); 
  });

  test.describe('Failed login with invalid credentials', () => {

    test('Example #1', { tag: ['@login', '@negative'] }, async ({ When, Then, loginPage }) => { 
      await When('I login with username "locked_out_user" and password "secret_sauce"', null, { loginPage }); 
      await Then('I should see the login error message "Epic sadface: Sorry, this user has been locked out."', null, { loginPage }); 
    });

    test('Example #2', { tag: ['@login', '@negative'] }, async ({ When, Then, loginPage }) => { 
      await When('I login with username "invalid_user" and password "secret_sauce"', null, { loginPage }); 
      await Then('I should see the login error message "Epic sadface: Username and password do not match any user in this service"', null, { loginPage }); 
    });

    test('Example #3', { tag: ['@login', '@negative'] }, async ({ When, Then, loginPage }) => { 
      await When('I login with username "standard_user" and password "wrong_password"', null, { loginPage }); 
      await Then('I should see the login error message "Epic sadface: Username and password do not match any user in this service"', null, { loginPage }); 
    });

    test('Example #4', { tag: ['@login', '@negative'] }, async ({ When, Then, loginPage }) => { 
      await When('I login with username "" and password "secret_sauce"', null, { loginPage }); 
      await Then('I should see the login error message "Epic sadface: Username is required"', null, { loginPage }); 
    });

    test('Example #5', { tag: ['@login', '@negative'] }, async ({ When, Then, loginPage }) => { 
      await When('I login with username "standard_user" and password ""', null, { loginPage }); 
      await Then('I should see the login error message "Epic sadface: Password is required"', null, { loginPage }); 
    });

    test('Example #6', { tag: ['@login', '@negative'] }, async ({ When, Then, loginPage }) => { 
      await When('I login with username "" and password ""', null, { loginPage }); 
      await Then('I should see the login error message "Epic sadface: Username is required"', null, { loginPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":11,"tags":["@login","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I login with username \"standard_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in and see the products page","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":22,"tags":["@login","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I login with username \"locked_out_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":22,"value":"\"locked_out_user\"","children":[{"start":23,"value":"locked_out_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"secret_sauce\"","children":[{"start":54,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see the login error message \"Epic sadface: Sorry, this user has been locked out.\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Epic sadface: Sorry, this user has been locked out.\"","children":[{"start":38,"value":"Epic sadface: Sorry, this user has been locked out.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":23,"tags":["@login","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I login with username \"invalid_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":22,"value":"\"invalid_user\"","children":[{"start":23,"value":"invalid_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"secret_sauce\"","children":[{"start":51,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see the login error message \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":38,"value":"Epic sadface: Username and password do not match any user in this service","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":24,"tags":["@login","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I login with username \"standard_user\" and password \"wrong_password\"","stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"wrong_password\"","children":[{"start":52,"value":"wrong_password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see the login error message \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":38,"value":"Epic sadface: Username and password do not match any user in this service","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":25,"tags":["@login","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I login with username \"\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":22,"value":"\"\"","children":[{"start":23,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"secret_sauce\"","children":[{"start":39,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see the login error message \"Epic sadface: Username is required\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Epic sadface: Username is required\"","children":[{"start":38,"value":"Epic sadface: Username is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":26,"tags":["@login","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I login with username \"standard_user\" and password \"\"","stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"\"","children":[{"start":52,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see the login error message \"Epic sadface: Password is required\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Epic sadface: Password is required\"","children":[{"start":38,"value":"Epic sadface: Password is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":27,"tags":["@login","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I login with username \"\" and password \"\"","stepMatchArguments":[{"group":{"start":22,"value":"\"\"","children":[{"start":23,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"\"","children":[{"start":39,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see the login error message \"Epic sadface: Username is required\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Epic sadface: Username is required\"","children":[{"start":38,"value":"Epic sadface: Username is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end