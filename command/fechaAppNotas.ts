import {Command} from './Command';
import {AppNotas} from './appNotas';

export class FechaAppNotas implements Command{
    
    private appnotas:AppNotas;
    constructor(a:AppNotas){
        this.appnotas = a;
    }
    execute():void{
        this.appnotas.close();
    }
}