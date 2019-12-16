import BattleshipBoardTileElement from "./BattleshipBoardTileElement";
import UpdateObserver from "./UpdateObserver";
import {BattleshipBoardNotifier} from "./BattleshipBoard";

export interface BattleshipPlayerBoardUserSelectObserver extends UpdateObserver {

    handleUserSelect(): void;
    handleClick(isTarget: boolean): void;

}

export default class BattleshipPlayerBoard extends HTMLElement implements BattleshipPlayerBoardUserSelectObserver {

    private readonly container: HTMLDivElement;
    private cells: BattleshipBoardTileElement[];
    private readonly isUser: boolean;
    private _targetClickRemaining = 10;
    private targetClicked = 0;
    private readonly observer: BattleshipBoardNotifier;
    private _hasLost = false;

    constructor(observer: BattleshipBoardNotifier, isUser = false) {
        super();
        this.observer = observer;
        this.isUser = isUser;
        this.container = this.createContainer();
        this.cells = this.createCells();

        this.appendChild(this.container);
    }

    get hasLost() { return this._hasLost; }

    get targetClickRemaining() { return this._targetClickRemaining; }

    private cleanCells() {
        this.cells = [];
    }

    private cleanContainer() {
        while (this.container.hasChildNodes()) {
            this.container.removeChild(this.container.lastChild!);
        }
    }

    private createCells() {
        this.cleanCells();
        this.cleanContainer();
        const elements: BattleshipBoardTileElement[] = [];

        for (let i = 0; i < 36; i++) {
            const tile = new BattleshipBoardTileElement(this, this.isUser);
            elements.push(tile);
            this.container.appendChild(tile);
        }

        if (!this.isUser) this.createRandomTiles(elements);

        return elements;
    }

    static createRange(ammount: number) {
        const elements = [];
        for (let i = 0; i < ammount; i++) elements.push(i);
        return elements;
    }

    private createRandomTiles(cells: BattleshipBoardTileElement[]) {
        const positionsAvaiable = BattleshipPlayerBoard.createRange(36);

        for (let ammount = 0; ammount < 10; ammount++) {
            const position = Math.floor(Math.random() * positionsAvaiable.length);
            const tile = cells[positionsAvaiable[position]];
            tile.setHasShip();
            positionsAvaiable.splice(position, 1);
        }

    }

    private createContainer() {
        const container = document.createElement("div");
        container.id = "battleship_board";

        container.style.display = "grid";
        container.style.gridTemplateColumns = "100px 100px 100px 100px 100px 100px ";
        container.style.gridTemplateRows = "100px 100px 100px 100px 100px 100px ";
        container.style.margin = "auto";
        container.style.width = "600px";
        container.style.textAlign = "center";

        return container;
    }

    update() {}


    handleClick(isTarget: boolean): void {
        if (isTarget) {
            this.targetClicked++;
        }

        if (this.targetClicked == 10) {
            this.handleWin();
            return;
        }

        if (!this.isUser) {
            this.observer.handleComputerCellClicked();
        }
    }


    simulateClick(position: number) {
        this.cells[position].simulateClick(true);
    }

    handleUserSelect(): void {

        this._targetClickRemaining--;
        this.observer.handlePlayerCellClicked();

        if (this._targetClickRemaining == 0) {
            for (const cell of this.cells) {
                cell.endUserSelecting();
            }
        }

    }

    private handleWin() {
        this._hasLost = true;
        for (const cell of this.cells) {
            cell.setGameEnded();
        }
        this.observer.update();
    }

}

window.customElements.define("battleship-player-board-element", BattleshipPlayerBoard);
