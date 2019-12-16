import MainScreen from "./Screens/MainScreen";
import HTMLElementGetter from "./Utils/HTMLElementGetter";
import TicTacToeBoard from "./Drawer/GameDrawer/TicTacToe/TicTacToeBoard";
import MainTitleElement from "./Drawer/MainTitleElement";
import GameSelectorElement from "./Drawer/GameSelectorElement";
import GameContainerElement from "./Screens/GameContainerElement";
import GameTittleButtonElement from "./Drawer/GameTittleButtonElement";
import BattleshipBoard from "./Drawer/GameDrawer/Battleship/BattleshipBoard";

const initiateGameButtons = (ga: GameSelectorElement, gameContainer: GameContainerElement) => {

    const button1 = new GameTittleButtonElement("Battleship");
    const button2 = new GameTittleButtonElement("Tic Tac Toe");
    const button3 = new GameTittleButtonElement("Drunken Bottle");

    button1.addClickEventListener(() => {
        button2.setAsDisabled();
        button3.setAsDisabled();
        button1.setAsActive();
        gameContainer.drawGame(new BattleshipBoard());
    });
    ga.addButton(button1);

    button2.addClickEventListener(() => {
        button1.setAsDisabled();
        button3.setAsDisabled();
        button2.setAsActive();
        gameContainer.drawGame(new TicTacToeBoard());
    });
    ga.addButton(button2);

    button3.addClickEventListener(() => {
        button1.setAsDisabled();
        button2.setAsDisabled();
        button3.setAsActive();
    });
    ga.addButton(button3);

};

const main = async (args: string[]) => {

    const mainDiv = await new HTMLElementGetter().getElementPromise("app");
    const mainScreen = new MainScreen(mainDiv);
    mainScreen.draw(new MainTitleElement());

    const gameSelectorDrawer = new GameSelectorElement();
    mainScreen.draw(gameSelectorDrawer);

    const gameContainer = new GameContainerElement();
    mainScreen.draw(gameContainer);

    initiateGameButtons(gameSelectorDrawer, gameContainer);

};

main([]);
