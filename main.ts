import { MoveType, Round } from "./rpsls"


let round = new Round(MoveType.ROCK, MoveType.PAPER);
console.log(round.toString());
let round2 = new Round(MoveType.ROCK, MoveType.ROCK);
console.log(round2.toString())