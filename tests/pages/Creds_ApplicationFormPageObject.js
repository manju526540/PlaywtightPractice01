import { expect } from "@playwright/test";

export class ApplicationForm{
    constructor(page){
        this.page                         =  page;
        this.startNewApplicationButton    = page.getByRole('button',{ name : ' Start New Application'})
    }

    async clickOnTheApplicationButton9(){
        await this.startNewApplicationButton.click()
    }

    async clickOnEligbleRootButton(){
        await this.page.getByRole('button',{ name : "E1 Nursing Assistant – State Approved Training Program"}).click()
    }

    async clickOmSubmitButton(){
        await this.page.locator('[class="mat-checkbox-inner-container"]').click()
        const submitButton = this.page.getByRole('button',{ name : 'Submit'})
        await expect(submitButton).toBeEnabled()
        await submitButton.click()
    }


  
}