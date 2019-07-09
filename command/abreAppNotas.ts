import {Command} from './Command';
import {AppNotas} from './appNotas';

export class AbreAppNotas implements Command{
    
    private appnotas:AppNotas;
    constructor(a:AppNotas){
        this.appnotas = a;
    }
    execute():void{
        this.appnotas.open();
    }
}