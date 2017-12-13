import { Films } from "./films";

export class Cartelera{

    films : Films[];

    constructor(){
        this.loadBillboard();
    }

    loadBillboard(){
        this.films = []; 

        this.films[0] = new Films("Lady Bird","Una mujer que hace cosas","ladybird.jpg");
        this.films[1] = new Films("Star Wars: The Last Jedi","FIOOON WHIOOON UUUUH","jedi.jpg");
        this.films[2] = new Films("Ferdinand","MUUUUUUUUUUUUUUUUUUU","ferdi.jpg");
        this.films[3] = new Films("Justice League","NANANANNANAA BATMAAAAAAAAAN and others","justice.jpg");
        this.films[4] = new Films("Thor Ragnarok","HAMMER OF JUSTICEEEEEE","thor.jpg");
        
        
    }
}