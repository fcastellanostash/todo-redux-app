export class Todo{
    public id        : number;
    public completed : boolean;
    public texto     : string;

    constructor(texto : string){
        this.id        = Math.random();
        this.texto      = texto;
        this.completed = false;

    }

}