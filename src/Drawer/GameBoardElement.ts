export default abstract class GameBoardElement extends HTMLElement {

    public abstract resetGame(): void;

}

window.customElements.define("game-drawer-element", GameBoardElement);
