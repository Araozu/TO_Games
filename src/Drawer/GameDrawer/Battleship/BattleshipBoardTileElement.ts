import UpdateObserver from "./UpdateObserver";

export default class BattleshipBoardTileElement extends HTMLElement {

    private hasShip: boolean = false;
    private readonly observer: UpdateObserver;
    private gameEnded = false;

    constructor(tileObserver: UpdateObserver) {
        super();
        this.observer = tileObserver;

        this.style.border = "solid 1px gray";

        this.setOnClick();
        this.setUpStyles();
    }

    private setUpStyles() {
        this.className = "material-icons";
        this.style.lineHeight = "100px";
        this.style.color = "rgba(64,173,255,0.61)";
        this.style.fontSize = "50px";
        this.style.cursor = "pointer";
        this.style.userSelect = "none";
    }

    setHasShip() {
        this.hasShip = true;
    }

    private setOnClick() {
        this.addEventListener("click", () => {
            if (this.gameEnded) return;

            if (this.hasShip) {
                this.observer.update();
                this.innerText = "whatshot";
                this.style.color = "rgba(255,40,37,0.76)";
            } else {
                this.innerText = "waves";
            }
        });
    }

    setGameEnded() {
        this.gameEnded = true;
    }

}

window.customElements.define("battleship-board-tile-element", BattleshipBoardTileElement);
