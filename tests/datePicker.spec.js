import { test,expect} from "@playwright/test"
import {Utilits} from "../tests/pages/utilts.js"

test("Handling the date picker of javascript",async({ page })=>{
    const utils = new Utilits(page) 
    let year,date
    year = 3;
    date = 0;


    await page.goto('https://www.tutorialspoint.com/selenium/practice/date-picker.php')
    await page.locator('//input[@id="datetimepicker1"]').click()
    const dateInfo = await utils.generateDateinJs(year,date)
    await page.locator('(//select[@class="flatpickr-monthDropdown-months"])[1]').selectOption(dateInfo.CurrentMonth)
    await page.locator('(//input[@class="numInput cur-year"])[1]').fill('')
    await page.locator('(//input[@class="numInput cur-year"])[1]').fill(dateInfo.CurrentYear.toString())
    await page.locator('//span[@class="flatpickr-day"]').filter({hasText : dateInfo.CurrentDate,exact:true}).nth(1).click()
    await page.keyboard.press('Enter')
})  