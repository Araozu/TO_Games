import ContentDrawer from "../Interfaces/ContentDrawer";
import HTMLElementStyleApplier from "../Utils/HTMLElementStyleApplier";

export default class GameSelectorDrawer implements ContentDrawer {

    private _element: HTMLDivElement;

    constructor() {
        this._element = this.createContainer();
    }

    get element(): HTMLDivElement {
        return this._element;
    }

    private createContainer() {
        const elem = document.createElement("div");
        const styleApplier = new HTMLElementStyleApplier(elem);
        const apply = styleApplier.apply.bind(styleApplier);

        elem.id = "title_game_selector";

        apply("margin", "30px 15px");
        apply("padding", "20px 10px");
        apply("display", "grid");
        apply("grid-template-columns", "auto auto auto");

        return elem;
    }

    addButton(button: HTMLButtonElement) {
        this._element.appendChild(button);
    }

}