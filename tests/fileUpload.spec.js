import{test,expect} from "@playwright/test"
import path from 'path'

let filePath 
filePath = path.join(__dirname, 'UploadFile','PhonePe_Logo.jpg')

test("Handliong the file uplopad in playwright with js",async({ page })=>{

    await page.goto('https://testpages.eviltester.com/pages/files/file-upload/')
    await page.locator('#fileinput').setInputFiles(filePath) // file uploading in playwright 
    await page.waitForTimeout(5000)
})

test("Handlong the Multiple FileUplad iun playwright with js",async({ page })=>{
    
    await page.goto('http://uitestingplayground.com/upload')
    const Frame = page.frameLocator('iframe[src="/static/upload.html"]')
    const filePath = [ path.join(__dirname,'UploadFile','one.txt'),
                       path.join(__dirname,'UploadFile','two.txt')
                 ]
    await Frame.locator('#browse').setInputFiles(filePath)
    await page.waitForTimeout(5000)
})