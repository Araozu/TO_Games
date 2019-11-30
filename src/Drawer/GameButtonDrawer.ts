import ContentDrawer from "../Interfaces/ContentDrawer";

export default class GameButtonDrawer implements ContentDrawer{

    gameName: string;

    constructor(gameName: string) {
        this.gameName = gameName;
    }

    private createElement() {
        return document.createElement("button");
    }

    draw(): HTMLButtonElement {
        const elem = this.createElement();
        elem.innerText = this.gameName;
        return elem;
    }

}
