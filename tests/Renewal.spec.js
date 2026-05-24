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

    test('this is the first test case',async({page})=>{
 
    const loginfunctionality = new LoginFunctionality(page)
    const addemployees      = new Addemployees(page)
    const utilits =   new Utilits(page)
    await loginfunctionality.LunchUrl()
    await loginfunctionality.usernameField(process.env.USER_NAME)
    await loginfunctionality.passwordField(process.env.PASS_WORD)
    await loginfunctionality.submitButton()
    //await loginfunctionality.verifyingUrl()
    await addemployees.ClickonPimButton(EmployeesData.dashboardcontentText["pim"])
    await addemployees.clickOnaddemployee()
    await addemployees.enterFirstNamefield(firstname)
    await addemployees.enterMiddleName(middlename)
    await addemployees.enterLastname(lastname)
    const randomEmployeeId = await utilits.generateEmployeeId()
    const ConvertString = String(randomEmployeeId)
    console.log(ConvertString)
    await addemployees.enteremployeeID(ConvertString)
    await addemployees.clickOnSaveButton()
   })

test("Practice the playwright test cases",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button',{name:" Login "}).click()
    const pageUrl = page.url()
    //await page.waitForURL(/dashboard\/index/)
    console.log('dashboard Url is:'+pageUrl)
    await expect(page).toHaveURL(/dashboard\/index/)
})

test("User punch staus in orangeHRR",async({page})=>{

    const loginfunctionality = new LoginFunctionality(page)
    const addemployees      = new Addemployees(page)

    await loginfunctionality.LunchUrl()
    await loginfunctionality.usernameField(process.env.USER_NAME)
    await loginfunctionality.passwordField(process.env.PASS_WORD)
    await loginfunctionality.submitButton()
    await loginfunctionality.verifyingUrl()
    await addemployees.ClickonPimButton(EmployeesData.dashboardcontentText["leave"])

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
})