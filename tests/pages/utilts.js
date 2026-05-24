export class Utilits{

    constructor(page){
        this.page = page;
        
    }
    async generateEmployeeId(){
        return Math.floor(1000 + Math.random() * 9000)
    }

    async generateRandomYearMonthDate(){
        
        const StartYear = 2024;
        const EndYear   = 2025;
        
        const year = Math.floor(Math.random() * (EndYear - StartYear + 1)) + StartYear;

        const month = Math.floor(Math.random() * 12)

          // Create a date object for the selected year and month, then get valid days
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const day = Math.floor(Math.random() * daysInMonth) + 1;

         // Format month names
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        return {

            RandomYear : year,
            RandomMonth : monthNames[month],
            RandomDate  : day
         }


    }

    async generateDateinJs(yearsToSubtract,dateToSubstract){
        
        const today = new Date()
        const currentMonth = today.getMonth() + 1;
        const MonthName = ['January','February','March','April','May','June','July','August','September','October','November','December']
        const currentmonth = MonthName[currentMonth - 1]
        const currentYear = (today.getFullYear()) - yearsToSubtract;
        const currentDate = (today.getDate()) - dateToSubstract
        return {
            CurrentMonth : currentmonth,
            CurrentYear  : currentYear,
            CurrentDate  : currentDate
        }

        
        
    }
}