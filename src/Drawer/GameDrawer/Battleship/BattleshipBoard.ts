import GameBoardElement from "../../GameBoardElement";
import BattleshipPlayerBoard from "./BattleshipPlayerBoard";

export default class BattleshipBoard extends GameBoardElement {

    private readonly playerBoard: BattleshipPlayerBoard;
    private readonly computerBoard: BattleshipPlayerBoard;

    constructor() {
        super();

        this.playerBoard = new BattleshipPlayerBoard(true);
        this.computerBoard = new BattleshipPlayerBoard();

        this.setUpStyles();

        this.mountBoard("Player", this.playerBoard);
        this.mountBoard("Computer", this.computerBoard);
    }

    private setUpStyles() {
        this.style.display = "grid";
        this.style.gridTemplateColumns = "50% 50%"

    }

    private mountBoard(label: string, target: BattleshipPlayerBoard) {
        const element = document.createElement("div");

        const labelC = document.createElement("div");
        labelC.innerText = label;
        labelC.style.textAlign = "center";
        labelC.style.fontSize = "2rem";

        element.appendChild(labelC);
        element.appendChild(document.createElement("br"));
        element.appendChild(target);

        this.appendChild(element);
    }

    loadGameState(): void {
    }

    resetGame(): void {
    }

    resetGameState(): void {
    }

    saveGameState(): void {
    }


}

window.customElements.define("battleship-board-element", BattleshipBoard);
