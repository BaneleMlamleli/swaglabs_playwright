import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/pages';
import { VALID_USER } from '../fixtures/testData';

const { Given, When, Then } = createBdd(test);

Given('I am on the SauceDemo login page', async ({ loginPage }) => {
  await loginPage.goto();
});

When(
  'I login with username {string} and password {string}',
  async ({ loginPage }, username: string, password: string) => {
    await loginPage.login(username, password);
  },
);

Then('I should be logged in and see the products page', async ({ productsPage }) => {
  expect(await productsPage.isProductsPageDisplayed()).toBeTruthy();
});

Then('I should see the login error message {string}', async ({ loginPage }, expectedMessage: string) => {
  const message = await loginPage.getErrorMessage();
  expect(message).toContain(expectedMessage);
});

// Reusable Background step used by the sorting / checkout features.
Given('I am logged in as a standard user', async ({ loginPage, productsPage }) => {
  await loginPage.goto();
  await loginPage.login(VALID_USER.username, VALID_USER.password);
  expect(await productsPage.isProductsPageDisplayed()).toBeTruthy();
});
