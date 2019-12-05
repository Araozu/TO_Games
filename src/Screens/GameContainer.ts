import ContentDrawer from "../Interfaces/ContentDrawer";
import GameDrawer from "../Drawer/GameDrawer";

export default class GameContainer implements ContentDrawer {

    private readonly _element: HTMLElement;

    get element(): HTMLElement {
        return this._element;
    }

    constructor() {
        this._element = this.setUpElement();
    }


    private setUpElement(): HTMLElement {
        const elem = document.createElement("div");

        elem.id = "game_container";

        return elem;
    }

    private drawGame(game: GameDrawer) {

        const el = this._element;
        if (el.firstChild) {
            el.removeChild(el.firstChild);
        }

        el.appendChild(game.element);
        game.resetGame();

    }

}