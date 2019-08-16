var SingletonClass = (function () { // função que retorna SingletonClass
    function SingletonClass() { 
        this._score = 0; //seta valor inicial 0
        if (SingletonClass._instance) {
            SingletonClass._instance = this;
            }
       
        SingletonClass._instance = this;
    }
    SingletonClass.getInstance = function () {
        return SingletonClass._instance;
    };
    SingletonClass.prototype.setScore = function (value) {
        this._score = value;
    };
    SingletonClass.prototype.getScore = function () {
        return this._score;
    };
    SingletonClass.prototype.addPoints = function (value) {
        this._score += value;
    };
    SingletonClass.prototype.removePoints = function (value) {
        this._score -= value;
    };
    SingletonClass._instance = new SingletonClass();
    return SingletonClass;
})();
///<reference path='SingletonClass.ts'/>
var Main = (function () {
    function Main() {
        var scoreManager = SingletonClass.getInstance(); // cria scoreManager que recebe a instância única do SingletonClass
        scoreManager.setScore(10); //Inicia instância com 10
        console.log('Score: ', scoreManager.getScore());
        scoreManager.addPoints(1); //Adiciona 1 ponto na mesma instância
        console.log('Score: ', scoreManager.getScore());
        scoreManager.removePoints(2);
        console.log('Score: ', scoreManager.getScore());
        var test = new SingletonClass();
        console.log(test.getScore());
    }
    return Main;
})();
