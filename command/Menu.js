"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appNotas_1 = require("./appNotas");
const abreAppNotas_1 = require("./abreAppNotas");
const fechaAppNotas_1 = require("./fechaAppNotas");
let commandList = [];
let appNotas = new appNotas_1.AppNotas();
commandList.push(new abreAppNotas_1.AbreAppNotas(appNotas));
commandList.push(new fechaAppNotas_1.FechaAppNotas(appNotas));
commandList.forEach((command, index) => {
    command.execute();
});
//# sourceMappingURL=Menu.js.map