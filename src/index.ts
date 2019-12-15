import MainScreen from "./Screens/MainScreen";
import HTMLElementGetter from "./Utils/HTMLElementGetter";
import GameButtonDrawer from "./Drawer/GameButtonDrawer";
import TicTacToeBoard from "./Drawer/GameDrawer/TicTacToe/TicTacToeBoard";
import MainTitleElement from "./Drawer/MainTitleElement";
import GameSelectorElement from "./Drawer/GameSelectorElement";
import GameContainerElement from "./Screens/GameContainerElement";
import GameTittleButtonElement from "./Drawer/GameTittleButtonElement";

const initiateGameButtons = (ga: GameSelectorElement, gameContainer: GameContainerElement) => {

    const button1 = new GameTittleButtonElement("Battleship");
    button1.addClickEventListener(() => {
        console.log("The button has been pressed! :D")
    });
    ga.addButton(button1);

    const button2 = new GameTittleButtonElement("Tic Tac Toe");
    button2.addClickEventListener(() => {
        button2.setAsActive();
        gameContainer.drawGame(new TicTacToeBoard());
    });
    ga.addButton(button2);

    const button3 = new GameTittleButtonElement("Drunken Bottle");
    button3.addClickEventListener(() => {
        console.log("And again... ")
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
