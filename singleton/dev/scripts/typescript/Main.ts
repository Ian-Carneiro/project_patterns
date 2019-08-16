///<reference path='SingletonClass.ts'/>

class Main { //Classe principal

    constructor() {
        var scoreManager:SingletonClass = SingletonClass.getInstance(); //cria uma instância única da classe SingletonClass

        scoreManager.setScore(10); //Inicia com 10 pontos
        console.log('Score: ', scoreManager.getScore());

        scoreManager.addPoints(1); //Adiciona 1 ponto
        console.log('Score: ', scoreManager.getScore());

        scoreManager.removePoints(2); //Remove 2 pontos
        console.log('Score: ', scoreManager.getScore());
    }

}