import { test,expect} from "@playwright/test"
import path from 'path'
let filePath
filePath = path.join(__dirname, 'UploadFile','PhonePe_Logo.jpg')
test("Handling the Mouse Hover action in playwrigh with js",async({ page })=>{

    await page.goto('https://play1.automationcamp.ir/mouse_events.html')
    await page.locator('#click_area').click()
    await expect(page.locator('#click_type:nth-child(1)')).toBeVisible()

    // right click action 
    await page.locator('#click_area').click({ button : 'right'})
    await expect(page.locator('#click_type:nth-child(1)')).toHaveText('Right-Click')
    await page.locator('#click_type:nth-child(1)').click()

    //double click actions 
    await page.locator('#click_area:nth-child(1)').dblclick()
    await expect(page.locator('#click_type:nth-child(1)')).toHaveText('Double-Click')

    //Mouse Hover actions in Playwright
    await page.locator('.dropbtn:nth-child(1)').hover()
    await page.locator('text="Java"').click()
    await expect(page.locator('#hover_validate:nth-child(1)')).toHaveText('Java')

    //drag and drop in playwright 
    const SourceIteam = page.locator('#drag_source')
    const TargetIteam = page.locator('#drop_target')
    await SourceIteam.dragTo(TargetIteam)
    await expect(page.locator('h3')).toHaveText('Drop is successful!')
    // or dragAndDrop method also we can use

    //scroll Down Playwright support automatically scrooldown where we enter the element perform any Action but we enter manually like this one 
    await page.mouse.wheel(0,500);
    
})

test("handling the mouse action in playwright with js",async({ page })=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').focus();
    await page.keyboard.type('Admin');
    await page.getByPlaceholder('Password').focus();
    await page.keyboard.type('admin123')
    await page.getByRole('button',{ name : 'Login'}).click();
    const PiMLink = page.getByRole('link',{ name : "PIM"})
    await PiMLink.waitFor({ state : 'visible'})
    await PiMLink.click()
    const AddEmployee = page.locator('.oxd-topbar-body-nav-tab-item',{ hasText : "Add Employee"})
    await AddEmployee.waitFor({ state : 'visible'})
    await AddEmployee.click()
   // await page.waitForSelector('input[type="file"]')
    await page.locator('input[type="file"]').setInputFiles(filePath)
   // await expect(page.getByAltText('profile picture')).toBeVisible()
})
