import { Page } from '@playwright/test';
import { config } from '../config/config';
import fs from 'fs';
import path from 'path';

export async function takeScreenshot(page: Page, filename: string) {
  const fullPath = path.join(config.screenshotPath, `${filename}.png`);
  // make folder if it doesn't exist
  fs.mkdirSync(config.screenshotPath, { recursive: true });
  await page.screenshot({ path: fullPath });
}