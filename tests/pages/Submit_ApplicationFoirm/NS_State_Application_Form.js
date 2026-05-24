export class NC_StateApplicationFormPage{

    constructor(page)
    {
        this.page                      =    page;
        this.startapplicationButton    =    page.getByRole('button',{ name : "Start New Application"})  
    }       
    
    
    async startNewApplicationButton(){
        await this.startapplicationButton.click()
    }

    async SelelcteligibilityRoute(elibibilityRoute){
            await this.page.getByRole('button',{ name : elibibilityRoute}).click()
            //select checkbox
            await this.selectCheckBox.click({force:true})
          //Validate Submit button is Enabled and click on Submit button
            const SubmitButton = this.page.getByRole('button',{ name : "Start"})
            await expect(SubmitButton).toBeEnabled()
            await SubmitButton.click()
      }
}  