"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DependenteBase = /** @class */ (function () {
    function DependenteBase() {
    }
    return DependenteBase;
}());
var Dependente = /** @class */ (function (_super) {
    __extends(Dependente, _super);
    function Dependente(nome) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        return _this;
    }
    Dependente.prototype.getNome = function () {
        return this.nome;
    };
    return Dependente;
}(DependenteBase));
var DependenteNulo = /** @class */ (function (_super) {
    __extends(DependenteNulo, _super);
    function DependenteNulo() {
        return _super.call(this) || this;
    }
    DependenteNulo.prototype.getNome = function () {
        return "";
    };
    return DependenteNulo;
}(DependenteBase));
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, dependente) {
        this.nome = nome;
        this.dependente = dependente;
    }
    Funcionario.prototype.getDependente = function () {
        if (this.dependente == null) {
            return new DependenteNulo();
        }
        return this.dependente;
    };
    return Funcionario;
}());
var f1 = new Funcionario("Zé das Couves", new Dependente("Couvinha"));
console.log(f1.getDependente().getNome());
var f2 = new Funcionario("Zé das Couves");
console.log(f2.getDependente().getNome());
//# sourceMappingURL=main.js.map