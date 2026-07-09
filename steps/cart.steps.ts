import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/pages';

const { Given, When, Then } = createBdd(test);

When('I add all products to the cart', async ({ productsPage }) => {
  await productsPage.addAllProductsToCart();
});

Given('I have added a product to the cart', async ({ productsPage }) => {
  await productsPage.addToCartButtons.first().click();
});

Then('the cart badge should show {string} items', async ({ productsPage }, count: string) => {
  expect(await productsPage.getCartCount()).toBe(parseInt(count, 10));
});

// Registered once as When: Cucumber matches steps by text/pattern only, so
// the same text is reused whether the feature file writes "When", "And",
// or "Given" in front of it - registering it twice would be ambiguous.
When('I go to the cart page', async ({ productsPage }) => {
  await productsPage.goToCart();
});

Then('the cart should contain {string} items', async ({ cartPage }, count: string) => {
  expect(await cartPage.getItemCount()).toBe(parseInt(count, 10));
});

Then('I note the cart items total for later comparison', async ({ cartPage, testState }) => {
  testState.cartItemsTotal = await cartPage.getCartItemsTotal();
});

When('I proceed to checkout', async ({ cartPage }) => {
  await cartPage.checkout();
});

Then('the cart should be empty', async ({ productsPage }) => {
  expect(await productsPage.getCartCount()).toBe(0);
});
