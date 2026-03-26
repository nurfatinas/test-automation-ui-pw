import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboardPage';

test('Dashboard loads and title is correct', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await dashboard.goto();

  const title = await dashboard.getTitle();
  console.log('Page title:', title);
  await expect(page).toHaveTitle(/Sauce/i);

  await dashboard.captureScreenshot('dashboard_home');
  
});