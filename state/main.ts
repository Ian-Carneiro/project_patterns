interface Estado{
    atacar():void;
    defender():void;
    esquivar():void
}

class EstadoNormal implements Estado{
    
    public atacar():void{
        console.log(`Pokemon ataca normalmente...`);
    }
    public defender():void{
        console.log(`Pokemon defende normalmente...`);
    }
    public esquivar():void{
        console.log(`Pokemon esquiva normalmente...`);
    }
}

class EstadoEnvenenado implements Estado{
    
    public atacar():void{
        console.log(`Pokemon ataca e recebe dano do veneno!`);
    }
    public defender():void{
        console.log(`Pokemon defende e recebe dano do veneno!`);
    }
    public esquivar():void{
        console.log(`Pokemon esquiva e recebe dano do veneno!`);
    }
}

class EstadoDormindo implements Estado{
    
    public atacar():void{
        console.log(`Pokemon está dormindo!`);
    }
    public defender():void{
        console.log(`Pokemon está dormindo!`);
    }
    public esquivar():void{
        console.log(`Pokemon está dormindo!`);
    }
}

class Pokemon{
    private estado:Estado;
    constructor(){
        this.estado = new EstadoNormal();
    }
    public atacar():void{
        this.estado.atacar();
    }
    public defender():void{
        this.estado.defender();
    }
    public esquivar():void{
        this.estado.esquivar();
    }
    
    public setEstado(estado : Estado):void {
        this.estado = estado;
    }
    
}
let pokemon:Pokemon = new Pokemon();
pokemon.atacar();
pokemon.setEstado(new EstadoDormindo());
pokemon.defender();
pokemon.setEstado(new EstadoEnvenenado);
pokemon.esquivar();