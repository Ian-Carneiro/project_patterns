"use strict";
class Pessoa {
    constructor(_nome, _cpf) {
        this._nome = _nome;
        this._cpf = _cpf;
    }
    get nome() {
        return this._nome;
    }
    get cpf() {
        return this._cpf;
    }
    setNome(v) {
        this._nome = v;
    }
    toString() {
        return `Pessoa[nome:${this._nome} cpf:${this._cpf}]`;
    }
}
let pessoa = new Pessoa("João", "432.235.543-34");
let cloneDaPessoa = Object.create(pessoa);
// cloneDaPessoa.setNome("José");
console.log("Este é João: " + pessoa.toString());
console.log("Este é o clone de joão: " + cloneDaPessoa.toString());
//# sourceMappingURL=main.js.map