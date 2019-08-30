class Oponente{
    constructor(private defesa:number, private esquiva:number){
    }
    
    public getDefesa() : number {
        return this.defesa;
    }
    public getEsquiva() : number {
        return this.esquiva;
    }
    
    public setDefesa(v : number) {
        this.defesa = v;
    }
    public setEsquiva(v : number) {
        this.esquiva = v;
    }
}


interface Ataque{
    valorDano(oponente:Oponente, ataqueScore:number):number;
}

class AtaqueNormal implements Ataque{
    constructor(){}
    public valorDano(oponente:Oponente, ataqueScore:number):number{
        let dano:number=ataqueScore-oponente.getDefesa();
        /*
         Se a esquiva do oponente for maior que um valor aleatório entre 0 e 100
        ou o dano for negativo. retorne 0.
        */
        if(oponente.getEsquiva()>=Math.random()*100 || dano<0){
            return 0
        }
        return dano;
    }
}
class AtaqueEspecial implements Ataque{
    constructor(){}
    public valorDano(oponente:Oponente, ataqueScore:number):number{
        let dano:number = (ataqueScore*3)-oponente.getDefesa();//ataque 3 vezes mais forte
        if(oponente.getEsquiva()>=Math.random()*100 || dano<0){
            return 0;
        }
        return dano;
    }
}



class Personagem{
    constructor(private ataqueScore:number){
    }
    
    public atacar(oponente:Oponente, ataque:Ataque):void{
        let dano = ataque.valorDano(oponente, this.ataqueScore);
        console.log(`O valor do dano foi de ${dano} pontos!`);
    }
}

let oponente:Oponente = new Oponente(2, 40);
let personagem:Personagem = new Personagem(30);
personagem.atacar(oponente,  new AtaqueNormal()); 