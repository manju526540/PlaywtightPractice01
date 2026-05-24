import { test,expect} from "@playwright/test"

test.describe("handling the Assertion in playwright with js",()=>{

    test("Assertion demo in playwright with js",async({page})=>{
        
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        const OrangeHrmLogo = page.getByAltText('orangehrm-logo').nth(1)
        await expect(OrangeHrmLogo).toBeVisible()
        const usernameField = page.getByPlaceholder('Username')
        await expect(usernameField).toBeEnabled()
        await usernameField.fill('Admin')
        const passwordField = page.getByPlaceholder('Password')
        await expect(passwordField).toBeEnabled()
        await passwordField.fill('admin123')
           const ForgotPassword = page.locator('.orangehrm-login-forgot p')
        await expect(ForgotPassword).toHaveText('Forgot your password? ')
        const LogInButton = page.getByRole('button',{ name : 'Login' })
        await expect(LogInButton).toBeEnabled()
        await LogInButton.click()
        const OrangeHrmLogo1 = page.getByAltText('client brand banner')
        await expect(OrangeHrmLogo1).toBeVisible()
        const UserNameField = page.locator('input')
        await expect(UserNameField).toHaveAttribute('placeholder','Username')

    })
})