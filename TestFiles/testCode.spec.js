import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://3.82.9.161:3000/');
  await page.getByText('Other Tab', { exact: true }).click();
  await expect(page.getByText('Other Tab Content')).toBeVisible();
  await page.getByText('Budget', { exact: true }).click();
  await expect(page.getByText('Budget', { exact: true })).toBeVisible();
  await expect(page.getByText('Budget Name')).toBeVisible();
  await expect(page.getByText('Amount')).toBeVisible();
  await expect(page.getByText('Reason')).toBeVisible();

});
