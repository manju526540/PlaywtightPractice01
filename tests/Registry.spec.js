import { test,expect} from '@playwright/test';

test.describe('Registry', () => {       
    test('should display the registry page', async ({ page }) => {
        await page.goto('http://localhost:3000/registry');
        await expect(page.locator('h1')).toHaveText('Registry');
    });

    test('should display the registry form', async ({ page }) => {
        await page.goto('http://localhost:3000/registry');
        await expect(page.locator('form')).toBeVisible();
    });     
})