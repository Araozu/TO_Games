import HTMLElementStyleApplier from "../Utils/HTMLElementStyleApplier";

export default class GameSelectorElement extends HTMLElement {

    constructor() {
        super();

        const styleApplier = new HTMLElementStyleApplier(this);
        const apply = styleApplier.apply.bind(styleApplier);

        this.id = "title_game_selector";

        apply("display", "block");
        apply("margin", "30px 15px");
        apply("padding", "20px 10px");
        apply("display", "grid");
        apply("grid-template-columns", "auto auto auto");

    }

    addButton(button: HTMLElement) {
        this.appendChild(button);
    }

}

window.customElements.define("game-selector-element", GameSelectorElement);
