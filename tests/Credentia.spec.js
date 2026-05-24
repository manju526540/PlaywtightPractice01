import { faker } from "@faker-js/faker";
const { test, expect } = require("@playwright/test");
import { RegisterPageObject } from "./pages/Cred_RegisterPageObject.js";
import { state } from "./testdata/Cred_states.json";
import { LoginFunctionality } from "./pages/Creds_loginPage.js";
import { loginData } from "./testdata/Creds_LogInData.json";
import { Utilits } from "./pages/utilts.js"
import { ManageCandidatePage } from "./pages/Creds_ManageCandidatePageobject.js";
import {AL_StateApplicationForm} from "./pages/Submit_ApplicationFoirm/AL_State_Application_Form.js";
import {DC_StateApplicationForm} from "./pages/Submit_ApplicationFoirm/DC_State_Application_Form.js"; 
import { StateNames} from "./testdata/Register_Page.json";
import {SubmitApplicationData} from "./testdata/Submit_Application_Form.json"

test.describe("Credentia Test cases", () => {
  let firstName,
    middleName,
    lastName,
    Address,
    City,
    StateName,
    stateCode,
    ZipCode,
    SSN,
    PhoneNumber,
    Email,
    Password,
    ConfirmPassword,
    filePath
  test.beforeAll(async () => {
    // Generate random data using faker.js
    firstName = faker.person.firstName();
    middleName = faker.person.middleName();
    lastName = faker.person.lastName();
    Address = faker.location.streetAddress();
    City = faker.location.city();
    ZipCode = faker.location.zipCode();
    stateCode = "DC";
    StateName = StateNames[stateCode];
    console.log(StateName);
    SSN = faker.string.numeric(9);
    console.log(SSN);
    PhoneNumber = "6087654467";
    console.log(PhoneNumber);
    // Generate email using first name, middle name, and last name
    Email = firstName + middleName + lastName + "@credentiateam.testinator.com";
    console.log(Email);
    Password = "Bangalore@1234";
    ConfirmPassword = Password;
    filePath = "tests/testdata/ideaPadGaming.png"
  });
  test.only("Register the user", async ({ page }) => {
    const register = new RegisterPageObject(page);
    await register.LunchTheRegisterPageurl(stateCode);
    await register.enterFirstNameField(firstName);
    await register.enterMiddleNameField(middleName);
    await register.enterLastNameField(lastName);
    await register.SelectDateOfBirthField();
    await register.SelectgenderField();
    await register.FillAdressField(Address);
    await register.FillCityField(City);
    await register.FillZipCodeField(ZipCode);
    await register.FillStateField(StateName);
    await register.FillSSNField(SSN);
    await register.FillConfirmSSNField(SSN);
    await register.enterPhoneNumberField(PhoneNumber);
    await register.enterEmailField(Email);
    await register.enterConfirmEmailId(Email);
    await register.enterpasswordField(Password);
    await register.enterConfirmPasswordField(ConfirmPassword);
    await register.ClikcOmChechbox();
    await register.clickOnSignUpbutton();
  });

  test.only("Candidate Approved by operation staff console", async ({ page }) => {
    const loginPage = new LoginFunctionality(page);
    const manageCandidate = new ManageCandidatePage(page);

    await loginPage.LunchUrl("https://credentiauat.examroom.ai/login/");
    await loginPage.usernameField(loginData.operationStaff["username"]);
    await loginPage.passwordField(loginData.operationStaff["password"]);
    await loginPage.ClickOnLoginButoon();
    await loginPage.VerifyDashBoardLink();
    await manageCandidate.ClickOnManageCandidateLink();
    await manageCandidate.SearchOnCandidateNameField(
      firstName,
      middleName,
      lastName
    );
    await manageCandidate.ClickOnCheckStatusButton();
    await manageCandidate.ClickOnYesButton();
    await manageCandidate.VerifyUserGotConfirm();
  });


  test.only('Candidate Fill Application form',async({ page})=>{

       const loginPage = new LoginFunctionality(page);
       const AL_state_Application_form = new AL_StateApplicationForm(page)
      const DC_state_Application_form = new DC_StateApplicationForm(page)
       const utilsPage = new Utilits(page)
      //  const EmailId = "AliceSageKing@credentiateam.testinator.com"
      //  const Password = "Bangalore@1234"
       
       
       await loginPage.LunchUrl("https://credentiauat.examroom.ai/login/");
       await loginPage.usernameField(Email);
       await loginPage.passwordField(Password);
       await loginPage.ClickOnLoginButoon();
       await loginPage.VerifyDashBoardLink();
       await AL_state_Application_form.startNewApplicationButton()
       let eligibilityRoute = state[stateCode].EligibilityRoute.E3
       //let eligibilityRoute = state[stateCode].EligibilityRoute.E8 || Object.values(state[stateCode].EligibilityRoute)[0];
       let randomDateofBirth =await utilsPage.generateRandomYearMonthDate()
       console.log(randomDateofBirth.RandomYear,randomDateofBirth.RandomMonth,randomDateofBirth.RandomDate)


       switch(stateCode){
           case "AL":
            switch(eligibilityRoute){
                case "E1 Nursing Assistant – State Approved Training Program":
                    await AL_state_Application_form.SelelcteligibilityRoute(eligibilityRoute);
                    await AL_state_Application_form.SelectTrainingProgramName(state[stateCode].TrainingProgramNamr);
                    await AL_state_Application_form.SelectCourseCompletionDate(randomDateofBirth.RandomYear,randomDateofBirth.RandomMonth,randomDateofBirth.RandomDate);
                    await AL_state_Application_form.FillAccomidationFormSection2(
                       state[stateCode].SectionNames.E1.Section2,
                      "Are you requesting testing accommodations due to a documented disability?",
                       state[stateCode].ButtonNames.NoRadioButton
                    );
                    await AL_state_Application_form.FillRegistrantCertificationSection3(state[stateCode].SectionNames.E1.Section3,"I agree to the above stated attestation");
                    await AL_state_Application_form.FillTestingPreferenceSection4(
                      state[stateCode].SectionNames.E1.Section4,
                      state[stateCode].ButtonNames.RTSradioButton
                    )
                  break;

                case "E2 NURSING ASSISTANT - SPONSOR — Trained at state approved long term care facility":
                    await AL_state_Application_form.SelelcteligibilityRoute(eligibilityRoute);
                    await AL_state_Application_form.FillUploadFormFIle(filePath,randomDateofBirth.RandomYear,randomDateofBirth.RandomMonth,randomDateofBirth.RandomDate)
                    await AL_state_Application_form.FillAccomidationFormSection2(
                      state[stateCode].SectionNames.E2.Section2,
                      "Are you requesting testing accommodations due to a documented disability?",
                      state[stateCode].ButtonNames.NoRadioButton
                    );
                    await AL_state_Application_form.FillRegistrantCertificationSection3(state[stateCode].SectionNames.E2.Section3,"I agree to the above stated attestation");
                      await AL_state_Application_form.FillTestingPreferenceSection4(
                      state[stateCode].SectionNames.E2.Section4,
                      state[stateCode].ButtonNames.RTSradioButton
                    );
                    break;
                
                case "E3 Nursing Student or Graduate":
                     await AL_state_Application_form.SelelcteligibilityRoute(eligibilityRoute);
                    await AL_state_Application_form.FillUploadCollageTranscript(filePath)
                     await AL_state_Application_form.FillAccomidationFormSection2(
                     state[stateCode].SectionNames.E3.Section2,
                     "Are you requesting testing accommodations due to a documented disability?",
                     state[stateCode].ButtonNames.NoRadioButton
                    );
                    await AL_state_Application_form.FillRegistrantCertificationSection3(state[stateCode].SectionNames.E3.Section3,"I agree to the above stated attestation");
                      await AL_state_Application_form.FillTestingPreferenceSection4(
                      state[stateCode].SectionNames.E3.Section4,
                      state[stateCode].ButtonNames.RTSradioButton
                    );
                    break;
                }
                 
                await AL_state_Application_form.ClickOnSubmitButton();
                await AL_state_Application_form.ClickOnYesButtonInPopup();
                const SuccessMessageText = await AL_state_Application_form.VerifySuccessMessageText(SubmitApplicationData.ValidationMessages.SuccessfulResponseMessage)
                await expect(SuccessMessageText).toBeVisible()
                break;

            case "DC":
                switch(eligibilityRoute){
                    case "E3 Nursing Student or Graduate":
                         await AL_state_Application_form.SelelcteligibilityRoute(eligibilityRoute);
                }
                  
                     
              
       }
});
})
  