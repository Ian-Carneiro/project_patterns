abstract class Escrever {
    abstract chat:Chat;
    abstract update():void;
}
interface Observer{
    Update():void;
}
class EscreverWeb extends Escrever{
    //mensagem:string;
    chat:Chat;
    constructor(/*mensagem:string, */chat:Chat){
        super();
        //this.mensagem = mensagem;
        this.chat = chat;
        
    }
    update():void{
        //Coloco para que o chat web seja atualizado
    }
}
class EscreverMobile extends Escrever{
    //mensagem:string;
    chat:Chat;
    constructor(/*mensagem:string, */chat:Chat){
        super();
        //this.mensagem = mensagem;
        this.chat = chat;
        
    }
    update():void{
        //Coloco para que o chat mobile seja atualizado
    }
}
class Chat{
    mensagens: string[] = [];
    list:Escrever[] =[];

    add(escrever: Escrever) {
        this.list.push(escrever);
    }
    remove(escrever: Escrever) {
        
    }
    notify(){ 
        this.list.forEach(function (escrever) {
            escrever.update();
        }); 
    }
    getMensagens(){
        for (let entry of this.mensagens) {
            console.log(entry);
        }
    }
    addMensagens(mensagem: string){
        this.mensagens.push(mensagem);
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
chat.notify();
chat.addMensagens(mensagem2);
//chat.notify();
//conversa2.update();
chat.notify();
chat.getMensagens();