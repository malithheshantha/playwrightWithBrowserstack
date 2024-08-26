import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
  await expect(page.locator('[data-test="product-sort-container"]')).toContainText('Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)');
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});