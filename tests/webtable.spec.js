import { test,expect} from "@playwright/test";

test.describe("Handling the Webtable using letcode website",async()=>{
    
    test("Handling the Web taable in letcode website",async( { page })=>{

        await page.goto("https://letcode.in/table", { waitUntil: 'networkidle' })
        const tableValueText = await page.locator('#shopping tbody tr td:nth-child(2)').allTextContents();
       const totalvalue =  tableValueText.reduce((acc,value)=> acc+Number(value),0)
       console.log("Total value of the table is : " + totalvalue);

    })

    test("handling the Date picker in playwright with js",async({ page })=>{

        await page.goto('https://www.globalsqa.com/demo-site/datepicker/')
        const iframe = await page.frameLocator('[class="demo-frame lazyloaded"]')
        await iframe.locator('[class="hasDatepicker"]').click()
        await iframe.locator(`text="${18}"`).click()
        await expect(iframe.locator('[class="hasDatepicker"]')).toBeEditable()
    })

    test("handlinig the date picker in another method",async({page})=>{
        await page.goto('https://www.globalsqa.com/demo-site/datepicker/')
        const iframe = await page.frameLocator('[class="demo-frame lazyloaded"]')
        await iframe.locator('[class="hasDatepicker"]').click()

        const targetedYear = 2023;
        const targetedMonth = "July";
        const targetedDate = 1

        while(true){
            const SelectedYearTextContent = await iframe.locator('[class="ui-datepicker-year"]').textContent()
            const SelectedYear = parseInt(SelectedYearTextContent)
            if(SelectedYear === targetedYear){
                break;
            }
            if(SelectedYear<targetedYear){ // 2026
               await iframe.locator('[data-handler="next"]').click()
            } else{
               await iframe.locator('[data-handler="prev"]').click()
            }
            }

        })

        test.only("handling the month and year datePicker in playwright with js",async({ page })=>{

            await page.goto('https://www.globalsqa.com/demo-site/datepicker/')
            const iframe = await page.frameLocator('[class="demo-frame lazyloaded"]')
            await iframe.locator('[class="hasDatepicker"]').click()

            const targetedYear = 2023;
            const targetedMonth = "July";
            const targetedDate = 1

            while(true){
                const CurrentmonthText = await iframe.locator('[class="ui-datepicker-month"]').textContent()
                console.log(CurrentmonthText)
                const CurrentYearTextContent = await iframe.locator('[class="ui-datepicker-month"]').textContent()
                const CurrentYear = parseInt(CurrentYearTextContent)

                const Current = `${CurrentmonthText} ${CurrentYear}`
                const target  = `${targetedMonth} ${targetedYear}`

                if(Current === target){
                    break;
                }

                       const monthNames = [
                                       "January", "February", "March", "April", "May", "June",
                                       "July", "August", "September", "October", "November", "December"
                                            ];
              
                const currentIndex = CurrentYear * 12 + monthNames.indexOf(CurrentmonthText)
                console.log(currentIndex)
            }

        })

    })
