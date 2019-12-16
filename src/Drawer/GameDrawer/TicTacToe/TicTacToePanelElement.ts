import PlayerWinCounterElement from "../PlayerWinCounterElement";
import {BoardValue} from "./TicTacToeBoard";

export default class TicTacToePanelElement extends HTMLElement {

    private readonly winCountX: PlayerWinCounterElement;
    private readonly winCountO: PlayerWinCounterElement;

    constructor() {
        super();

        this.style.display = "block";
        this.style.textAlign = "center";

        this.winCountX = new PlayerWinCounterElement("X");
        this.winCountO = new PlayerWinCounterElement("O");

        this.appendChild(this.winCountX);
        this.appendChild(this.winCountO);

    }

    updateWinValues(winValue: BoardValue) {

        switch (winValue) {
            case BoardValue.X:
                this.winCountX.increaseWinCount();
                break;
            case BoardValue.O:
                this.winCountO.increaseWinCount();
                break;
            case BoardValue.NONE:
                console.log("Invalid option found in TicTacToeElement.updateWinValues");
                break;
        }

    }

}

window.customElements.define("tic-tac-toe-panel-element", TicTacToePanelElement);
