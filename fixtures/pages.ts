import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';


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
  testState: TestState;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  testState: async ({}, use) => {
    await use({});
  },
});

export default test;
