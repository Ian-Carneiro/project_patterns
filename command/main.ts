// import { Command } from './Command';


// A interface Command declara um método para executar um comando.

interface Command{
    execute():void;
}

// As classes Receiver contêm as lógicas de negócio, sabem como realizar todos os tipos de operações da aplicação

class AppNotas{
    open():void{
        console.log('App Notas abriu');
    }
    close():void{
        console.log('App Notas fechou');
    }
}


//  Os comandos implementam separadamente suas operações
class AbreAppNotas implements Command{
    
    private appnotas:AppNotas;
    constructor(a:AppNotas){
        this.appnotas = a;
    }
    execute():void{
        this.appnotas.open();
    }
}



class FechaAppNotas implements Command{
    
    private appnotas:AppNotas;
    constructor(a:AppNotas){
        this.appnotas = a;
    }
    execute():void{
        this.appnotas.close();
    }
}

class Celular{
    public interagir(command:Command){
        command.execute();
    }
}


// O código do cliente pode parametrizar um invocador com qualquer comando
let celular: Celular = new Celular();
let appNotas = new AppNotas();
let abre: Command = new AbreAppNotas(appNotas);
let fecha: Command = new FechaAppNotas(appNotas);
celular.interagir(abre);
celular.interagir(fecha);

// let commandList:Command[] =[];

// commandList.push(new AbreAppNotas(appNotas));
// commandList.push(new FechaAppNotas(appNotas));

// commandList.forEach( (command, index) => {
//     command.execute();
//   });
