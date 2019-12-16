import BattleshipBoardTileElement from "./BattleshipBoardTileElement";

export interface TileObserver {

    notifyTargetClick(): void;

}

export default class BattleshipPlayerBoard extends HTMLElement implements TileObserver {

    private readonly container: HTMLDivElement;
    private cells: BattleshipBoardTileElement[];
    private readonly isUser: boolean;
    private targetClickCount = 0;

    constructor(isUser = false) {
        super();
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
        let ammount = 10;
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

    notifyTargetClick(): void {
        this.targetClickCount++;
    }


}

window.customElements.define("battleship-player-board-element", BattleshipPlayerBoard);
