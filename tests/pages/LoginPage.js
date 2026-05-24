const {test,expect} = require("@playwright/test")
export class LoginFunctionality{
    constructor(page){
        this.page = page;
        this.username = 'input[placeholder="Username"]';
        this.password = 'input[placeholder="Password"]';
        this.submitbutton = "Login";
       
      

    }

    async LunchUrl(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async usernameField(UserName){
        await this.page.locator(this.username).fill(UserName)
    }

    async passwordField(PassWord){
        await this.page.locator(this.password).fill(PassWord)
    }

    async submitButton(){
        await this.page.getByRole("button",{name:this.submitbutton}).click()
    }

    async verifyingUrl(){
        try{
        await this.page.waitForURL(/.*\/dashboard\/index/,{waitUntil: 'networkidle'})  
        const currentUrl = this.page.url()
        expect(currentUrl).toContain('/dashboard/index')
        }catch(error){
            console.log("Navigation into the expected URL failed:",error)
        }
       
    }
 
        
    }


