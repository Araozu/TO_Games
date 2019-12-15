import HTMLElementStyleApplier from "../Utils/HTMLElementStyleApplier";

export default class MainTitleElement extends HTMLElement {

    constructor() {
        super();

        const styleApplier = new HTMLElementStyleApplier(this);
        const apply = styleApplier.apply.bind(styleApplier);

        this.id = "title_container";

        apply("display", "block");
        apply("border", "solid 1px black");
        apply("padding", "20px 10px");
        apply("text-align", "center");
        apply("font-size", "xx-large");

        this.innerText = "Games";

    }

}

window.customElements.define("main-title-element", MainTitleElement);
