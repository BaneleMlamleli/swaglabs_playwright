import { Page, Locator } from '@playwright/test';

export class CheckoutStepTwoPage {
  readonly page: Page;
  readonly itemPrices: Locator;
  readonly subtotalLabel: Locator;
  readonly taxLabel: Locator;
  readonly totalLabel: Locator;
  readonly finishButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemPrices = page.locator('.inventory_item_price');
    this.subtotalLabel = page.locator('.summary_subtotal_label');
    this.taxLabel = page.locator('.summary_tax_label');
    this.totalLabel = page.locator('.summary_total_label');
    this.finishButton = page.locator('#finish');
    this.cancelButton = page.locator('#cancel');
  }

  async getItemsTotal(): Promise<number> {
    const texts = await this.itemPrices.allTextContents();
    return texts.reduce((sum, t) => sum + parseFloat(t.replace('$', '').trim()), 0);
  }

  async getSubtotal(): Promise<number> {
    const text = await this.subtotalLabel.textContent();
    return parseFloat((text ?? '').replace('Item total: $', '').trim());
  }

  async getTax(): Promise<number> {
    const text = await this.taxLabel.textContent();
    return parseFloat((text ?? '').replace('Tax: $', '').trim());
  }

  async getTotal(): Promise<number> {
    const text = await this.totalLabel.textContent();
    return parseFloat((text ?? '').replace('Total: $', '').trim());
  }

  async isTaxDisplayed(): Promise<boolean> {
    return this.taxLabel.isVisible();
  }

  async finish(): Promise<void> {
    await this.finishButton.click();
  }
}
