export default class PlayerWinCounterElement extends HTMLElement {

    private readonly playerName: string;
    private winCount = 0;
    private readonly winCountElement: HTMLSpanElement;
    private readonly playerNameElement: HTMLSpanElement;

    constructor(playerNumber: string) {
        super();
        this.playerName = playerNumber;
        this.playerNameElement = document.createElement("span");
        this.winCountElement = document.createElement("span");

        this.appendChild(this.playerNameElement);
        this.appendChild(document.createElement("br"));
        this.appendChild(document.createElement("br"));
        this.appendChild(this.winCountElement);

        this.setStyles();
        this.updateText();
    }

    private setStyles() {
        this.style.display = "inline-block";
        this.style.padding = "1rem 2rem";
        this.style.fontSize = "1.75rem";

        this.winCountElement.style.fontSize = "2.5rem";
    }

    increaseWinCount() {
        this.winCount++;
        this.updateText();
    }

    private updateText() {
        this.playerNameElement.innerText = `Player ${this.playerName}`;
        this.winCountElement.innerText = this.winCount.toString();
    }

}

window.customElements.define("player-win-counter-element", PlayerWinCounterElement);
