import MainTitleDrawer from "./Drawer/MainTitleDrawer";
import MainScreen from "./Screens/MainScreen";
import HTMLElementGetter from "./Utils/HTMLElementGetter";
import GameSelectorDrawer from "./Drawer/GameSelectorDrawer";
import GameButtonDrawer from "./Drawer/GameButtonDrawer";

const initiateGameButtons = (ga: GameSelectorDrawer) => {

    const button1 = new GameButtonDrawer("Battleship");
    button1.addClickEventListener(() => {
        console.log("The button has been pressed! :D")
    });
    ga.addButton(button1.element);

    const button2 = new GameButtonDrawer("Tic Tac Toe");
    button2.addClickEventListener(() => {
        console.log("Yet again...")
    });
    ga.addButton(button2.element);

    const button3 = new GameButtonDrawer("Drunken Bottle");
    button3.addClickEventListener(() => {
        console.log("And again... ")
    });
    ga.addButton(button3.element);

};

const main = async (args: string[]) => {

    const mainDiv = await new HTMLElementGetter().getElementPromise("app");
    const mainScreen = new MainScreen(mainDiv);
    mainScreen.draw(new MainTitleDrawer());

    const gameSelectorDrawer = new GameSelectorDrawer();
    mainScreen.draw(gameSelectorDrawer);

    initiateGameButtons(gameSelectorDrawer);

};

main([]);
