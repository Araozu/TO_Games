import ContentDrawer from "../Interfaces/ContentDrawer";

export default class MainTitleDrawer implements ContentDrawer {

    draw(): HTMLDivElement {
        const elem = document.createElement("div");
        elem.innerText = "Hola mundo!";
        console.log("Drawing the main banner.");
        return elem;
    }

}
