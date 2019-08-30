"use strict";
class EstadoNormal {
    atacar() {
        console.log(`Pokemon ataca normalmente...`);
    }
    defender() {
        console.log(`Pokemon defende normalmente...`);
    }
    esquivar() {
        console.log(`Pokemon esquiva normalmente...`);
    }
}
class EstadoEnvenenado {
    atacar() {
        console.log(`Pokemon ataca e recebe dano do veneno!`);
    }
    defender() {
        console.log(`Pokemon defende e recebe dano do veneno!`);
    }
    esquivar() {
        console.log(`Pokemon esquiva e recebe dano do veneno!`);
    }
}
class EstadoDormindo {
    atacar() {
        console.log(`Pokemon está dormindo!`);
    }
    defender() {
        console.log(`Pokemon está dormindo!`);
    }
    esquivar() {
        console.log(`Pokemon está dormindo!`);
    }
}
class Pokemon {
    constructor() {
        this.estado = new EstadoNormal();
    }
    atacar() {
        this.estado.atacar();
    }
    defender() {
        this.estado.defender();
    }
    esquivar() {
        this.estado.esquivar();
    }
    setEstado(estado) {
        this.estado = estado;
    }
}
let pokemon = new Pokemon();
pokemon.atacar();
pokemon.setEstado(new EstadoDormindo());
pokemon.defender();
pokemon.setEstado(new EstadoEnvenenado);
pokemon.esquivar();
//# sourceMappingURL=main.js.map