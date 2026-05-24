import { test,expect} from "@playwright/test"

test("Handling the keyBoard Actions In Playwrigh with js",async({ page })=>{

     await page.goto('https://www.amazon.in/')
     await page.getByPlaceholder('Search Amazon.in').focus();
     await page.keyboard.type('laptap');
     await page.keyboard.press('Enter');
     await page.waitForTimeout(10000)
     await page.getByPlaceholder('Search Amazon.in').clear();
     await page.getByPlaceholder('Search Amazon.in').focus();
     await page.keyboard.type('iphone');
     await page.keyboard.press('Enter')
})

test('handling the keyboard action for tutorial point in playwright with js',async({ page })=>{

     await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php')
     await page.getByPlaceholder('First Name').focus();
     await page.keyboard.type('manjunatha')
     await page.keyboard.press('Control+A')
     await page.keyboard.press('Control+C')
     await page.getByPlaceholder('name@example.com').focus();
     await page.keyboard.press('Control+V')
     await page.locator('#gender').check();
     await page.getByPlaceholder('Enter Mobile Number').focus();
     await page.keyboard.type('9876543210')
     await page.waitForTimeout(5000)

})