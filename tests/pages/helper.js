const { expect } = require('@playwright/test');

class HelperPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async LunchUrl(url) {
        await this.page.goto(url);
    }

    async clickElementLocator(selector) {  
        await this.page.click(selector);
    }

    async clickOnButtonLocator(selector){
        await this.page.getByRole('button',{name:selector}).click()
    }

    async FillTheInputField(selector, value) {
        await this.page.fill(selector, value);
    }

    async FillTheInputFieldWithPlaceholder(selector, value) {

        await this.page.getByPlaceholder(selector,{exact:true}).fill(value)
    }

    async getText(selector) {
        return await this.page.textContent(selector);
    }

    async expectElementToBeVisible(selector) {
        await expect(this.page.locator(selector)).toBeVisible();
    }
    
    async clickongetBylabelField(valve){
        await this.page.getByLabel(valve,{exact:true}).click()
    }
}

module.exports = HelperPage;