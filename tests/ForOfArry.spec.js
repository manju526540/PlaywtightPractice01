import{ test,expect} from "@playwright/test";

test("Handling the for of method in playwright with js",async({ page })=>{

     await page.goto("https://www.tutorialspoint.com/selenium/practice/webtables.php")
     await page.waitForSelector('[class="col-md-8 col-lg-8 col-xl-8"]')
     const rows = await page.locator('table tbody tr').all();
     for(let row of rows){
        const SalaryText = await row.locator('td:nth-child(5)').textContent();
        const Salary = parseInt(SalaryText.trim())
        if(Salary >= 12000){
            await row.locator('[class="delete-wrap confirmdeletebtn"]').click();
            console.log("Deleted the row with salary : " + Salary);
            await page.waitForTimeout(1000)
        }
     }
})

test.only("Handling the for of method using Amazon websites",async({ page })=>{

    await page.goto("https://www.amazon.in")
    await page.waitForTimeout(5000)
    const Iteamnav = await page.locator('[class="nav-li"]').first()
    await Iteamnav.waitFor({ state : 'visible'})
    const navIteams = await page.locator('[class="nav-li"]').all()
    //await expect(navIteams).toHaveCount(32)
    for(const navIteam of navIteams){
        const linkText = await navIteam.locator('a').textContent();
        if(linkText.trim() === "Electronics"){
            await navIteam.locator('a').click();
            console.log("Clicked on the mobiles link")
            break;
        }   
      
    }
      await page.waitForTimeout(5000)
})