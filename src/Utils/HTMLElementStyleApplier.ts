export default class HTMLElementStyleApplier {

    private element: HTMLElement;

    constructor(element: HTMLElement) {
        if (element === undefined) throw new Error("Error when creating an HTMLElementStylepplier: " +
            "The target element is undefined.");
        this.element = element;
    }

    apply(property: string, value: string) {
        this.element.style.setProperty(property, value);
    }

}