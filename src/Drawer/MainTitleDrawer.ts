import ContentDrawer from "../Interfaces/ContentDrawer";
import HTMLElementStyleApplier from "../Utils/HTMLElementStyleApplier";

export default class MainTitleDrawer implements ContentDrawer {

    private _element: HTMLElement;

    constructor() {
        const elem = this.createContainer();
        elem.innerText = "Games";

        this._element = elem;
    }

    get element(): HTMLElement {
        return this._element;
    }

    private createContainer() {
        const elem = document.createElement("div");
        const styleApplier = new HTMLElementStyleApplier(elem);
        const apply = styleApplier.apply.bind(styleApplier);

        elem.id = "title_container";

        apply("border", "solid 1px black");
        apply("padding", "20px 10px");
        apply("text-align", "center");
        apply("font-size", "xx-large");

        return elem;
    }


}
