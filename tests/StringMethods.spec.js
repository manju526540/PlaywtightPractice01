import{ test,expect} from "@playwright/test";

test('Using textContent of managing length metthod in playwright with js',async({ page })=>{
    
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     const UserNameTextContent = await page.locator('[class="oxd-text oxd-text--p"]').nth(1)
     const UserNameText = await UserNameTextContent.textContent()
     if(UserNameText){
        console.log("length of the username text is : " + UserNameText.length);
        await expect(UserNameText.length).toBeGreaterThan(10)
     } 
     else 
     {
        console.log("no text found")
     }
})

test("using amazon wewbsite for search for laptap and print the product links",async({ page})=>{

    await page.goto("https://www.amazon.in/");
    await page.locator("input#twotabsearchtextbox").fill("laptap");
   await page.locator('input[type="submit"]').click();
    await page.waitForTimeout(5000);
   const Productlinks = await page.$$('[data-cy="title-recipe"]')
   console.log("Product links count: " + Productlinks)
   if(Productlinks.length > 0){
    console.log("total number of product links are : " + Productlinks.length)   
    await Productlinks[2].click()
    await page.waitForTimeout(5000)    
   } else {
    console.log("no product links found")
   }
})

test("handling the text content of the webtable in letcode website",async({ page })=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
    const UserName = "Admin"
    await page.locator('[placeholder="Username"]').fill(UserName.toUpperCase())
    const UserNameTextContent = await page.locator('[placeholder="Username"]').inputValue()
    console.log("text content of the username field is : " + UserNameTextContent)
    await expect(UserNameTextContent).toBe(UserName.toUpperCase())
})

test("Handling the split method in playwright with js",async({ page })=>{
     
    await page.goto("https://www.saucedemo.com/");
    const LogInCredentials = await page.locator('#login_credentials').innerText()
    console.log("Login credentials are : " + LogInCredentials)
    const LogInCredentialsArray = LogInCredentials.split("\n").slice(1);
    console.log(LogInCredentialsArray)
        
})

test("Swag Labs - remove the $ symbole replace with empty string",async({ page })=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator('[placeholder="Username"]').fill("standard_user");
    await page.locator('[placeholder="Password"]').fill('secret_sauce');
    await expect(page.locator('input[type="submit"]')).toBeEnabled();
    await page.locator('input[type="submit"]').click();
    const AddToCartButton = page.locator('button.btn_inventory')
    const counts = await AddToCartButton.count();
    console.log("total number of add to cart buttons are : " + counts)
    for(let i=0; i<counts; i++){
        await AddToCartButton.nth(i).click();
        await expect(page.getByRole('button',{ name : 'Remove'}).nth(i)).toBeVisible()
    }
       await page.locator('[class="shopping_cart_link"]').click();
       await page.getByRole('button',{ name : 'Checkout'}).click();
       await page.locator('[placeholder="First Name"]').fill('Test')
       await page.locator('[placeholder="Last Name"]').fill('user');
       await page.locator('[placeholder="Zip/Postal Code"]').fill('123')
       await page.locator('#continue').click()
       //await page.waitForSelector('span.title')
       await page.waitForTimeout(3000)

       const IteamPrice = await page.locator('.inventory_item_price').allTextContents();
       console.log(IteamPrice)

       const IteamPriceWithoutDollar = IteamPrice.map( price => Number(price.replace('$',"")))
      console.log(IteamPriceWithoutDollar)

      const TotalPrice = IteamPriceWithoutDollar.reduce((sum,value) => sum+value,0)
      console.log(TotalPrice)    

      const ActualtestUI = await page.locator('.summary_subtotal_label').innerText();
      const ActualTotalPrice = Number(ActualtestUI.split("$")[1].trim());
      console.log(ActualTotalPrice)

      await expect(TotalPrice).toBe(ActualTotalPrice)

})

test("Handling on replace method usiong playwright with js",async({ page })=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
    await page.locator('#dob').fill('12-12-2022');
    const DateOfBirth = await page.locator('#dob').inputValue();
    console.log("Date of Birth is : " + DateOfBirth)
    const removeHypen = await DateOfBirth.replaceAll('-','/');
    console.log("Date of Birth after removing hypen is : " + removeHypen)
})