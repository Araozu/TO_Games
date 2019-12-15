export default abstract class GameDrawerElement extends HTMLElement {

    public abstract resetGame(): void;

    public abstract saveGameState(): void;

    public abstract loadGameState(): void;

    public abstract resetGameState(): void;

}

window.customElements.define("game-drawer-element", GameDrawerElement);
