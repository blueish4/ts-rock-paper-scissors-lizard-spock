export enum MoveType {
    ROCK = "rock",
    PAPER = "paper",
    SCISSORS = "scissors",
    LIZARD = "lizard",
    SPOCK = "spock",
}
enum Outcome {
    P1 = "player 1 wins",
    P2 = "player 2 wins",
    DRAW = "players draw",
}
export class Game {
    constructor() {}
    public makeMove(player1: MoveType, player2: MoveType) {
        const p1WinCondition = wins.get(player1);
        const p1 = p1WinCondition.find((e) => {return e[0] === player2});
        if (player1 === player2){
            return Outcome.DRAW;
        } else if (p1 === undefined) {
            // p2 wins
            return Outcome.P2;
        } else {
            return Outcome.P1;
        }
    }
}
const wins = new Map<MoveType, Array<[MoveType, string]>>();
wins.set(MoveType.SCISSORS, [[MoveType.PAPER, "cuts"],
                             [MoveType.LIZARD, "decapitates"]]);
wins.set(MoveType.PAPER,    [[MoveType.ROCK, "covers"],
                             [MoveType.SPOCK, "disproves"]]);
wins.set(MoveType.ROCK,     [[MoveType.LIZARD, "crushes"],
                             [MoveType.SCISSORS, "crushes"]]);
wins.set(MoveType.LIZARD,   [[MoveType.SPOCK, "poisons"],
                             [MoveType.PAPER, "eats"]]);
wins.set(MoveType.SPOCK,    [[MoveType.SCISSORS, "smashes"],
                             [MoveType.ROCK, "vaporizes"]]);
