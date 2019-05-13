import { MoveType, Round } from "./rpsls";

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
function playRound(playerMove: MoveType){
    displayLine("> " + playerMove);
    const move = playerMove.toUpperCase();
    if (MoveType[move] != null){
        const r = new Round(MoveType[move], MoveType.ROCK);
        displayLine(r.toString())
    } else {
        displayLine("You fumble around for too long. You are eaten by a grue.")
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