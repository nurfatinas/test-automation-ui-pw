import { Page } from '@playwright/test';
import { config } from '../config/config';
import { takeScreenshot } from '../utils/helpers';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(config.baseURL);
  }

  async getTitle() {
    return this.page.title();
  }

  async captureScreenshot(name: string) {
    await takeScreenshot(this.page, name);
  }

}