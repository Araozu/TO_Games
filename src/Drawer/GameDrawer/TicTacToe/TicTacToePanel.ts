export default class TicTacToePanel extends HTMLElement {

    constructor() {
        super();
        this.innerText = "olol"
    }

}

window.customElements.define("tic-tac-toe-panel-element", TicTacToePanel);
