class SingletonClass {

    private static _instance:SingletonClass = new SingletonClass(); // Instância única

    private _score:number = 0;  // A instância criada inicia com 0 pontos

    constructor() { //Construtor
        if(SingletonClass._instance){
            return SingletonClass._instance;
        }
        SingletonClass._instance = this;
    }

    public static getInstance():SingletonClass
    {
        return SingletonClass._instance; // Retorna a instância única
    }

    public setScore(value:number):void
    {
        this._score = value; //Seta o valor (número) nos pontos da classe
    }

    public getScore():number
    {
        return this._score; //Retorna os pontos
    }

    public addPoints(value:number):void
    {
        this._score += value; //Acrescenta pontos
    }

    public removePoints(value:number):void
    {
        this._score -= value; //Remove pontos
    }

}