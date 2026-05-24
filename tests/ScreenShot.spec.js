import { test,expect} from "@playwright/test"

test("Handling the screenshot in playwright with ja",async({ page })=>{

    await page.goto('https://www.amazon.in/')
    await page.getByPlaceholder('Search Amazon.in').fill('book')
    await page.keyboard.press('Enter')
    //await page.waitForSelector("//h2[normalize-space()='Results']")
    await page.waitForEvent('load');
    await page.screenshot( { path : 'tests/screenshots/'+Date.now()+'amazon_screenshot.png', fullPage: true })
})

test("handling the Screenshots for the specific element in playwright with js",async({ page })=>{

    await page.goto('https://www.flipkart.com/')
    await page.locator('div[aria-label="Fashion"]').hover()
    await page.getByRole('link',{ name : "Men's T-Shirts"}).click()
    await page.waitForEvent('load');
    //await page.screenshot({ path : `tests/screenshots/flipkart_Tshirts${Date.now()}.png`,fullPage:true});
    const SpoylerElement = page.locator('[class="lI2T1h WPXNND dwCDzl"]')
    await SpoylerElement.screenshot({ path : 'tests/screenshots/'+Date.now()+'flipkart_tshirts_screenshot.png'})
})

