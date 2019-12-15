import ContentDrawer from "../Interfaces/ContentDrawer";

export default class MainScreen {

    private mainDiv: HTMLElement;

    constructor(mainDiv: HTMLElement) {
        this.mainDiv = mainDiv;
    }

    draw(drawer: HTMLElement) {
        this.mainDiv.appendChild(drawer);
    }

}