import GameDrawerElement from "../Drawer/GameDrawerElement";

export default class GameContainerElement extends HTMLElement {

    constructor() {
        super();

        this.id = "game_container";

    }

    drawGame(game: GameDrawerElement) {

        if (this.firstChild) {
            this.removeChild(this.firstChild);
        }

        this.appendChild(game);
        game.resetGame();

    }

}

window.customElements.define("game-container-element", GameContainerElement);