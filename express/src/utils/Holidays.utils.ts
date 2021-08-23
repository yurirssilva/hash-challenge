require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

export class Holidays {
    public static isBlackFriday(): boolean {
        const today:string = new Date().toISOString().slice(0, 10);    
        return today == process.env.BF_DATE ? true : false;
    }
}