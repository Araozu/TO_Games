import GameDrawer from "../GameDrawer";
import Board from "./TicTacToe/Board";
import HTMLElementStyleApplier from "../../Utils/HTMLElementStyleApplier";

export default class TicTacToeDrawer extends GameDrawer {

    protected createElement(): HTMLElement {
        const elem = document.createElement("div");
        elem.id = "tic_tac_toe";

        const styleApplier = new HTMLElementStyleApplier(elem);
        const apply = styleApplier.apply.bind(styleApplier);

        apply("text-align", "center");


        elem.appendChild(new Board().element);

        return elem;
    }

    loadGameState(): void {

    }

    resetGame(): void {

    }

    resetGameState(): void {

    }

    saveGameState(): void {

    }

    startGame(): void {

    }

}