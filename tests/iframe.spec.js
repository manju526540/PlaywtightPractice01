import{ test,expect} from "@playwright/test"

test("handling the iframe in playwright with js",async({ page })=>{

    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
    const iframe =await page.frame({name : 'globalSqa'})
    await iframe.locator('#portfolio_filter #current_filter').click()
    await iframe.locator('#filter_list li div',{ hasText : 'Performance Testing'}).click()
    await page.waitForTimeout(5000)

})

test("handling the iframe by using locator in playwright with js",async({ page })=>{

      await page.goto('https://demoqa.com/frame')
    const iframeLocator = await page.frameLocator('#frame1')
    await expect(iframeLocator.locator('#sampleHeading')).toHaveText('This is a sample page')
    await page.waitForTimeout(5000)
})