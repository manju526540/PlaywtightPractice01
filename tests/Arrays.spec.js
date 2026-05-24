import { test,expect} from "@playwright/test";

test("handling the array in playwright with js",async({ page })=>{

    await page.goto("https://saucedemo.com/")

    const Credentials = [
        {
            UserName : "standard_user",
            Password : "secret_sauce"
        },
        {
            UserName : "locked_out_user",
            Password : "secret_sauce"
        },
        {
            UserName : "problem_user",
            Password : "secret_sauce"
        },
        {
            UserName : "performance_glitch_user",
            Password : "secret_sauce"             
        },
        {
            UserName : "error_user",
            Password : "secret_sauce"
        },
        {
            UserName : "visual_user",
            Password : "secret_sauce"
        }
    ]

   let UserName,Password
    for(let i = 0; i < Credentials.length; i++){
        UserName = Credentials[i].UserName
        Password = Credentials[i].Password
        await page.locator('#user-name').fill(UserName)
        await page.locator('#password').fill(Password)
        await page.locator('#login-button').click()
        const buttonMenu = page.getByRole('button',{ name : 'Open Menu'})
        await buttonMenu.waitFor({ state : 'visible'})
        await buttonMenu.click();
        await page.locator('#logout_sidebar_link').click()
        await page.waitForTimeout(2000)
    }

})