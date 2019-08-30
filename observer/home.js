"use strict";
class Escrever {
}
class EscreverWeb extends Escrever {
    constructor(/*mensagem:string, */ chat) {
        super();
        //this.mensagem = mensagem;
        this.chat = chat;
    }
    update() {
        //Coloco para que o chat web seja atualizado
    }
}
class EscreverMobile extends Escrever {
    constructor(/*mensagem:string, */ chat) {
        super();
        //this.mensagem = mensagem;
        this.chat = chat;
    }
    update() {
        //Coloco para que o chat mobile seja atualizado
    }
}
class Chat {
    constructor() {
        this.mensagens = [];
        this.list = [];
    }
    add(escrever) {
        this.list.push(escrever);
    }
    remove(escrever) {
    }
    notify() {
        this.list.forEach(function (escrever) {
            escrever.update();
        });
    }
    getMensagens() {
        for (let entry of this.mensagens) {
            console.log(entry);
        }
    }
    addMensagens(mensagem) {
        this.mensagens.push(mensagem);
        this.notify();
    }
}
let chat = new Chat();
let mensagem1 = 'oi';
let mensagem2 = 'ola';
let conversa1 = new EscreverWeb(chat);
let conversa2 = new EscreverMobile(chat);
chat.add(conversa1);
chat.add(conversa2);
//conversa1.update();
chat.addMensagens(mensagem1);
chat.addMensagens(mensagem2);
//chat.notify();
//conversa2.update();
chat.getMensagens();
//# sourceMappingURL=home.js.map