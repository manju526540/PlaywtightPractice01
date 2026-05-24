import { test,expect } from "@playwright/test";

test("Handling the While Loop in goib flight booking websites",async({ page })=>{
   let ExamName = "Theory Exam"
   let VoucherCount = 100
    await page.goto("https://prov.examroom.ai/login/")
    await page.locator('[formcontrolname="email"]').fill('prodtp@credentiateam.testinator.com')
    await page.locator('[formcontrolname="password"]').fill('Bangalore@1234')
    await expect(page.getByRole('button',{ name : 'Login' })).toBeEnabled()
    await page.getByRole('button',{ name : 'Login' }).click()
    await expect(page.getByRole('link',{ name : 'Voucher'})).toBeVisible()
    await page.getByRole('link',{ name : 'Voucher'}).click()
    await page.getByRole('button',{ name : 'Buy New Voucher'}).click();
    const AddVoucherButton = await page.locator(`(//div[normalize-space()='${ExamName}']//following::button[contains(@class,'add-brd')])[1]`)
    const CurrentVoucherText = await page.locator(`(//div[normalize-space()='${ExamName}']//following::input)[1]`)
    let CurrentVoucherCount = parseInt(await CurrentVoucherText.inputValue())
    console.log("Current Voucher Count : " + CurrentVoucherCount)

   while(CurrentVoucherCount < VoucherCount) {
   console.log(`Current Voucher count is ${CurrentVoucherCount}`)
    await AddVoucherButton.click();
    CurrentVoucherCount = parseInt(await CurrentVoucherText.inputValue())
    console.log("Added a voucher, updated count : " + CurrentVoucherCount)
 } 
   expect(CurrentVoucherCount).toBe(VoucherCount)
}) 

test("Clicking on the AddButton until the count reaches 100",async({ page })=>{

   let ExamName = "Theory Exam"
   let VoucherCount = 100
    await page.goto("https://prov.examroom.ai/login/")
    await page.locator('[formcontrolname="email"]').fill('prodtp@credentiateam.testinator.com')
    await page.locator('[formcontrolname="password"]').fill('Bangalore@1234')
    await expect(page.getByRole('button',{ name : 'Login' })).toBeEnabled()
    await page.getByRole('button',{ name : 'Login' }).click()
    await expect(page.getByRole('link',{ name : 'Voucher'})).toBeVisible()
    await page.getByRole('link',{ name : 'Voucher'}).click()
    await page.getByRole('button',{ name : 'Buy New Voucher'}).click();
    const AddVoucherButton = await page.locator(`(//div[normalize-space()='${ExamName}']//following::button[contains(@class,'add-brd')])[1]`)
    const CurrentVoucherText = await page.locator(`(//div[normalize-space()='${ExamName}']//following::input)[1]`)
    let CurrentVoucherCount = parseInt(await CurrentVoucherText.inputValue())
    console.log("Current Voucher Count : " + CurrentVoucherCount)

    for(let i = CurrentVoucherCount; i < VoucherCount; i++) {
      console.log(`Current Voucher count is ${CurrentVoucherCount}`)
      await AddVoucherButton.click();
      CurrentVoucherCount = parseInt(await CurrentVoucherText.inputValue())
      console.log("Added a voucher, updated count : " + CurrentVoucherCount)
    }

})