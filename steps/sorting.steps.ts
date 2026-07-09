import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/pages';
import { SortOption } from '../pages/ProductsPage';

const { When, Then } = createBdd(test);

const SORT_OPTION_MAP: Record<string, SortOption> = {
  'Name (A to Z)': 'az',
  'Name (Z to A)': 'za',
  'Price (low to high)': 'lohi',
  'Price (high to low)': 'hihi',
};

When('I sort products by {string}', async ({ productsPage }, sortOptionLabel: string) => {
  const value = SORT_OPTION_MAP[sortOptionLabel];
  if (!value) {
    throw new Error(`Unknown sort option: "${sortOptionLabel}"`);
  }
  await productsPage.sortBy(value);
});

Then(
  'the products should be correctly sorted by {string}',
  async ({ productsPage }, sortOptionLabel: string) => {
    if (sortOptionLabel.startsWith('Name')) {
      const names = await productsPage.getProductNames();
      const expectedOrder = [...names].sort((a, b) =>
        sortOptionLabel === 'Name (A to Z)' ? a.localeCompare(b) : b.localeCompare(a),
      );
      expect(names).toEqual(expectedOrder);
    } else {
      const prices = await productsPage.getProductPrices();
      const expectedOrder = [...prices].sort((a, b) =>
        sortOptionLabel === 'Price (low to high)' ? a - b : b - a,
      );
      expect(prices).toEqual(expectedOrder);
    }
  },
);
