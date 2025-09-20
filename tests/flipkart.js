export class flipkartPageObject{
    constructor(page){
        this.page           = page;
        this.SearchField    = page.getByPlaceholder('Search Amazon.in',{exact:true})
        this.PressEnter     = page.keyboard.press('Enter')
        this.AddTioCartButton = page.loactor('[name="submit.addToCart"]').first()
    }

    async LunchTheFlipkartUrl(){
        await this.page.goto('https://www.amazon.in/')
    }

    async SearchTheProduct(){
      await this.SearchField.fill('pen')
      await this.PressEnter
    }
    async AddToCartOnTheFirstProduct(){
      await  this.AddTioCartButton.click()
    }
}