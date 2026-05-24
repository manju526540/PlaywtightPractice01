import { test,expect} from "@playwright/test";

test("Handling the forin condition in playwrigh with js",async({ page })=>{

    await page.goto("https://credentiauat.examroom.ai/login/register?RoleId=1&TenantCode=CD&StateCode=DC");
    await page.waitForSelector('')

    const userDetails = {

          firstName : "Alice",
          middleName : "Sage",
          lastName : "King",
          Address  : "123 Main Street",
    }

    const Locators = {
        firstNameField : page.locator('#First name'),
        middleNameField : page.locator('#Middle name'),
        lastNameField : page.locator('#Last name'),
        AddressField : page.locator('#Address (Number and Street)') 
    }
    for(const key in userDetails){

        await Locators[`${key}Field`].fill(userDetails[key])
    }
})