import ContentDrawer from "../Interfaces/ContentDrawer";

export default abstract class GameDrawer implements ContentDrawer {

    protected abstract readonly _element: HTMLElement;

    get element(): HTMLElement {
        return this._element;
    }

    protected abstract createElement(): HTMLElement;

    public abstract resetGame(): void;

    public abstract startGame(): void;

    public abstract saveGameState(): void;

    public abstract loadGameState(): void;

    public abstract resetGameState(): void;

}