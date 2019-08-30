"use strict";
// import { Command } from './Command';
// As classes Receiver contêm as lógicas de negócio, sabem como realizar todos os tipos de operações da aplicação
class AppNotas {
    open() {
        console.log('App Notas abriu');
    }
    close() {
        console.log('App Notas fechou');
    }
}
//  Os comandos implementam separadamente suas operações
class AbreAppNotas {
    constructor(a) {
        this.appnotas = a;
    }
    execute() {
        this.appnotas.open();
    }
}
class FechaAppNotas {
    constructor(a) {
        this.appnotas = a;
    }
    execute() {
        this.appnotas.close();
    }
}
class Celular {
    interagir(command) {
        command.execute();
    }
}
// O código do cliente pode parametrizar um invocador com qualquer comando
let celular = new Celular();
let appNotas = new AppNotas();
let abre = new AbreAppNotas(appNotas);
let fecha = new FechaAppNotas(appNotas);
celular.interagir(abre);
celular.interagir(fecha);
// let commandList:Command[] =[];
// commandList.push(new AbreAppNotas(appNotas));
// commandList.push(new FechaAppNotas(appNotas));
// commandList.forEach( (command, index) => {
//     command.execute();
//   });
//# sourceMappingURL=main.js.map