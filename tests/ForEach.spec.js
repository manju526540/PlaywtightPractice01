import { test, expect } from '@playwright/test';

test('Click multiple product titles using forEach', async ({ page }) => {

  await page.goto('https://www.amazon.in/');
  await page.locator('#twotabsearchtextbox').fill('laptop');
  await page.locator('#nav-search-submit-button').click();

  // Get all product titles
  const products = await page.locator('h2 a').all();

  // Click first 5 products
  products.slice(0, 5).forEach(async (product) => {
    const title = await product.textContent();
    console.log(title);
    await product.click();
  });

});