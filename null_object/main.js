"use strict";
class DependenteBase {
}
class Dependente extends DependenteBase {
    constructor(nome) {
        super();
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
}
class DependenteNulo extends DependenteBase {
    constructor() {
        super();
    }
    getNome() {
        return "";
    }
}
class Funcionario {
    constructor(nome, dependente) {
        this.nome = nome;
    }
    get dependente() {
        return this.dependente || null;
    }
}
let f1 = new Funcionario("Zé das Couves", new Dependente("Couvinha"));
console.log(f1.dependente.getNome());
let f2 = new Funcionario("Zé das Couves 2");
console.log(f2.dependente.getNome());
// function getStringOrNull(s:string, n?:string):string{
//     return n;
// }
// getStringOrNull("null");
// class Teste{
//     constructor(s?:String, n?:number){
//     }
//     public get s() : string {
//         return this.s;
//     }
//     public get n() : number | undefined {
//         return this.n;
//     }
// }
// let t1:Teste = new Teste("a");
// let t2:Teste = new Teste("b", 1);
// console.log(t1.s);
// console.log(t2.s);
// console.log(t2.n);
//constructor(private nome:string, private dependente:DependenteBase = new DependenteNulo()){}
// let f1:Funcionario = new Funcionario("Zé das Couves", new Dependente("Couvinha"));
// console.log(f1.getDependente()!.getNome());
// let f2:Funcionario = new Funcionario("Zé das Couves");
// console.log(f2.getDependente()!.getNome());
// || new DependenteNulo()
//# sourceMappingURL=main.js.map