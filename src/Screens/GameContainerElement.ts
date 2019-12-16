import GameBoardElement from "../Drawer/GameBoardElement";

export default class GameContainerElement extends HTMLElement {

    constructor() {
        super();

        this.id = "game_container";

    }

    drawGame(game: GameBoardElement) {

        if (this.firstChild) {
            this.removeChild(this.firstChild);
        }

        this.appendChild(game);

    }

}

window.customElements.define("game-container-element", GameContainerElement);