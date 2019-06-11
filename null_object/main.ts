abstract class DependenteBase{
    abstract getNome():string;
}

class Dependente extends DependenteBase{
    constructor(private nome:string){
        super();
    }
    public getNome():string{
        return this.nome;
    }
}

class DependenteNulo extends DependenteBase{
    constructor(){
        super();
    }
    public getNome():string{
        return "";
    }
}

class Funcionario{
    constructor(private nome:string, private dependente?:DependenteBase){}
    public getDependente():DependenteBase{
        if(this.dependente==null){
            return new DependenteNulo();
        }
        return this.dependente;
    }
}

let f1:Funcionario = new Funcionario("Zé das Couves", new Dependente("Couvinha"));
console.log(f1.getDependente().getNome());
let f2:Funcionario = new Funcionario("Zé das Couves");
console.log(f2.getDependente().getNome());