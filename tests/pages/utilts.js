export class Utilits{

    constructor(page){
        this.page = page;
        
    }
    async generateEmployeeId(){
        return Math.floor(1000 + Math.random() * 9000)
        
    }
}