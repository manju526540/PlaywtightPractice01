import { test, expect } from '@playwright/test';

test.describe("Handle tghe Alerts in the application", () => {
    test('handle alert with ok button',async({page})=>{
        await page.goto("https://demo.automationtesting.in/Alerts.html")
        await page.getByRole('link',{ name : "Alert with OK",exact:true}).click()
       await page.locator('button[onclick="alertbox()"]').click()
        page.on("dialog", async dialog =>{
            expect(dialog.message()).toBe("Press a Button !")
            await dialog.accept()
        })
        
        await page.waitForTimeout(5000)

    })

    test("handle Confirm with OK button",async({page})=>{
        await page.goto("https://demo.automationtesting.in/Alerts.html")
        await page.getByRole('link',{ name : "Alert with OK & Cancel",exact:true}).click()
        page.on("dialog", async dialog => {
            expect(dialog.type()).toBe
            await dialog.dismiss()
        })
          await page.locator('button[onclick="confirmbox()"]').click()
        await page.waitForTimeout(5000)
    })

    test("handle the Prompt with ok button",async({page})=>{
         await page.goto("https://demo.automationtesting.in/Alerts.html")
         await page.getByRole('link',{ name : "Alert with Textbox",exact:true}).click()
       
         page.on("dialog",async dialog =>{
            expect(dialog.message()).toBe('Please enter your name')
            expect(dialog.type()).toBe('prompt')
            //await dialog.clear()
            await dialog.accept("I am Automation Tester")
         })
         await page.locator('button[onclick="promptbox()"]').click()
         await page.waitForTimeout(5000)
    })

    test("handle the Alert with OK button",async({page})=>{
        await page.goto("https://demoqa.com/alerts")
        await page.getByRole('button',{ name : "Click me"}).nth(0).click()
        page.on("dialog",async dialog =>{
            expect(dialog.message()).toBe("You clicked a button")
            await dialog.accept()
        })
        await page.waitForTimeout(5000)
    })

    test("handle Comnfirm with Demo Websites",async ({page})=>{
        await page.goto("https://demoqa.com/alerts")
        await page.locator("#timerAlertButton").click()
        page.on("dialog",async dialog =>{
            expect(dialog.type()).toBe("alert")
            await dialog.accept()
        })
        await page.waitForTimeout(5000)
    })

    test("handle the Prompt with prompt message",async({page})=>{
        await page.goto("https://demoqa.com/alerts")
       
        page.on("dialog",async dialog =>{
            expect(dialog.type()).toBe('confirm')
            expect(dialog.message()).toBe("Do you confirm action?")
            await dialog.accept()
       })

       await page.locator("#confirmButton").click()
    })

    


   


})