import BattleshipBoardTileElement from "./BattleshipBoardTileElement";
import UpdateObserver from "./UpdateObserver";

export default class BattleshipPlayerBoard extends HTMLElement implements UpdateObserver {

    private readonly container: HTMLDivElement;
    private cells: BattleshipBoardTileElement[];
    private readonly isUser: boolean;
    private targetClickCount = 0;
    private readonly observer: UpdateObserver;
    private hasWin = false;

    constructor(observer: UpdateObserver, isUser = false) {
        super();
        this.observer = observer;
        this.isUser = isUser;
        this.container = this.createContainer();
        this.cells = this.createCells();

        this.appendChild(this.container);
    }

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
            const tile = new BattleshipBoardTileElement(this);
            elements.push(tile);
            this.container.appendChild(tile);
        }

        if (!this.isUser) this.createRandomTiles(elements);

        return elements;
    }

    private createRange(ammount: number) {
        const elements = [];
        for (let i = 0; i < ammount; i++) elements.push(i);
        return elements;
    }

    private createRandomTiles(cells: BattleshipBoardTileElement[]) {
        const positionsAvaiable = this.createRange(36);

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

    update() {
        this.targetClickCount++;
        if (this.targetClickCount == 10) {
            this.handleWin();
        }
    }

    private handleWin() {
        this.hasWin = true;
        for (const cell of this.cells) {
            cell.setGameEnded();
        }
        this.observer.update();
    }

}

window.customElements.define("battleship-player-board-element", BattleshipPlayerBoard);
