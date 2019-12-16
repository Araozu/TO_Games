import HTMLElementStyleApplier from "../Utils/HTMLElementStyleApplier";

export default class GameTittleButtonElement extends HTMLElement {

    constructor(gameName: string) {
        super();
        const styleApplier = new HTMLElementStyleApplier(this);
        const apply = styleApplier.apply.bind(styleApplier);

        // apply("text-align", "center");
        apply("background-color", "white");
        apply("border", "none");
        apply("padding", "15px 30px");
        apply("margin", "15px");
        apply("font-size", "large");
        apply("box-shadow", "1px 1px 5px gray");
        apply("border-radius", "5px");
        apply("cursor", "pointer");

        this.innerText = gameName;
    }

    public addClickEventListener(el: () => void) {
        this.addEventListener("click", el);
    }

    public setAsActive() {
        const styleApplier = new HTMLElementStyleApplier(this);
        const apply = styleApplier.apply.bind(styleApplier);

        apply("background-color", "#009688");
        apply("color", "white");

    }

    public setAsDisabled() {
        const styleApplier = new HTMLElementStyleApplier(this);
        const apply = styleApplier.apply.bind(styleApplier);

        apply("background-color", "white");
        apply("color", "black");
    }

}

window.customElements.define("game-title-button-element", GameTittleButtonElement);
