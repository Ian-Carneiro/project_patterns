"use strict";
class Oponente {
    constructor(defesa, esquiva) {
        this.defesa = defesa;
        this.esquiva = esquiva;
    }
    getDefesa() {
        return this.defesa;
    }
    getEsquiva() {
        return this.esquiva;
    }
    setDefesa(v) {
        this.defesa = v;
    }
    setEsquiva(v) {
        this.esquiva = v;
    }
}
class AtaqueNormal {
    constructor() { }
    valorDano(oponente, ataqueScore) {
        let dano = ataqueScore - oponente.getDefesa();
        /*
         Se a esquiva do oponente for maior que um valor aleatório entre 0 e 100
        ou o dano for negativo. retorne 0.
        */
        if (oponente.getEsquiva() >= Math.random() * 100 || dano < 0) {
            return 0;
        }
        return dano;
    }
}
class AtaqueEspecial {
    constructor() { }
    valorDano(oponente, ataqueScore) {
        let dano = (ataqueScore * 3) - oponente.getDefesa(); //ataque 3 vezes mais forte
        if (oponente.getEsquiva() >= Math.random() * 100 || dano < 0) {
            return 0;
        }
        return dano;
    }
}
class Personagem {
    constructor(ataqueScore) {
        this.ataqueScore = ataqueScore;
    }
    atacar(oponente, ataque) {
        let dano = ataque.valorDano(oponente, this.ataqueScore);
        console.log(`O valor do dano foi de ${dano} pontos!`);
    }
}
let oponente = new Oponente(2, 40);
let personagem = new Personagem(30);
personagem.atacar(oponente, new AtaqueNormal());
//# sourceMappingURL=main.js.map