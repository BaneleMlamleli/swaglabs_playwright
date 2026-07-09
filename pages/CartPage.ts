import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly itemPrices: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly removeButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.itemPrices = page.locator('.inventory_item_price');
    this.checkoutButton = page.locator('#checkout');
    this.continueShoppingButton = page.locator('#continue-shopping');
    this.removeButtons = page.locator('button[data-test^="remove"]');
  }

  async getItemCount(): Promise<number> {
    return this.cartItems.count();
  }

  async getCartItemsTotal(): Promise<number> {
    const texts = await this.itemPrices.allTextContents();
    return texts.reduce((sum, t) => sum + parseFloat(t.replace('$', '').trim()), 0);
  }

  async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
