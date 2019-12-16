import {TileObserver} from "./BattleshipPlayerBoard";

export default class BattleshipBoardTileElement extends HTMLElement {

    private hasShip: boolean = false;
    private readonly observer: TileObserver;

    constructor(tileObserver: TileObserver) {
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
            this.observer.notifyTargetClick();
            if (this.hasShip) {
                this.innerText = "whatshot";
                this.style.color = "rgba(255,40,37,0.76)";
            } else {
                this.innerText = "waves";
            }
        });
    }

}

window.customElements.define("battleship-board-tile-element", BattleshipBoardTileElement);
