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

    test("handaling the multiple tabs without clicking target attrubite",async({ browser })=>{
         
            
    })
})