import{ test,expect} from "@playwright/test";

export class DC_StateApplicationForm{

    constructor(page){
        this.page                      =    page;
        this.startapplicationButton    =    page.getByRole('button',{ name : "Start New Application"})  
        this.selectCheckBox            =    page.locator('#mat-checkbox-1-input')
        this.SelecttrainingProgram     =    page.getByRole('combobox',{ name : "Select Training Program"})
        this.Calendericon              =    page.getByLabel('Open calendar',{exact:true})
        this.ChooseMonthandYear        =    page.getByLabel('Choose month and year',{exact:true})
        this.AccomidationCheckBox      =    page.locator('(//label[contains(text(),"Are you requesting testing accommodations due to a documented disability?")]//following::input[@value="no"]/parent::span/child::span)[2]')
        this.Viewicon                  =    page.waitForSelector("//mat-icon[normalize-space()='visibility']")
        this.SubmitButton              =    page.getByRole('button',{ name : "Submit"})
        this.YesButton                 =    page.getByRole('button',{ name : "Yes"})
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

  async SelectTrainingProgramName(trainingProgramName){
       await this.SelecttrainingProgram.click()
       const TrainingProgramName = this.page.getByRole('option',{ name : trainingProgramName})
       await TrainingProgramName.click()
  }

  async SelectCourseCompletionDate(year,Month,date){
       await this.Calendericon.click()
       await this.ChooseMonthandYear.click()
       await this.page.getByRole('gridcell',{ name : year}).click()
       await this.page.getByText(Month,{exact:true}).click()
       await this.page.locator('.mat-calendar-body-cell-content', { hasText: date.toString(),exact:true }).first().click();
    }

  async FillAccomidationFormSection2(SectionNames,RadioButtonTextContent,no){
       await this.page.getByRole('button',{ name : SectionNames }).click();
       await this.page.locator('//label[contains(text(),"'+RadioButtonTextContent+'")]//following::input[@value="'+no+'"]/parent::span').click({forcr:true})
     }

  async FillRegistrantCertificationSection3(SectionNames,textCoontent){
      await this.page.getByRole('button',{ name : SectionNames }).click();
      await this.page.locator('//span[contains(text(),"'+textCoontent+'")]').click()
    }

    async FillTestingPreferenceSection4(SectionNames,RTSorINF){
      await this.page.getByRole('button',{ name : SectionNames }).click();
      await this.page.locator('//input[@value="'+RTSorINF+'"]/parent::span').click({forcr:true})
 }

 // E2 eligibility Route APplication Form 
    
    async FillUploadFormFIle(filePath,year,Month,date){
      const fileUpload = await this.page.locator('input[type="file"]').nth(1);
      await fileUpload.setInputFiles(filePath)
      await this.Viewicon
     // Enter your training program completion date.
      await this.SelectCourseCompletionDate(year,Month,date)
  }

  // E3 eligibility Route APplication Form
    async FillUploadCollageTranscript(filePath){
      const fileUpload = await this.page.locator('input[type="file"]').nth(1);
      await fileUpload.setInputFiles(filePath)
      await this.Viewicon
    }

    async ClickOnSubmitButton(){
      await expect(this.SubmitButton).toBeEnabled()
      await this.SubmitButton.click()
    }

    async ClickOnYesButtonInPopup(){
      await  this.YesButton.click()
     }

    async VerifySuccessMessageText(ValidateMessage){
      const SuccessMessageText = await this.page.locator(".grid-auto p",{ hasText : ValidateMessage})
      return SuccessMessageText
    }



    
  
  


}