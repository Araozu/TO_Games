import ContentDrawer from "../Interfaces/ContentDrawer";
import HTMLElementStyleApplier from "../Utils/HTMLElementStyleApplier";

export default class GameButtonDrawer implements ContentDrawer {

    private _element: HTMLButtonElement;
    private readonly gameName: string;

    constructor(gameName: string) {
        this.gameName = gameName;
        this._element = this.createElement();
    }

    get element(): HTMLButtonElement { return this._element; }

    private createElement() {
        const elem = document.createElement("button");
        const styleApplier = new HTMLElementStyleApplier(elem);
        const apply = styleApplier.apply.bind(styleApplier);

        apply("background-color", "white");
        apply("border", "none");
        apply("padding", "15px 30px");
        apply("margin", "15px");
        apply("font-size", "large");
        apply("box-shadow", "1px 1px 5px gray");
        apply("border-radius", "5px");
        apply("cursor", "pointer");

        elem.innerText = this.gameName;

        this._element = elem;
        return elem;
    }

    addClickEventListener(el: () => void) {
        this._element.addEventListener("click", el);
    }

    public setAsActive() {
        const elem = this._element;
        const styleApplier = new HTMLElementStyleApplier(elem);
        const apply = styleApplier.apply.bind(styleApplier);

        apply("background-color", "#009688");
        apply("color", "white");

    }

    public setAsDisabled() {
        const elem = this._element;
        const styleApplier = new HTMLElementStyleApplier(elem);
        const apply = styleApplier.apply.bind(styleApplier);

        apply("background-color", "white");
        apply("color", "black");
    }

}
