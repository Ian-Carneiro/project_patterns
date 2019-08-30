"use strict";
class CallOfDutyBlackOps4 {
    play() {
        this.startpPlay();
        this.endPlay();
    }
}
class Blackout extends CallOfDutyBlackOps4 {
    startpPlay() {
        console.log("O modo de jogo Blackout foi estartado!");
    }
    endPlay() {
        console.log("O modo de jogo Blackout foi finalizado!");
    }
}
class Multiplayer extends CallOfDutyBlackOps4 {
    startpPlay() {
        console.log("O modo de jogo Multiplayer foi estartado!");
    }
    endPlay() {
        console.log("O modo de jogo Multiplayer foi finalizado!");
    }
}
class Zombies extends CallOfDutyBlackOps4 {
    startpPlay() {
        console.log("O modo de jogo Zombies foi estartado!");
    }
    endPlay() {
        console.log("O modo de jogo Zombies foi finalizado!");
    }
}
let blackout = new Blackout();
let multiplayer = new Multiplayer();
let zombies = new Zombies();
blackout.play();
multiplayer.play();
zombies.play();
//# sourceMappingURL=home.js.map