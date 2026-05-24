import {test,expect} from "@playwright/test"

test("handling the dropdown in playwright with js",async({ page })=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{ name : 'Login'}).click()
    const DashBoard = page.getByRole('link',{ name : 'Dashboard'})
    await expect(DashBoard).toBeVisible()
    await page.locator('.oxd-userdropdown-name').click()
    await page.waitForSelector('.oxd-userdropdown-link')
    await page.locator('.oxd-userdropdown-link', { hasText : 'Support'}).click()
    const TextContent = page.locator('.orangehrm-sub-title')
    await expect(TextContent).toHaveText('Customer Support')
}) 

test("handling the neasted dropdown in playwright with js",async({ page })=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{ name : 'Login'}).click()
    const DashBoard = page.getByRole('link',{ name : 'Dashboard'})
    await expect(DashBoard).toBeVisible();
    await page.getByRole('link',{ name : 'Leave'}).click()
    await page.locator('.oxd-multiselect-wrapper .oxd-select-text--active').click()
    await page.getByRole('option',{ name : 'Rejected'}).click()
    await page.waitForSelector('.oxd-multiselect-chips-selected')
    await expect(page.locator('.oxd-multiselect-chips-selected')).toHaveText('Rejected')
})

test("handlimg the searchable drop down elements in playwright with javascript",async({ page })=>{

    await page.goto('https://www.amazon.in/')
    await page.getByRole('button',{ name : 'Continue shopping'}).click()
    await page.getByPlaceholder('Search Amazon.in').fill('book')
    await page.waitForSelector('[aria-rowindex]')
    const counts = await page.locator('[aria-rowindex]').count()
    console.log("total number of dropdowns:",counts)
    const TextContent = await page.locator('[aria-rowindex]').allTextContents()
    console.log(TextContent)
    await expect(page.locator('[aria-rowindex]',{ hasText : 'bookmark' })).toBeVisible()
    const TextLocator = await page.locator('[aria-rowindex]').all()
    for(let text of TextLocator){
        const value = await text.textContent()
        if(value && value.includes('bookmark')){
            await TextLocator.click()
            await page.waitForTimeout(5000)
            break;
        }
    }
    await page.waitForTimeout(5000)
    await page.close()
})  

test("Handling the amazon dropdown values in playwright with js",async({ page })=>{
     
    await page.goto('https://www.amazon.in/')
    await page.getByRole('button',{ name : 'Continue shopping'}).click();
    await page.getByPlaceholder('Search Amazon.in').fill('book');
    await page.waitForSelector('[aria-rowindex]');
    const counts = await page.locator('[aria-rowindex]').count();
    console.log("total number of dropdowns:",counts)
    await expect(page.locator('[aria-rowindex]',{ hasText : 'bookmark' })).toBeVisible();
    const AllLocator = await page.locator('[aria-rowindex]').all()
    for(const text of AllLocator){
        const value = await text.textContent()
        if(value && value.includes('bookmark')){
            await text.click()
            await page.waitForTimeout(5000)
    }
    }
})