import { expect } from "@playwright/test";
export class ManageCandidatePage{
    constructor(page){
        this.page   =  page 
        this.ManageCandiudate = page.getByRole('link', { name :"Manage Candidates"})
        this.searchField      = page.getByPlaceholder('Search',{exact:true})
        this.CheckStatusButton= page.getByRole('button',{ name : "Check Status"})
        this.YesButton        = page.getByRole('button',{ name : "Yes"})
        this.UserGotConfirm   = page.getByText('User Got Confirmed',{exact:true})
    }

    async ClickOnManageCandidateLink(){
        await this.ManageCandiudate.click()
    }   

    async SearchOnCandidateNameField(firstName,middleName,lastName){
        await  this.searchField.fill(`${firstName} ${middleName} ${lastName}`)
        const CandidateName = await this.page.locator("//td[@role='gridcell']//following::span[normalize-space()='"+firstName+" "+middleName+" "+lastName+"'][2]")
        await CandidateName.waitFor({state:'visible'})
        await CandidateName.click()
    }

    async ClickOnCheckStatusButton(){
        await this.CheckStatusButton.click()
        await this.page.waitForLoadState()
    }

    async ClickOnYesButton(){
        await this.YesButton.click()
    }

    async VerifyUserGotConfirm(){
        await expect(this.UserGotConfirm).toBeVisible()
    }
        





}