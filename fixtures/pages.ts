import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

/**
 * Scratch space shared between step definitions within a single scenario
 * (e.g. remembering the cart total captured on the Cart page so it can be
 * compared against the total shown on the Checkout Overview page).
 */
export type TestState = {
  cartItemsTotal?: number;
};

type Fixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  // checkoutStepOnePage: CheckoutStepOnePage;

  testState: TestState;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  testState: async ({}, use) => {
    await use({});
  },
});

export default test;
