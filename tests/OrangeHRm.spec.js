const {test,expect, chromium} = require("@playwright/test")
import { faker } from '@faker-js/faker';
import { LoginFunctionality } from './pages/LoginPage';
import { Addemployees } from './pages/AddEmployee';
import { Utilits } from './pages/utilts';
import {EmployeesData} from"./testdata/dashboarddata.json"
test.describe("OrangeHrm add employee Functionality",()=>{

    let firstname,middlename,lastname,userName
    test.beforeAll(async()=>{
        
     firstname = faker.person.firstName()
     middlename = faker.person.middleName()
     lastname  = faker.person.lastName()

        
    })


test('this is the first test case',async({page})=>{
 
    const loginfunctionality = new LoginFunctionality(page)
    const addemployees      = new Addemployees(page)
    const utilits =   new Utilits(page)
    await loginfunctionality.LunchUrl()
    await loginfunctionality.usernameField()
    await loginfunctionality.passwordField()
    await loginfunctionality.submitButton()
    await loginfunctionality.verifyingUrl()
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
    await loginfunctionality.usernameField()
    await loginfunctionality.passwordField()
    await loginfunctionality.submitButton()
    await loginfunctionality.verifyingUrl()
    await addemployees.ClickonPimButton(EmployeesData.dashboardcontentText["leave"])

})
test("create a csvfile and store the datra",async({page})=>{

    const fs = require('fs')
    const fastcsv = require('fast-csv');

    const newdata = [
        {username : "user3",
         email : "manju@1234"}
    ];
    const ws = fs.createWriteStream('output.csv',{flag:'a'})
    fastcsv.write(newdata,{headers:true}).pipe(ws)
    console.log("append the data to csv")

})

test("test data store in globally",async()=>{
    require('dotenv').config();
    const fs = require('fs');
    const browser = await chromium.launch({headless:false})
    const page    = await browser.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username",{exact:true}).fill("Admin")
    await page.getByPlaceholder("Password",{exact:true}).fill('admin123')
    await page.getByRole('button',{name:"Login"}).click()
    expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    const dashboard =  page.locator("(//span[normalize-space()='Dashboard'])[1]")
    await expect(dashboard).toBeVisible({timeout:5000})
    userName = await page.locator("(//div[@class='orangehrm-buzz-profile-image'])[1]//following-sibling::div//child::p[1]").textContent()
    console.log("UserName is "+userName)
    
    fs.writeFileSync('.userData.env',`USERNAME=${userName}\n`)
    console.log("username is saved From Userdata.env:"+userName)

    
})

})