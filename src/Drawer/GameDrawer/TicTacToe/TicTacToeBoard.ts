import HTMLElementStyleApplier from "../../../Utils/HTMLElementStyleApplier";
import TicTacToeElement from "./TicTacToeElement";
import GameBoardElement from "../../GameBoardElement";
import TicTacToePanelElement from "./TicTacToePanelElement";

export enum BoardValue {
    X,
    O,
    NONE
}

export default class TicTacToeBoard extends GameBoardElement {

    private readonly container: HTMLDivElement;
    private readonly panel: TicTacToePanelElement;
    private initialPlayer = BoardValue.X;
    private actualPlayer = BoardValue.X;
    private elements: TicTacToeElement[] = [];
    private clickCounter = 0;
    private gameEnded = false;

    constructor() {
        super();
        this.container = this.createElement();
        this.createCells();
        this.appendChild(this.container);
        this.panel = new TicTacToePanelElement();
        this.appendChild(this.panel);
    }

    protected createElement(): HTMLDivElement {
        const container = document.createElement("div");
        container.id = "tic_tac_toe_board";

        const styleApplier = new HTMLElementStyleApplier(container);
        const apply = styleApplier.apply.bind(styleApplier);

        apply("display", "grid");
        apply("grid-template-columns", "200px 200px 200px");
        apply("grid-template-rows", "200px 200px 200px");
        apply("margin", "auto");
        apply("width", "600px");
        apply("text-align", "center");

        return container;
    }

    private createCells() {
        this.cleanContainer();
        this.elements = [];
        for (let i = 0; i <= 8; i++) {
            const element = new TicTacToeElement(i, this.getActualPlayer.bind(this), this.updateBoard.bind(this));
            this.elements.push(element);
            this.container.appendChild(element);
        }
    }

    private cleanContainer() {
        while (this.container.hasChildNodes()) {
            this.container.removeChild(this.container.lastChild!);
        }
    }

    private getActualPlayer(): BoardValue {
        if (this.gameEnded) return BoardValue.NONE;
        else return this.actualPlayer;
    }

    private switchBoardValue(value: BoardValue) {
        return value === BoardValue.X?
            BoardValue.O:
            BoardValue.X;
    }

    private updateBoard() {
        if (this.gameEnded) {
            return;
        }

        this.clickCounter++;

        this.actualPlayer = this.switchBoardValue(this.actualPlayer);

        const result = this.checkWinConditions();

        if (result[0]) {
            this.gameEnded = true;
            this.paintElementsVictory(result[1]);
            this.panel.updateWinValues(this.switchBoardValue(this.actualPlayer));
            this.resetGame();
            return;
        }

        if (this.clickCounter === 9) {
            this.gameEnded = true;
            this.paintElementsDraw();
            this.resetGame();
            return;
        }

    }

    private paintElementsVictory(elements: [number, number, number]) {

        for (let pos of elements) {
            this.elements[pos].paintText("#009688");
        }

    }

    private paintElementsDraw() {

        for (let i = 0; i < 9; i++) {
            this.elements[i].paintText("#b71c1c");
        }

    }

    private checkWinConditions() {
        const rows = this.checkRows();
        if (rows[0]) return rows;

        const columns = this.checkColumns();
        if (columns[0]) return columns;

        return this.checkDiagonals();
    }

    private compareElementValues(pos1: number, pos2: number) {
        const elements = this.elements;
        return  elements[pos1].actualValue !== BoardValue.NONE &&
                elements[pos1].actualValue === elements[pos2].actualValue;
    }

    private compareElementValues3(pos1: number, pos2: number, pos3: number): [boolean, [number, number, number]] {
        const result = this.compareElementValues(pos1, pos2) && this.compareElementValues(pos2, pos3);
        const values: [number, number, number] = result? [pos1, pos2, pos3]: [-1, -1, -1];
        return [result, values];
    }

    private checkRows(): [boolean, [number, number, number]] {
        const result1 = this.compareElementValues3(0, 1, 2);
        if (result1[0]) {
            return result1;
        }
        const result2 = this.compareElementValues3(3, 4, 5);
        if (result2[0]) {
            return result2;
        }
        return this.compareElementValues3(6, 7, 8);
    }

    private checkColumns(): [boolean, [number, number, number]] {
        const result1 = this.compareElementValues3(0, 3, 6);
        if (result1[0]) {
            return result1;
        }
        const result2 = this.compareElementValues3(1, 4, 7);
        if (result2[0]) {
            return result2;
        }
        return this.compareElementValues3(2, 5, 8);
    }

    private checkDiagonals() {
        const result = this.compareElementValues3(0, 4, 8);
        if (result[0]) {
            return result;
        }
        return this.compareElementValues3(2, 4, 6);
    }

    loadGameState(): void {

    }

    resetGame(): void {
        setTimeout(() => {
            this.actualPlayer = this.switchBoardValue(this.initialPlayer);
            this.initialPlayer = this.actualPlayer;
            this.createCells();
            this.gameEnded = false;
            this.clickCounter = 0;
        }, 2000);
    }

    resetGameState(): void {

    }

    saveGameState(): void {

    }

}

window.customElements.define("tic-tac-toe-board-element", TicTacToeBoard);
