export enum MoveType {
    ROCK = "rock",
    PAPER = "paper",
    SCISSORS = "scissors",
    LIZARD = "lizard",
    SPOCK = "spock",
}
export enum Outcome {
    P1 = "player 1 wins",
    P2 = "player 2 wins",
    DRAW = "players draw",
    UK = "unknown",
}
interface isOver{
    winner?: Outcome;
    status: boolean;
}
export class Game {
    private score: [number, number];
    private goal: number;
    constructor(goal: number) {
        this.goal = goal;
        this.score = [0,0];
    }
    public runRound(playerMove: MoveType, opponentMove: MoveType) {
        const r = new Round(playerMove, opponentMove);
        switch (r.getOutcome()) {
            case Outcome.P1:
                this.score[0]++;
                break;
            case Outcome.P2:
                this.score[1]++;
                break;
            default:
                break;
        }
        return r;
    }
    public isOver() : isOver{
        const status = this.score[0] === this.goal || this.score[1] === this.goal;
        let retObj = {status: status}
        if (status === true) {
            if (this.score[0] > this.score[1]) {
                retObj["winner"] = Outcome.P1;
            } else {
                retObj["winner"] = Outcome.P2;
            }
        }
        return retObj;
    }

}
export class Round {
    private outcome = Outcome.UK;
    private verb : string;
    private winnerType: MoveType;
    private loserType: MoveType; 
    constructor(p1Move: MoveType, p2Move: MoveType) {
        const p1 = wins.get(p1Move).find(e => {return e[0] === p2Move});
        const p2 = wins.get(p2Move).find(e => {return e[0] === p1Move});
        if (p1Move === p2Move){
            this.winnerType = this.loserType = p1Move;
            this.verb       = "draws";
            this.outcome    = Outcome.DRAW;
        } else if (p1 === undefined && p2 != undefined) { // p2 wins
            this.winnerType = p2Move;
            this.verb       = p2[1];
            this.loserType  = p1Move;
            this.outcome    = Outcome.P2;
        } else if (p2 === undefined && p1 != undefined) { // p1 wins
            this.winnerType = p1Move;
            this.verb       = p1[1];
            this.loserType  = p2Move;
            this.outcome    = Outcome.P1;
        } else {
            this.outcome = Outcome.UK;
        }
    }
    public getOutcome() {
        return this.outcome;
    }
    public toString() {
        return `${this.outcome}. ${titleCase(this.winnerType)} ${this.verb} ${titleCase(this.loserType)}!`;
    }
}
function titleCase(str: string) {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
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
