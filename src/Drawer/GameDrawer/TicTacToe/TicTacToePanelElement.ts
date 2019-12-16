import PlayerWinCounterElement from "./TicTacToePanelElement/PlayerWinCounterElement";
import {BoardValue} from "./TicTacToeBoard";

export default class TicTacToePanelElement extends HTMLElement {

    private readonly winCountX: PlayerWinCounterElement;
    private readonly winCountO: PlayerWinCounterElement;
    private readonly resetButton: HTMLButtonElement;

    constructor() {
        super();

        this.style.display = "block";
        this.style.textAlign = "center";

        this.winCountX = new PlayerWinCounterElement("X");
        this.winCountO = new PlayerWinCounterElement("O");
        this.resetButton = this.createResetButton();

        this.appendChild(this.winCountX);
        this.appendChild(this.winCountO);
        this.appendChild(this.resetButton);

    }

    createResetButton() {
        const elem = document.createElement("button");

        elem.className = "material-icons";
        elem.innerText = "autorenew";

        elem.style.border = "none";
        elem.style.backgroundColor = "rgb(0, 150, 136)";
        elem.style.color = "#FFFFFF";
        elem.style.fontSize = "2rem";
        elem.style.boxShadow = "0 0 2px 0 gray";
        elem.style.borderRadius = "5px";
        elem.style.cursor = "pointer";
        elem.style.padding = "0.5rem 1rem";

        return elem;
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
