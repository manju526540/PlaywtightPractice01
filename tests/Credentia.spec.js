import { faker } from "@faker-js/faker";
const { test, expect } = require("@playwright/test");
import { RegisterPageObject } from "./pages/Cred_RegisterPageObject.js";
import { state } from "./testdata/Cred_states.json";
import { LoginFunctionality } from "./pages/Creds_loginPage.js";
import { loginData } from "./testdata/Creds_LogInData.json";
import { ManageCandidatePage } from "./pages/Creds_ManageCandidatePageobject.js";

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
    ConfirmPassword;
  test.beforeAll(async () => {
    // Generate random data using faker.js
    firstName = faker.person.firstName();
    middleName = faker.person.middleName();
    lastName = faker.person.lastName();
    Address = faker.location.streetAddress();
    City = faker.location.city();
    ZipCode = faker.location.zipCode();
    stateCode = "AL";
    StateName = state[stateCode];
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
  });
  test("Register the user", async ({ page }) => {
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
    await register.enterpasswordField(Password);
    await register.enterConfirmPasswordField(ConfirmPassword);
    await register.ClikcOmChechbox();
    await register.clickOnSignUpbutton();
  });

  test("Candidate Approved by operation staff console", async ({ page }) => {
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
  });


  test('Candidate Fill Application form',async({ page})=>{

       const loginPage = new LoginFunctionality(page);

       
  })
});
  