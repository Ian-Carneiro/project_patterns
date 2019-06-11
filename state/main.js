"use strict";
var EstadoNormal = /** @class */ (function () {
    function EstadoNormal() {
    }
    EstadoNormal.prototype.atacar = function () {
        console.log("Pokemon ataca normalmente...");
    };
    EstadoNormal.prototype.defender = function () {
        console.log("Pokemon defende normalmente...");
    };
    EstadoNormal.prototype.esquivar = function () {
        console.log("Pokemon esquiva normalmente...");
    };
    return EstadoNormal;
}());
var EstadoEnvenenado = /** @class */ (function () {
    function EstadoEnvenenado() {
    }
    EstadoEnvenenado.prototype.atacar = function () {
        console.log("Pokemon ataca e recebe dano do veneno!");
    };
    EstadoEnvenenado.prototype.defender = function () {
        console.log("Pokemon defende e recebe dano do veneno!");
    };
    EstadoEnvenenado.prototype.esquivar = function () {
        console.log("Pokemon esquiva e recebe dano do veneno!");
    };
    return EstadoEnvenenado;
}());
var EstadoDormindo = /** @class */ (function () {
    function EstadoDormindo() {
    }
    EstadoDormindo.prototype.atacar = function () {
        console.log("Pokemon est\u00E1 dormindo!");
    };
    EstadoDormindo.prototype.defender = function () {
        console.log("Pokemon est\u00E1 dormindo!");
    };
    EstadoDormindo.prototype.esquivar = function () {
        console.log("Pokemon est\u00E1 dormindo!");
    };
    return EstadoDormindo;
}());
var Pokemon = /** @class */ (function () {
    function Pokemon() {
        this.estado = new EstadoNormal();
    }
    Pokemon.prototype.atacar = function () {
        this.estado.atacar();
    };
    Pokemon.prototype.defender = function () {
        this.estado.defender();
    };
    Pokemon.prototype.esquivar = function () {
        this.estado.esquivar();
    };
    Pokemon.prototype.setEstado = function (estado) {
        this.estado = estado;
    };
    return Pokemon;
}());
var pokemon = new Pokemon();
pokemon.atacar();
pokemon.setEstado(new EstadoDormindo());
pokemon.defender();
pokemon.setEstado(new EstadoEnvenenado);
pokemon.esquivar();
//# sourceMappingURL=main.js.map