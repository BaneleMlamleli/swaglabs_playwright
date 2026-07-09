import { Page, Locator } from '@playwright/test';

export class CheckoutCompletePage {
  readonly page: Page;
  readonly completeHeader: Locator;
  readonly completeText: Locator;
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completeHeader = page.locator('.complete-header');
    this.completeText = page.locator('.complete-text');
    this.backHomeButton = page.locator('#back-to-products');
  }

  async getSuccessTitle(): Promise<string> {
    return (await this.completeHeader.textContent())?.trim() ?? '';
  }

  async getSuccessMessage(): Promise<string> {
    return (await this.completeText.textContent())?.trim() ?? '';
  }
}
