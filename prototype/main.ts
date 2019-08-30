class Pessoa{
    constructor(private _nome:string, private _cpf:string){

    }  
    get nome():string {
        return this._nome;
    }

    get cpf() : string {
        return this._cpf;
    }

    public setNome(v : string) {
        this._nome = v;
    }
    
    public toString():string {
        return `Pessoa[nome:${this._nome} cpf:${this._cpf}]`;
    }  
}
let pessoa:Pessoa = new Pessoa("João", "432.235.543-34");
let cloneDaPessoa:Pessoa = Object.create(pessoa);
// cloneDaPessoa.setNome("José");

console.log("Este é João: "+pessoa.toString());
console.log("Este é o clone de joão: "+cloneDaPessoa.toString());