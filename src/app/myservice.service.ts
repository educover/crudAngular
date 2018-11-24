import { List } from './list.interface';

export class myList implements List{
    public listId;
    public name;
    public phone;
    public direcction;
    public birthdate;


    constructor(name, phone, direcction, birthdate){
        this.name=name;
        this.phone=phone;
        this.direcction=direcction;
        this.birthdate=birthdate;
    }
}