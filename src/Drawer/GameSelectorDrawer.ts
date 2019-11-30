import ContentDrawer from "../Interfaces/ContentDrawer";
import HTMLElementStyleApplier from "../Utils/HTMLElementStyleApplier";

export default class GameSelectorDrawer implements ContentDrawer {

    container: HTMLDivElement;

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

    draw(): HTMLElement {
        const elem = this.createContainer();
        this.container = elem;
        return elem;
    }

    addButton(button: HTMLButtonElement) {
        this.container.appendChild(button);
    }

}