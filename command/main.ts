

// A interface Command declara um método para executar um comando.

export interface Command{
    execute():void;
}

// As classes Receiver contêm as lógicas de negócio, sabem como realizar todos os tipos de operações da aplicação

export class AppNotas{
    open():void{
        console.log('App Notas abriu');
    }
    close():void{
        console.log('App Notas fechou');
    }
}


//  Os comandos implementam separadamente suas operações
export class AbreAppNotas implements Command{
    
    private appnotas:AppNotas;
    constructor(a:AppNotas){
        this.appnotas = a;
    }
    execute():void{
        this.appnotas.open();
    }
}



export class FechaAppNotas implements Command{
    
    private appnotas:AppNotas;
    constructor(a:AppNotas){
        this.appnotas = a;
    }
    execute():void{
        this.appnotas.close();
    }
}


// O código do cliente pode parametrizar um invocador com qualquer comando

let commandList:Command[] =[];
let appNotas = new AppNotas();
commandList.push(new AbreAppNotas(appNotas));
commandList.push(new FechaAppNotas(appNotas));

commandList.forEach( (command, index) => {
    command.execute();
  });
