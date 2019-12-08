import ContentDrawer from "../../../Interfaces/ContentDrawer";
import {BoardValue} from "./Board";

export default class TicTacToeElement implements ContentDrawer{

    private readonly _element: HTMLDivElement;
    private readonly actualPlayerFunction: () => BoardValue;
    private readonly updateBoardFunction: () => void;
    private readonly position: number;
    actualValue = BoardValue.NONE;

    constructor(position: number, actualPlayerFunction: () => BoardValue, updateBoardFunction: () => void) {
        this.position = position;
        this.actualPlayerFunction = actualPlayerFunction;
        this.updateBoardFunction = updateBoardFunction;

        const element = document.createElement("div");
        element.id = `tic_tac_toe_element_${ position }`;
        element.setAttribute("clicked", "false");

        element.style.lineHeight = "200px";
        element.style.verticalAlign = "middle";
        element.style.fontSize = "150px";
        element.style.userSelect = "none";
        element.style.cursor = "pointer";

        const border = "solid 5px black";
        switch (position) {
            case 0:
                element.style.borderRight = border;
                element.style.borderBottom = border;
                break;
            case 1:
                element.style.borderBottom = border;
                break;
            case 2:
                element.style.borderLeft = border;
                element.style.borderBottom = border;
                break;
            case 3:
                element.style.borderRight = border;
                break;
            case 5:
                element.style.borderLeft = border;
                break;
            case 6:
                element.style.borderRight = border;
                element.style.borderTop = border;
                break;
            case 7:
                element.style.borderTop = border;
                break;
            case 8:
                element.style.borderLeft = border;
                element.style.borderTop = border;
                break;
        }

        element.addEventListener("click", this.handleClick.bind(this));

        this._element = element;
    }

    get element() {
        return this._element;
    }

    private handleClick() {

        const value = this.actualPlayerFunction();
        const isClicked = this._element.getAttribute("clicked");

        if (isClicked === "false") {
            this._element.setAttribute("clicked", "true");
            this._element.style.cursor = "default";

            this._element.innerText = value === BoardValue.X ?
                "X" :
                value === BoardValue.O ?
                    "O" :
                    "-";
            this.actualValue = value;

            this.updateBoardFunction();
        }

    }

    paintText(color: string) {
        this._element.style.color = color;
    }

}