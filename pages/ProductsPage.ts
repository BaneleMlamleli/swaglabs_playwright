import { Page, Locator } from '@playwright/test';

export type SortOption = 'az' | 'za' | 'lohi' | 'hihi';

export class ProductsPage {
  readonly page: Page;
  readonly sortDropdown: Locator;
  readonly inventoryItems: Locator;
  readonly itemNames: Locator;
  readonly itemPrices: Locator;
  readonly addToCartButtons: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;
  readonly burgerMenuButton: Locator;
  readonly allItemsLink: Locator;
  readonly logoutLink: Locator;
  readonly pageTitle: Locator;
  readonly bmMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.inventoryItems = page.locator('.inventory_item');
    this.itemNames = page.locator('.inventory_item_name');
    this.itemPrices = page.locator('.inventory_item_price');
    this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.burgerMenuButton = page.locator('#react-burger-menu-btn');
    this.allItemsLink = page.locator('#inventory_sidebar_link');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.pageTitle = page.locator('.title');
    this.bmMenu = page.locator('.bm-menu-wrap');
  }

  async sortBy(option: SortOption): Promise<void> {
    await this.sortDropdown.selectOption(option);
  }

  async getProductNames(): Promise<string[]> {
    return this.itemNames.allTextContents();
  }

  async getProductPrices(): Promise<number[]> {
    const texts = await this.itemPrices.allTextContents();
    return texts.map((t) => parseFloat(t.replace('$', '').trim()));
  }

  async getItemCount(): Promise<number> {
    return this.inventoryItems.count();
  }

  async addAllProductsToCart(): Promise<void> {
    const count = await this.addToCartButtons.count();
    // After each click the button re-renders as "Remove", so we always
    // click the first remaining "Add to cart" button.
    for (let i = 0; i < count; i++) {
      await this.addToCartButtons.first().click();
    }
  }

  async getCartCount(): Promise<number> {
    if ((await this.cartBadge.count()) === 0) return 0;
    const text = await this.cartBadge.textContent();
    return text ? parseInt(text, 10) : 0;
  }

  async isCartBadgeHidden(): Promise<boolean> {
    return (await this.cartBadge.count()) === 0;
  }

  async goToCart(): Promise<void> {
    await this.cartLink.click();
  }

  async openBurgerMenu(): Promise<void> {
    await this.burgerMenuButton.click();
    await this.bmMenu.waitFor({ state: 'visible' });
  }

  async goToAllItems(): Promise<void> {
    await this.allItemsLink.click();
  }

  async logout(): Promise<void> {
    await this.logoutLink.click();
  }

  async isProductsPageDisplayed(): Promise<boolean> {
    await this.pageTitle.waitFor({ state: 'visible' });
    const title = await this.pageTitle.textContent();
    return title?.trim() === 'Products';
  }
}
