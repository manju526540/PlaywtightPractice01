const {test,expect} = require("@playwright/test")
export class Addemployees{
    
       constructor(page){
        this.page = page
         this.homepagemenuIteam = '[class="oxd-main-menu-item"] span'
         this.addemployeelabel = '//a[normalize-space()="Add Employee"]'
         this.firstName        =      "First Name"
         this.middleName       =   "Middle Name"
         this.lastName         =    "Last Name"
         this.employeeID       =   '(//label[normalize-space()="Employee Id"]//following::input)[1]'

       }

       async ClickonPimButton(PIM){
        await this.page.locator(this.homepagemenuIteam,{hasText:PIM}).click()
        //await this.page.waitForUrl(/.*\/pim\/viewEmployeeList/)
    }

    async clickOnaddemployee(){
        await this.page.locator(this.addemployeelabel).click()
    }

    async enterFirstNamefield(firstname){
        await this.page.getByPlaceholder(this.firstName).fill(firstname)
    }

    async enterMiddleName(middlename){
        await this.page.getByPlaceholder(this.middleName).fill(middlename)
    }

    async enterLastname(lastname){
        await this.page.getByPlaceholder(this.lastName).fill(lastname)
    }

    async enteremployeeID(employeeid){
        //await this.page.locator(this.employeeID).clear()
        await this.page.locator(this.employeeID).fill(employeeid)
    }

    async clickOnSaveButton(){
        await this.page.getByRole("button",{name:"Save"}).click()
    }

    async VerifyingValidationMessage(){
     
        await this.page.getByText("Successfully Saved",{exact:true})
    }

}