import { Game, MoveType } from "./rpsls"

function strToMove(str : string) {
    return MoveType.ROCK
}
let rpsls = new Game();
console.log(rpsls.makeMove(MoveType.PAPER, MoveType.PAPER));
console.log(rpsls.makeMove(MoveType.ROCK, MoveType.PAPER));