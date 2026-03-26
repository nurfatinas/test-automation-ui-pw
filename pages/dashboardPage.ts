import { Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://sauce-demo.myshopify.com/');
  }

  async getTitle() {
    return this.page.title();
  }
}