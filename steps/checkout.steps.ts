import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/pages';
import { EXPECTED_MESSAGES } from '../fixtures/testData';

const { When, Then } = createBdd(test);

When(
  'I fill in the checkout information with first name {string}, last name {string} and postal code {string}',
  async ({ checkoutStepOnePage }, firstName: string, lastName: string, postalCode: string) => {
    await checkoutStepOnePage.fillCheckoutInfo(firstName, lastName, postalCode);
  },
);

When('I continue to the checkout overview', async ({ checkoutStepOnePage }) => {
  await checkoutStepOnePage.clickContinue();
});

When('I click continue on the checkout information page', async ({ checkoutStepOnePage }) => {
  await checkoutStepOnePage.clickContinue();
});

Then('I should see the checkout error message {string}', async ({ checkoutStepOnePage }, expectedMessage: string) => {
  const message = await checkoutStepOnePage.getErrorMessage();
  expect(message).toContain(expectedMessage);
});

Then(
  'the item total displayed should match the calculated cart total',
  async ({ checkoutStepTwoPage, testState }) => {
    const displayedSubtotal = await checkoutStepTwoPage.getSubtotal();
    const calculatedTotal = testState.cartItemsTotal ?? (await checkoutStepTwoPage.getItemsTotal());
    // toBeCloseTo guards against floating point rounding differences.
    expect(displayedSubtotal).toBeCloseTo(calculatedTotal, 2);
  },
);

Then('the tax should be displayed on the overview page', async ({ checkoutStepTwoPage }) => {
  expect(await checkoutStepTwoPage.isTaxDisplayed()).toBeTruthy();
  const tax = await checkoutStepTwoPage.getTax();
  expect(tax).toBeGreaterThanOrEqual(0);
});

When('I finish the checkout', async ({ checkoutStepTwoPage }) => {
  await checkoutStepTwoPage.finish();
});

Then('the checkout should complete successfully', async ({ checkoutCompletePage }) => {
  await expect(checkoutCompletePage.completeHeader).toBeVisible();
});

Then('the success title should be {string}', async ({ checkoutCompletePage }, expectedTitle: string) => {
  const title = await checkoutCompletePage.getSuccessTitle();
  expect(title).toBe(expectedTitle);
  expect(title).toBe(EXPECTED_MESSAGES.successTitle);
});

Then('the success message should be {string}', async ({ checkoutCompletePage }, expectedMessage: string) => {
  const message = await checkoutCompletePage.getSuccessMessage();
  expect(message).toBe(expectedMessage);
  expect(message).toBe(EXPECTED_MESSAGES.successMessage);
});

Then('the cart badge should not display a number', async ({ productsPage }) => {
  expect(await productsPage.isCartBadgeHidden()).toBeTruthy();
});

When('I open the burger menu', async ({ productsPage }) => {
  await productsPage.openBurgerMenu();
});

When('I navigate to All Items', async ({ productsPage }) => {
  await productsPage.goToAllItems();
});

Then('the products page should be displayed', async ({ productsPage }) => {
  expect(await productsPage.isProductsPageDisplayed()).toBeTruthy();
});

When('I logout', async ({ productsPage }) => {
  await productsPage.logout();
});

Then('the login page should be displayed', async ({ loginPage }) => {
  expect(await loginPage.isLoginPageDisplayed()).toBeTruthy();
});
