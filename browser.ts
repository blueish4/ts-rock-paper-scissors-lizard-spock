import { MoveType, Outcome, Game } from "./rpsls";

const inputbox = document.getElementById("input-box") as HTMLInputElement;
document.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
        playRound(<MoveType>inputbox.value)
        inputbox.value = ""
    }
})
document.getElementById("submit").addEventListener( "click", e => {
    playRound(<MoveType>inputbox.value)
    inputbox.value = ""
})

const game = new Game(5);
function playRound(playerMove: MoveType){
    displayLine("> " + playerMove);
    const move = playerMove.toUpperCase();
    if (MoveType[move] != null){
        
        let count = 0;
        let cpuChoice = MoveType.SPOCK;
        for (const prop in MoveType) {
            if (Math.random() < 1/++count){
                cpuChoice = <MoveType>MoveType[prop];
            }
        }
        const r = game.runRound(MoveType[move], cpuChoice);
        displayLine(r.toString())
    } else {
        displayLine("You fumble around for too long. You are eaten by a grue.")
    }
    const gameStatus = game.isOver()
    if (gameStatus.status) {
        displayLine("Well, I'm glad that's over.")
        if (gameStatus.winner === Outcome.P1) {
            displayLine("Drat! You won!");
        } else {
            displayLine("Muhahaha! You failed to defeat me!")
            displayLine("Your enemy vanquises you.")
        }
    }
}
function displayLine(line: string) {
    const outBox = document.getElementById("printout");
    const template = document.getElementById("event-line") as HTMLTemplateElement;
    let newLine = document.importNode(template.content, true)
    newLine.querySelectorAll("p")[0].textContent = line;
    outBox.appendChild(newLine);
    outBox.scrollTop = outBox.scrollHeight;
}