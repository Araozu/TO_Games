export default abstract class GameBoardElement extends HTMLElement {

    public abstract resetGame(): void;

    public abstract saveGameState(): void;

    public abstract loadGameState(): void;

    public abstract resetGameState(): void;

}

window.customElements.define("game-drawer-element", GameBoardElement);
