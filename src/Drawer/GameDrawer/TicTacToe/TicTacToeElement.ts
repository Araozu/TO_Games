import {BoardValue} from "./TicTacToeBoard";
import HTMLElementStyleApplier from "../../../Utils/HTMLElementStyleApplier";

export default class TicTacToeElement extends HTMLElement {

    private readonly actualPlayerFunction: () => BoardValue;
    private readonly updateBoardFunction: () => void;
    private readonly position: number;
    actualValue = BoardValue.NONE;

    constructor(position: number, actualPlayerFunction: () => BoardValue, updateBoardFunction: () => void) {
        super();
        this.position = position;
        this.actualPlayerFunction = actualPlayerFunction;
        this.updateBoardFunction = updateBoardFunction;

        this.id = `tic_tac_toe_element_${ position }`;
        this.setAttribute("clicked", "false");

        const styleApplier = new HTMLElementStyleApplier(this);
        const apply = styleApplier.apply.bind(styleApplier);

        apply("line-height", "200px");
        apply("vertical-align", "middle");
        apply("font-size", "150px");
        apply("user-select", "none");
        apply("cursor", "pointer");

        const border = "solid 5px black";
        switch (position) {
            case 0:
                apply("border-right", border);
                apply("border-bottom", border);
                break;
            case 1:
                apply("border-bottom", border);
                break;
            case 2:
                apply("border-left", border);
                apply("border-bottom", border);
                break;
            case 3:
                apply("border-right", border);
                break;
            case 5:
                apply("border-left", border);
                break;
            case 6:
                apply("border-right", border);
                apply("border-top", border);
                break;
            case 7:
                apply("border-top", border);
                break;
            case 8:
                apply("border-left", border);
                apply("border-top", border);
                break;
        }

        this.addEventListener("click", this.handleClick.bind(this));
    }

    private handleClick() {

        const value = this.actualPlayerFunction();

        if (value == BoardValue.NONE) return;

        const isClicked = this.getAttribute("clicked");

        if (isClicked === "false") {
            this.setAttribute("clicked", "true");
            this.style.cursor = "default";

            this.innerText = value === BoardValue.X ?
                "X" :
                value === BoardValue.O ?
                    "O" :
                    "-";
            this.actualValue = value;

            this.updateBoardFunction();
        }

    }

    paintText(color: string) {
        this.style.color = color;
    }

}

window.customElements.define("tic-tac-toe-element-element", TicTacToeElement);
