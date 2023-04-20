export class User {
    title: string; 
    age: number; 
    quote: string;
    imageSrc: string;

    constructor(title: string, age: number, quote: string, imageSrc: string){
        this.title = title;
        this.age = age;
        this.quote = quote;
        this.imageSrc = imageSrc;
    }
}