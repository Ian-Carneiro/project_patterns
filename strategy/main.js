"use strict";
var Oponente = /** @class */ (function () {
    function Oponente(defesa, esquiva) {
        this.defesa = defesa;
        this.esquiva = esquiva;
    }
    Oponente.prototype.getDefesa = function () {
        return this.defesa;
    };
    Oponente.prototype.getEsquiva = function () {
        return this.esquiva;
    };
    Oponente.prototype.setDefesa = function (v) {
        this.defesa = v;
    };
    Oponente.prototype.setEsquiva = function (v) {
        this.esquiva = v;
    };
    return Oponente;
}());
var AtaqueNormal = /** @class */ (function () {
    function AtaqueNormal() {
    }
    AtaqueNormal.prototype.valorDano = function (oponente, ataqueScore) {
        var dano = ataqueScore - oponente.getDefesa();
        /*
         Se a esquiva do oponente for maior que um valor aleatório entre 0 e 100
        ou o dano for negativo. retorne 0.
        */
        if (oponente.getEsquiva() >= Math.random() * 100 || dano < 0) {
            return 0;
        }
        return dano;
    };
    return AtaqueNormal;
}());
var AtaqueEspecial = /** @class */ (function () {
    function AtaqueEspecial() {
    }
    AtaqueEspecial.prototype.valorDano = function (oponente, ataqueScore) {
        var dano = (ataqueScore * 3) - oponente.getDefesa(); //ataque 3 vezes mais forte
        if (oponente.getEsquiva() >= Math.random() * 100 || dano < 0) {
            return 0;
        }
        return dano;
    };
    return AtaqueEspecial;
}());
var Personagem = /** @class */ (function () {
    function Personagem(ataqueScore) {
        this.ataqueScore = ataqueScore;
    }
    Personagem.prototype.atacar = function (oponente, ataque) {
        var dano = ataque.valorDano(oponente, this.ataqueScore);
        console.log("O valor do dano foi de " + dano + " pontos!");
    };
    return Personagem;
}());
var oponente = new Oponente(2, 40);
var personagem = new Personagem(30);
personagem.atacar(oponente, new AtaqueNormal());
//# sourceMappingURL=main.js.map