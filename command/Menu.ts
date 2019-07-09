import {AppNotas} from './appNotas';
import {Command} from './Command';
import {AbreAppNotas} from './abreAppNotas';
import {FechaAppNotas} from './fechaAppNotas';

let commandList:Command[] =[];
let appNotas = new AppNotas();
commandList.push(new AbreAppNotas(appNotas));
commandList.push(new FechaAppNotas(appNotas));

commandList.forEach( (command, index) => {
    command.execute();
  });