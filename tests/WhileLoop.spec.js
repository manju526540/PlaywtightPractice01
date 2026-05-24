import { test,expect} from "@playwright/test";

test("Handling the While Loop in playwright with js",async({ page })=>{

    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(5000)
    await page.waitForLoadState()
    const FooterLinks = await page.locator('.navFooterVerticalRow') 
    const FooterCount = await FooterLinks.count();
    for(let i=0; i<FooterCount; i++){
        const FooterText = await FooterLinks.nth(i).innerText();
       // console.log(FooterText)
        if(await FooterText.includes("Press Releases")){
            console.log("Found the Press Releases link at index : " + FooterText)
            await FooterLinks.nth(i).click();
            console.log("Clicked on the Press Releases link")
              await expect(page.getByTitle('Press Center - IN Press Center')).toBeVisible()
            break;
        }
      
    } //.navFooterVerticalRow
})

test("Handling the Data Driven Testing in playwright with js",async({ page })=>{
    
})
