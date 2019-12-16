import GameBoardElement from "../../GameBoardElement";
import BattleshipPlayerBoard from "./BattleshipPlayerBoard";
import UpdateObserver from "./UpdateObserver";

export interface BattleshipBoardNotifier extends UpdateObserver {

    handlePlayerCellClicked(): void;
    handleComputerCellClicked(): void;

}

export default class BattleshipBoard extends GameBoardElement implements BattleshipBoardNotifier {

    private readonly playerBoard: BattleshipPlayerBoard;
    private readonly computerBoard: BattleshipPlayerBoard;
    private readonly playerWinMessage: HTMLDivElement;
    private readonly computerWinMessage: HTMLDivElement;
    private remainingComputerMoves = BattleshipPlayerBoard.createRange(36);

    constructor() {
        super();

        this.playerBoard = new BattleshipPlayerBoard(this, true);
        this.computerBoard = new BattleshipPlayerBoard(this);
        this.playerWinMessage = document.createElement("div");
        this.computerWinMessage = document.createElement("div");

        this.playerWinMessage.innerText = `Click on the cells to add your ships. ${
            this.playerBoard.targetClickRemaining
        } remaining.`;

        this.setUpStyles();

        this.appendChild(this.playerWinMessage);
        this.appendChild(this.computerWinMessage);
        this.mountBoard("Player", this.playerBoard);
        this.mountBoard("Computer", this.computerBoard);
    }

    private setUpStyles() {
        this.style.display = "grid";
        this.style.gridTemplateColumns = "50% 50%";

        this.playerWinMessage.style.fontSize = "2rem";
        this.playerWinMessage.style.textAlign = "center";
        this.playerWinMessage.style.padding = "1rem 2rem";

        this.computerWinMessage.style.fontSize = "2rem";
        this.computerWinMessage.style.textAlign = "center";
        this.computerWinMessage.style.padding = "1rem 2rem";
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

    update() {
        this.handleWin();
    }

    handlePlayerCellClicked(): void {

        if (this.playerBoard.targetClickRemaining != 0) {
            this.playerWinMessage.innerText = `Click on the cells to add your ships. ${
                this.playerBoard.targetClickRemaining
            } remaining.`;
        } else {
            this.playerWinMessage.innerText = "";

        }

    }

    handleComputerCellClicked() {
        const l = this.remainingComputerMoves.length;

        const position = Math.floor(Math.random() * l);
        const tilePosition = this.remainingComputerMoves[position];
        this.playerBoard.simulateClick(tilePosition);
        this.remainingComputerMoves.splice(position, 1);

        this.playerBoard.simulateClick(tilePosition);
    }

    handleWin() {

        if (this.playerBoard.hasLost) {
            this.computerWinMessage.innerText = "The computer wins.";
        } else {
            this.playerWinMessage.innerText = "The player wins.";
        }

    }

    resetGame(): void {}


}

window.customElements.define("battleship-board-element", BattleshipBoard);
