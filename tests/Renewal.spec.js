const {test, expect} = require('@playwright/test');

test.describe('DBS practice test cases',()=>{

    test('Practice For Canditional test cases',async({page})=>{
         
        await page.goto('https://the-internet.herokuapp.com/disappearing_elements')

        const PortFolioLink = page.getByRole('link', { name : 'Portfolio'})
        const cantactus     = page.getByRole('link',{ name : 'Contact Us'})
        const HomeLink      = page.getByRole('link', { name : 'Home'})
        const AboutLink     = page.getByRole('link', { name : 'About'})
        const GalleryLink   = page.getByRole('link', { name : 'Gallery'})

        if(await PortFolioLink.isVisible()){
            await PortFolioLink.click()
            console.log('Portfolio link is visible and clicked')
        }  else if (await GalleryLink.isVisible()) {
            await GalleryLink.click()
            console.log('Gallery link is visible and clicked')
      }   
      else {
        console.log('Neither Portfolio nor Gallery link is visible')
      }
      //await page.screenshot({ path: 'tests/screenshots/'+Date.now()+'conditional_test_case.png' })
    })

    test('handling on screenshot in playwright', async ({ page}) => {

        await page.goto('https://www.demoblaze.com/')
        await page.waitForTimeout(3000)
        //await page.screenshot( { path : 'tests/screenshots/'+Date.now()+'demoblaze_screenshot.png', fullPage: true })
        const ScrollowingView = page.locator('//div[@id="carouselExampleIndicators"]')
        await ScrollowingView.screenshot({ path:'tests/screenshots/'+Date.now()+'demoblaze_screenshot.png',fullPage: true})
    })

    test.only("Handling the Sauce demo application in playwright with js",async({ page })=>{
         
         await page.goto('https://www.amazon.in/')
         await page.locator("//a[text()='Mobiles']").click()
         const favoriteSmartPhone = page.getByAltText('1')
         await expect(favoriteSmartPhone).toBeVisible()

            
    })

    
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
})