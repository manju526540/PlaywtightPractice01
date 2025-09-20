
import { expect, test } from '@playwright/test'; 
import {  faker } from '@faker-js/faker'


class RegisterPageObject {

    constructor(page) {
       
        this.page = page
       

    }

   async LunchTheRegisterPageurl(stateCode){
    await this.page.goto(`https://credentiauat.examroom.ai/login/register?RoleId=1&TenantCode=CD&StateCode=${stateCode}`)
   }

   async enterFirstNameField(firstName){
    await this.page.getByRole('textbox',{ name : "First name"}).fill(firstName)
   }
   async enterMiddleNameField(MiddleName){
    await this.page.getByRole('textbox',{name:"Middle name"}).fill(MiddleName)
   }

   async enterLastNameField(LastName){
    await this.page.getByRole('textbox',{name:'Last name'}).fill(LastName)
   }

   async SelectDateOfBirthField(){
    await this.page.getByLabel("Open calendar").click()
    await this.page.getByLabel("Choose month and year").click()
    await this.page.locator('[aria-label="2005"]').click()
    //Select Random Month
    const MonthSelector = await this.page.locator('//td[@role="gridcell"] /div[1]')
    const NoOfMonth = await MonthSelector.count()
    const IndexOfMonth  = Math.floor(Math.random() * NoOfMonth)
    await MonthSelector.nth(IndexOfMonth).click()
    // select RanDomDate
    const DateSelector = await this.page.locator('//td[@role="gridcell"] /div[1]')
    const NoOfDates = await DateSelector.count()
    const IndexOfdates  = Math.floor(Math.random() * NoOfDates)
    await DateSelector.nth(IndexOfdates).click()
   }
   async SelectgenderField(){
    await this.page.locator('[formcontrolname="gender"]').click()
    const genderoption = await this.page.locator('//span[@class="mat-option-text"]')
    const Count = await genderoption.count()
    const Index = Math.floor(Math.random() * Count)
    await genderoption.nth(Index).click()
   }

   async FillAdressField(Address){
   await this.page.locator('[formcontrolname="address"]').fill(Address)
}
    async FillCityField(City){
        await this.page.locator('[formcontrolname="city"]').fill(City)
    }
    async FillStateField(State){
        await this.page.locator('[formcontrolname="state"]').click()
        await this.page.getByRole('option',{name:State}).click()
       
    }
    async FillZipCodeField(ZipCode){
        await this.page.getByRole('textbox',{name:'Zip code'}).fill(ZipCode)
}

async FillSSNField(SSN){
    await this.page.getByRole('textbox',{name:'SSN'}).first().fill(SSN)
}

async FillConfirmSSNField(ConfirmSSN){
    await this.page.getByRole('textbox',{name:'Confirm SSN'}).fill(ConfirmSSN)
}
async enterPhoneNumberField(PhoneNumber){
    await this.page.locator('input[type="tel"]').fill(PhoneNumber)
    //await this.page.getByRole('textbox',{name:'Phone number'}).fill(PhoneNumber)
}
async enterEmailField(Email){
    await this.page.getByRole('textbox',{name:'Email'}).fill(Email)
}

async enterpasswordField(Password){
    await this.page.getByRole('textbox',{name:'Enter Password'}).fill(Password)
}

async enterConfirmPasswordField(ConfirmPassword){
    await this.page.getByRole('textbox',{name:'Confirm Password'}).fill(ConfirmPassword)
}

    async ClikcOmChechbox(){
   const checkbox = await this.page.locator('//input[@type="checkbox"]/..')
  
   await checkbox.click()
   await expect(checkbox).toBeChecked()
}

async clickOnSignUpbutton(){
   await expect( this.page.getByRole('button',{name:'Sign Up'}).isEnabled()).toBeTruthy()
   await this.page.getByRole('button',{name:'Sign Up'}).click()
   const VerifyTextcontent = await this.page.getByText('Verify your email',{exact:true})
   await VerifyTextcontent.waitFor({state:'visible'})
   await this.page.waitForTimeout(10000)
      
}
}
export { RegisterPageObject };