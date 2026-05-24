import { expect, test } from '@playwright/test'; 
export class LoginFunctionality{
    constructor(page){
        this.page = page;
        this.username = 'input[formcontrolname="email"]';
        this.password = 'input[formcontrolname="password"]';
        this.submitbutton = "Login";
    }

    async LunchUrl(url){
        await this.page.goto(url)
    }

    async usernameField(username){
       await this.page.locator(this.username).fill(username)
    }

    async passwordField(Password){
        await this.page.locator(this.password).fill(Password)
    }

    async ClickOnLoginButoon(){
        const logInButton = await this.page.getByRole('button',{name : "Login"})
        await expect(logInButton).toBeEnabled()
        await logInButton.click()
    }

    async VerifyDashBoardLink(){
        const dashBoardLink = await this.page.getByRole('link',{name : "dashboard"})
        await dashBoardLink.waitFor({state:'visible'})
    }


}