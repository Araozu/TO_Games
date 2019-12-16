import UpdateObserver from "./UpdateObserver";
import {BattleshipPlayerBoardUserSelectObserver} from "./BattleshipPlayerBoard";

export default class BattleshipBoardTileElement extends HTMLElement {

    private hasShip: boolean = false;
    private readonly observer: BattleshipPlayerBoardUserSelectObserver;
    private gameEnded = false;
    private isUserSelecting: boolean;
    private isUserTile: boolean;
    private isUserSelected = false;
    private hasBeenClicked = false;

    constructor(tileObserver: BattleshipPlayerBoardUserSelectObserver, isUserHandled = false) {
        super();
        this.observer = tileObserver;
        this.isUserSelecting = isUserHandled;
        this.isUserTile = isUserHandled;

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


            if (this.isUserSelecting) {
                if (this.isUserSelected) return;

                this.setHasShip();
                this.style.backgroundColor = "lightgray";
                this.observer.handleUserSelect();
                this.isUserSelected = true;

            } else if (!this.isUserTile) {
                this.simulateClick();
            }
        });
    }

    simulateClick(isFromFather = false) {
        if (this.hasBeenClicked) return;

        //if (!isFromFather)
            this.observer.handleClick(this.hasShip);

        if (this.hasShip) {
            this.innerText = "whatshot";
            this.style.color = "rgba(255,40,37,0.76)";
        } else {
            this.innerText = "waves";
        }

        this.hasBeenClicked = true;
    }

    endUserSelecting() {
        this.isUserSelecting = false;
    }

    setGameEnded() {
        this.gameEnded = true;
    }

}

window.customElements.define("battleship-board-tile-element", BattleshipBoardTileElement);
